const Discord = require("discord.js");
const Command = require('../../Structure/Command');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			aliases: [],
			description: 'Check the changelog of the bot',
			category: 'Utilities',
			usage: ''
		});
	}

	async run(message, args) {
    let changelogembed = new Discord.MessageEmbed()
    .setTitle('<a:obamacircle:718653309023682700> Changelog')
    .setDescription('Check the New Updates at [Discord Support Server](https://discord.gg/ZU8zFx8)')
    .setColor('RANDOM')
    .setFooter(`Requested by ${message.author.tag} `)
    return message.channel.send(changelogembed);
    
}


}
