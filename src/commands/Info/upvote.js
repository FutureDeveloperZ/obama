const Discord = require("discord.js");
const Command = require('../../Structure/Command');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			aliases: [],
			description: 'Upvote the bot will help out alot',
			category: 'Utilities',
			usage: ''
		});
	}

	async run(message, args) {

const embed = new Discord.MessageEmbed()
.setTitle('UPVOTE')
.setThumbnail(bot.user.displayAvatarURL({ size: 2048 }))
.setDescription("Upvote Obama in any of these Sites below")
.addField(`Discord Bot List`, `[Upvote Here](https://discordbotlist.com/bots/obama/upvote)`)
.addField(`Bots for Discord `, `[Upvote Here](https://botsfordiscord.com/bot/444463875908304901/vote)`)
.addField(`Discord Boats`, `[Upvote Here](https://discord.boats/bot/444463875908304901/vote)`)
.addField(`Top.gg (Not Working)`, `[Upvote Here](https://top.gg/bot/444463875908304901/vote)`)
.setColor('#0011ff')
return message.channel.send(embed);


}

   
}