const { MessageEmbed} = require("discord.js");
const Command = require('../../Structure/Command');


module.exports.run = class extends Command {
  
  
constructor(...args) {
		super(...args, {
			aliases: [''],
			description: 'Ask a question and get and answer',
			category: 'Fun',
			usage: '8ball [question]'
		});
	}


async run(message, args) {
  
  
  
  if(!args[2]) return message.reply("Ask a full question Please!");
  let replies = ["Yes", "No", "I don't know", "Maybe", "Try again later", "Without a doubt", "Concentrate and ask again", "Signs point to yes", "Don't count on it"];
  
  let result = Math.floor((Math.random() * replies.length));
  let question = args.join(" ")
  
  let ballembed = new MessageEmbed()
  .setAuthor(message.author.tag)
  .setColor("#FF0000")
  .addField(":thinking: Question:", question)
  .addField("Answer:", replies[result])
  .setTimestamp()
  .setFooter(`Requested by ${message.author.tag}`)
  
  message.channel.send(ballembed);
  
}
}