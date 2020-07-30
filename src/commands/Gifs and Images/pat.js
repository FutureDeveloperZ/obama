const { MessageEmbed } = require("discord.js");
const superagent = require('superagent');
const Command = require('../../Structure/Command');


module.exports = class extends Command {
  
  
constructor(...args) {
		super(...args, {
			aliases: [],
			description: 'Pat somebody',
			category: 'Gif and Images',
			usage: 'pat <user>'
		});
	}


async run(message, args) {
    let user = message.mentions.users.first() || message.author;
   superagent.get("https://nekos.life/api/pat", (err, res) => {
        if (err) { return console.log(`An error Occured while running pat command. Ran by ${message.author.tag}.\nError: ${err}`)}
    else{
        message.channel.send("", { embed: new MessageEmbed()
                                  .setDescription(`**${message.author.username}** pat **${user.username}**`)
                                  .setColor(`${message.guild.me.displayHexColor!=='#FFFFFF' ? message.guild.me.displayHexColor : 0xffffff}`)
                                  .setImage(res.body.url)
                                  //.setFooter(`Requested by ${message.author.tag}`)
                                 })
    }
    })
}


}
