import { Wizard, Troll } from "./Entities/entity.js";
const net = require("net");

class Client {
	constructor(id, socket) {
		this.id = id;
		this.socket = socket;
		this.entity = null;
		this.enemy = null;
		
		socket.write("" + id);
		
		socket.on("data", data => {
			console.log(this.toString() + ": " + data.toString());
		});
		
		var initListener = function(data) {
			this.setEntity(...data.toString().split(";"));
			socket.removeListener("data", initListener);
		}
		
		socket.on("data", initListener);
		
		socket.on("close", hadErr => {
			if (hadErr)
				console.log("Connection with client " + this.toString() + " closed due to an error!");
			else
				console.log("Connection with client " + this.toString() + " closed!");
		});
		
		socket.on("error", err => {
			console.error("Client error: " + err.toString());
		});
	}
	
	waitAction(callback) {
		var actionListener = function(data) {
			callback(realActionListener(data.toString()));
			this.socket.removeListener("data", actionListener);
		};
		this.send("2:Waiting action");
		this.socket.on("data", actionListener);
	}
	
	useAbility(index) {
		return this.entity.useAbility(index);
	}
	
	state() {
		return this.id + ";" + this.entity.getType() + ";" + this.entity.getHP() + ";" + this.entity.getEffects();
	}
	
	send(msg) {
		this.socket.write(msg);
	}
	
	end() {
		this.socket.end("0:End of connection");
	}
	
	setEntity(type, name) {
		switch (type.toLowerCase()) {
		case "wizard":
			this.entity = new Wizard(name);
			break;
		case "troll":
			this.entity = new Troll(name);
			break;
		default:
			console.error("Unable to recognize entity type!");
		}
	}
	
	setEnemy(enemy) {
		this.enemy = enemy;
	}
	
	getEnemy() {
		return this.enemy;
	}
	
	hasEntity() {
		return this.entity != null;
	}
	
	getSocket() {
		return this.socket;
	}
	
	toString() {
		return "Client #" + this.id;
	}
}

function realActionListener(data, client) {
	return client.useAbility(Number(data));
}

var client1, client2;
var playerCount = 0;
const server = net.createServer(c => {
	if (playerCount >= 2) {
		c.end("0:End of connection");
		return;
	}
	if (playerCount) {
		client2 = new Client(2, c);
		startGame();
	}
	else
		client1 = new Client(1, c);
	playerCount++;
});

server.on("error", err => {
	console.error("Server error: " + err.toString());
});

server.on("close", () => {
	console.log("Server closed!");
});

function startGame() {
	client1.setEnemy(client2);
	client2.setEnemy(client1);
	sendAll("1:Starting game");
	playTurn(client1);
}

function playTurn(client) {
	var enemy = client.getEnemy();
	var gameState = client.state() + "&" + enemy.state();
	sendAll(gameState);
	client.waitAction(type => {
		switch (type.toLowerCase()) {
		case "atk":
			enemy.send("3:Got attacked");
			break;
		case "debuff":
			enemy.send("4:Got debuffed");
			break;
		case "heal":
			enemy.send("5:Enemy healed");
			break;
		case "buff":
			enemy.send("6:Enemy buffed");
			break;
		}
		playTurn(enemy);
	});
}

function sendAll(msg) {
	client1.send(msg);
	client2.send(msg);
}

server.listen(12345, () => {
	console.log("Server started!")
});