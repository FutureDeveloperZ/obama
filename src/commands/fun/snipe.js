const Discord = require("discord.js")
// const config = require("../../config.json")
const Command = require('../../Structure/Command');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			aliases: [],
			description: 'Get a delete message lol',
			category: 'Fun',
			usage: ''
		});
	}
	
async run(message, args) {
    
    const msg = this.client.snipes.get(message.channel.id)
    if(!msg) return message.channel.send("There are no deleted messages in this channel!")
    const embed = new Discord.MessageEmbed()
    .setColor('#3f0ae3')
    .setAuthor(msg.author, msg.avatar)
    .setDescription(msg.content)
    .setTimestamp()
    .setFooter();
    if(msg.image)embed.setImage(msg.image)
    
    message.channel.send(embed)
   
    
  }

}