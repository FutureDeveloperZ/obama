const { MessageEmbed } = require("discord.js");
const superagent = require('superagent');
const Command = require('../../Structure/Command');


module.exports = class extends Command {
  
  
constructor(...args) {
		super(...args, {
			aliases: [],
			description: 'Kiss somebody',
			category: 'Gif and Images',
			usage: 'kiss <user>'
		});
	}


async run(message, args) {
    let user = message.mentions.users.first() || message.author;
   superagent.get("https://nekos.life/api/kiss", (err, res) => {
        if (err) { return console.log(`An error Occured while running kiss command. Ran by ${message.author.tag}.\nError: ${err}`)}
    else{
        message.channel.send("", { embed: new MessageEmbed()
                                  .setDescription(`**${message.author.username}** kissed **${user.username}**`)
                                  .setColor(`${message.guild.me.displayHexColor!=='#FFFFFF' ? message.guild.me.displayHexColor : 0xffffff}`)
                                  .setImage(res.body.url)
                                  //.setFooter(`Requested by ${message.author.tag}`)
                                 })
    }
    })
}


}
