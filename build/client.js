'use strict';

var _entity = require('./Entities/entity.js');

var _net = require('net');

var _net2 = _interopRequireDefault(_net);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var readline = require('readline');

var rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

var client = _net2.default.connect(12345, function () {
	rl.question('test', function (e) {
		return console.log(e);
	});
	client.write("Coucou ça va ?");
});

client.on("data", function (data) {
	console.log(data.toString());
});

client.on("error", function (err) {
	console.error(err);
});