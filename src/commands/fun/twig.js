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
  var quotes = [
    "Cockaine",
    "Yesyes",
    "Hot",
    "YES",
    "HAHAHHAHAHAHAHAHAHAHAHAHAHAHA",
    "Woah dope",
    "Okie",
    "epicccccc",
    "XD",
    "idiot",
    ]
  let Embed = new MessageEmbed()
  .setColor("#f0b3fa")
  .setAuthor('TWIG QUOTES')
  .setDescription(quotes[Math.floor(Math.random() * quotes.length)])
  message.channel.send(Embed);
}
}