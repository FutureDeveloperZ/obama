const Discord = require("discord.js");
const Command = require('../../Structure/Command');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			aliases: [],
			description: 'Check the Latency of the bot',
			category: 'Utilities',
			usage: ''
		});
	}

	async run(message, args) {
	let author = message.author;

	const embed = new Discord.MessageEmbed()
		.setAuthor(author.username)
		.addField("📊 API Latency:","`" + `${Math.round(this.client.ws.ping)}` + "`ms")
        .setColor('#0017FF');
        
	message.channel.send({ embed });
};


}