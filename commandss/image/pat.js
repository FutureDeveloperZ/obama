const { MessageEmbed } = require("discord.js");
const superagent = require('superagent');


module.exports.run = async (bot, message, args) => {
    let user = message.mentions.users.first() || message.author;
   superagent.get("https://nekos.life/api/pat", (err, res) => {
        if (err) { return console.log(`An error Occured while running pat command. Ran by ${message.author.tag}.\nError: ${err}`)}
    else{
        message.channel.send("", { embed: new MessageEmbed()
                                  .setTitle(`${message.author.username} pat ${user.username}`)
                                  .setColor(`${message.guild.me.displayHexColor!=='#FFFFFF' ? message.guild.me.displayHexColor : 0xffffff}`)
                                  .setImage(res.body.url)
                                  //.setFooter(`Requested by ${message.author.tag}`)
                                 })
    }
    })
}

module.exports.help = {
  name:"pat"
}