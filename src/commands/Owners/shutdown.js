const Discord = require('discord.js');
const Command = require('../../Structure/Command');
const config = require('../../../config.json');

module.exports = class extends Command {

constructor(...args) {
		super(...args, {
			aliases: ['off'],
			description: 'shutdowns the bot',
			category: 'Owner',
			usage: ''
		});
	}

 async run(message) {
  
  
let embed = new Discord.MessageEmbed()
  .setTitle("Shutdown")
  .setDescription("Sorry, the `shutdown` command can only be executed by the Main Developer.")
  .setColor("#cdf785");
  if(!this.client.owners.includes(message.author.id)) return message.channel.send(embed);
 
  if (this.client.owners.includes(message.author.id)) {
    let embed = new Discord.MessageEmbed()
      .setTitle('Shutting Down...')
      .setColor(config.red);

    message.channel.send(embed)
      .then(message => client.destroy())
      }
  }
}