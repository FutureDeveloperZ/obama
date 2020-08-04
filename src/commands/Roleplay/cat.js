const { MessageEmbed } = require('discord.js');
const superagent = require('superagent');
const Command = require('../../Structure/Command');


module.exports = class extends Command {
  
  
constructor(...args) {
		super(...args, {
			aliases: ['cats'],
			description: 'Get cute cat pictures!',
			category: 'Gif and Images',
			usage: ''
		});
	}


async run(message) {
  superagent.get("https://nekos.life/api/v2/img/meow", (err, res) => {
        if (err) { return console.log(`An error Occured while running cat command. Ran by ${message.author.tag}.\nError: ${err}`)}
    else{
        message.channel.send("", { embed: new MessageEmbed()
                                  .setTitle("Cats")
                                  .setColor(`${message.guild.me.displayHexColor!=='#FFFFFF' ? message.guild.me.displayHexColor : 0xffffff}`)
                                  .setImage(res.body.url)
                                  .setFooter(`Requested by ${message.author.tag}`)
                                 })
    }
    })
}

}
