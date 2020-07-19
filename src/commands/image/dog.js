const { MessageEmbed } = require('discord.js');
const superagent = require('superagent');

module.exports.run = async(bot, message, args) => {
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
module.exports.help = {
	name: "dog"
}
