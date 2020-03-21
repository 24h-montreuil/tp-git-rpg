const net = require("net");

const server = net.createServer(c => {
	c.write("Hello World!");
});

server.listen(12345);