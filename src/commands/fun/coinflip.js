const { MessageEmbed } = require("discord.js");
const Command = require('../../Structure/Command');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			aliases: ['cf'],
			description: 'Coinflip and wait for the coin to flip',
			category: 'Fun',
			usage: ''
		});
	}

	async run(message) {

	var resultflip = Math.floor((Math.random() * 2) + 1);
	if (resultflip == 1) {

	const embedheads = new MessageEmbed()
	.setTitle("Coinflip")
	.setColor("#F8A61C")
	.setDescription(`The coin landed on heads!`);
	message.channel.send(embedheads);
	} else if (resultflip == 2) {

	const embedtails = new MessageEmbed()
	.setTitle("Coinflip")
	.setColor("#F8A61C")
	.setDescription(`The coin landed on tails!`);
	message.channel.send(embedtails);
	}
	}
  }
