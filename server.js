const net = require("net");

class Entity {
	
}

class Client {
	#id;
	#socket;
	#entity;
	
	constructor(id, socket) {
		this.#id = id;
		this.#socket = socket;
		this.#entity = null;
		
		socket.write("" + id);
		
		socket.on("data", data => {
			console.log(this.toString() + ": " + data.toString());
		});
		
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
	
	setEntity() {
		this.#entity = new Entity();
	}
	
	getSocket() {
		return this.#socket;
	}
	
	toString() {
		return "Client #" + this.#id;
	}
}

var client1, client2;
var playerCount = 0;
const server = net.createServer(c => {
	if (playerCount >= 2) {
		c.end("0");
		return;
	}
	if (playerCount)
		client2 = new Client(2, c);
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

server.listen(12345);