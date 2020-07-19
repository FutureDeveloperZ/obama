const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
	console.log("bot: " + bot);
	console.log("msg: " + message);
	console.log("args: " +args);
}

module.exports.help = {
	name: "test"
}