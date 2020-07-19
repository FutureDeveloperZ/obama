const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let changelogembed = new Discord.MessageEmbed()
    .setTitle('<a:obamacircle:718653309023682700> Changelog')
    .setDescription('Check out Whats New :white_check_mark:')
    .addField('New On 0.2.3')
    .addField('New Stuff:', `
      Added manga command 
    `)
    .addField('Changes: ',`
      Change layout of Anime command
    `)
    .addField('Fixes: ', `
      Fix purge 
    `)
    .setColor('RANDOM')
    .setFooter(`Requested by ${message.author.tag} `)
    return message.channel.send(changelogembed);
    
}

module.exports.help = {
  name:"changelog"
}
