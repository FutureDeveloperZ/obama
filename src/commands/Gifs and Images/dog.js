const { MessageEmbed } = require('discord.js');
const superagent = require('superagent');
const Command = require('../../Structure/Command');


module.exports = class extends Command {
  
  
constructor(...args) {
		super(...args, {
			aliases: ['dogs'],
			description: 'Get cute dogs pictures',
			category: 'Gif and Images',
			usage: ''
		});
	}


async run(message) {
  superagent.get("https://nekos.life/api/v2/img/woof", (err, res) => {
        if (err) { return console.log(`An error Occured while running dog command. Ran by ${message.author.tag}.\nError: ${err}`)}
    else{
        message.channel.send("", { embed: new MessageEmbed()
                                  .setTitle("Woof")
                                  .setColor(`${message.guild.me.displayHexColor!=='#FFFFFF' ? message.guild.me.displayHexColor : 0xffffff}`)
                                  .setImage(res.body.url)
                                  .setFooter(`Requested by ${message.author.tag}`)
                                 })
    }
    })
}

}
