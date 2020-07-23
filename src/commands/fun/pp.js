const { MessageEmbed } = require('discord.js');
const Command = require('../../Structure/Command');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			aliases: ['penis', 'howbig', 'peepee', 'pickle'],
			description: 'How big is pp',
			category: 'Fun',
			usage: ''
		});
	}

	async run(message) {

let embed = new MessageEmbed()
 .setAuthor(`peepee size machine`)
 .addField(`${message.author.tag}\n8${"=".repeat(Math.floor(Math.random() * 15))}D`);
 message.channel.send(embed)
}
}