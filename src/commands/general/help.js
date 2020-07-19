const { MessageEmbed } = require("discord.js");

module.exports.run = async (bot, message, args) => {      
      const helpembed = new MessageEmbed()
      .setTitle('<a:obamathisthing:718798955193827368>  Help List ')
      .setDescription('View My commands here and remember to always put `f;` before a command')
      .addField('💼 》 Utility','\n``changelog``, ``serverinfo``, ``userinfo``, ``invite``, ``afk``, ``stats``, ``ping``, ``upvote``, ``query``, ``embed``, ``say``')
      .addField('🔐 》 Administrator','\n``ban``, ``kick``, ``poll``, ``purge``, ``mute``')
      .addField('🖼 》 Images', '\n ``cat``, ``kiss``, ``pat``, ``dog``')
      .addField('🎎 》 Anime', '\n ``manga``, ``anime``, ``ranime``, ``rmanga``, ``schedule``, ``genre``, ``scrap``')
      .addField('🧮 》 Fun','\n``8ball``, ``ascii``, ``roblox``, ``avatar``, ``bond``, ``coinflip``, ``gayrate``, ``joke``, ``meme``, ``quiz``, ``rate``, ``yomama``, ``advice``, ``age``, ``roast``, ``hypixel``')
      .setColor('RANDOM')
      .setTimestamp()
      .setFooter(`Requested by ${message.author.tag} | 🔞 f;helpnsfw at a nsfw channel  `, `${message.author.avatarURL({ dynamic: true })}`)
      return message.channel.send(helpembed);

}
 
module.exports.help = {
  name: "help"
}
