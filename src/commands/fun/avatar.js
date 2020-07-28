const { MessageEmbed  } = require("discord.js");
const Command = require('../../Structure/Command');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			aliases: ['av'],
			description: 'Displays the avatar of a user',
			category: 'Fun',
			usage: 'avatar [user]'
		});
	}

	async run(message) {

  let mentions = message.mentions.members.first()
  if(!mentions) {
    let sicon = message.author.avatarURL({dynamic: true, size: 256 })
    let embed = new MessageEmbed()
    .setImage(sicon)
    .setColor("#f7abab") 
    .setDescription(`**${message.author.username}#${message.author.discriminator}**'s avatar :`);
    message.channel.send(embed)
  } else {
    let sicon = mentions.user.avatarURL({dynamic: true, size: 256 })
    let embed = new MessageEmbed()
    .setColor("#f7abab")
    .setDescription(`**${mentions.user.username}#${mentions.user.discriminator}**'s avatar :`)
    .setImage(sicon)
    message.channel.send(embed)
  }
}
}