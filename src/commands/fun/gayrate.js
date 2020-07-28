const Discord = require("discord.js");
const Command = require('../../Structure/Command');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			aliases: ['howgay'],
			description: 'How gay are u or your friend',
			category: 'Fun',
			usage: ''
		});
	}

	async run(message) {
    let user = message.mentions.users.first() || message.author;
    let gayembed = new Discord.MessageEmbed()
    .setAuthor(`${user.username}`)
    .addField(`Gay Rate`, `You Are **${Math.floor(Math.random() * 100)}% Gay**! :gay_pride_flag:`)
    .setColor('RANDOM')
    .setFooter(`😂😂 | Requested by ${message.author.tag} | Dope`)
    return message.channel.send(gayembed);
}
}