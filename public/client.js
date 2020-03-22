const net = require("net");

const client = net.connect(12345, () => {
	client.write("Coucou ça va ?");
});

client.on("data", data => {
	console.log(data.toString());
});

client.on("error", err => {
	console.error(err);
});