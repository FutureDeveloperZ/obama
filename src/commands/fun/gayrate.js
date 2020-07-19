const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let user = message.mentions.users.first() || message.author;
    let gayembed = new Discord.MessageEmbed()
    .setAuthor(`${user.username}`)
    .addField(`Gay Rate`, `You Are **${Math.floor(Math.random() * 100)}% Gay**! :gay_pride_flag:`)
    .setColor('RANDOM')
    .setFooter(`😂😂 | Requested by ${message.author.tag} | Dope`)
    return message.channel.send(gayembed);
}

module.exports.help = {
  name:"gayrate"
}
