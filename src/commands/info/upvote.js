const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

const embed = new Discord.MessageEmbed()
.setTitle('UPVOTE')
.setThumbnail(bot.user.displayAvatarURL({ size: 2048 }))
.setDescription("Upvote Obama in any of these Sites below")
.addField(`Discord Bot List`, `[Upvote Here](https://discordbotlist.com/bots/obama/upvote)`)
.addField(`Bots for Discord `, `[Upvote Here](https://botsfordiscord.com/bot/444463875908304901/vote)`)
.addField(`Top.gg`, `[Upvote Here](https://top.gg/bot/444463875908304901/vote)`)
.setColor('#0011ff')
return message.channel.send(embed);


}


module.exports.help = {
   name: "upvote"
   
}