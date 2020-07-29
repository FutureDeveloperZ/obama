const { MessageEmbed} = require("discord.js");
const Command = require('../../Structure/Command');


module.exports = class extends Command {
  
  
constructor(...args) {
		super(...args, {
			aliases: [],
			description: 'SECRET',
			category: 'Fun',
			usage: 'SECRET'
		});
	}


async run(message, args) {
  
  if (message.author.id !== '650536741068865537') {
    return message.channel.send('YOU ARE NOT TWIG DUMB ASS');
  }
  
  let Embed = new MessageEmbed()
  .setAuthor('TWIG')
  .setDescription('YES')
  message.channel.send(Embed);
}
}