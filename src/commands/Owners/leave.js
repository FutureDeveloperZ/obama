const Discord = require('discord.js');
const Command = require('../../Structure/Command');
const config = require('../../../config.json');

module.exports = class extends Command {


constructor(...args) {
		super(...args, {
			aliases: ['bye'],
			description: 'he leaves the server',
			category: 'Owner',
			usage: 'leave'
		});
	}

  async run(message) {
  

  
let embed = new Discord.MessageEmbed()
  .setTitle("leave")
  .setDescription("Sorry, the `leave` command can only be executed by the Main Developer.")
  .setColor("#cdf785");
  if(!this.client.owners.includes(message.author.id)) return message.channel.send(embed);
  if (this.client.owners.includes(message.author.id)) {
    let embed = new Discord.MessageEmbed()
      .setTitle(`It's time for ${this.client.user.username} to go!!!`)
      .setColor(config.red)
      .setDescription('Seeee ya Suckers!...')
    message.channel.send(embed);
    message.guild.leave();
    return
         }
    }
};
