const { MessageEmbed } = require("discord.js");

module.exports.run = async (bot, message, args) => {      
	if (!message.channel.nsfw) return message.reply(`Cannot send NSFW content in a SFW channel.`);
      const helpembed = new MessageEmbed()
      .setTitle('NSFW Help List')
      .addField('NSFW','```\nporn, ecchi, lewd, neko, 4k, amateur, anal, ass, asshole, bbw, bdsm, bikinis, blonde, bottomless, brunette, collage, cosplay, curvy, dick, echhi, furrynsfw, gonewild, lewd, nsfw, milf, moreporn, neko, nude, onoff, petite, porn, porngif, public, pussy, redhead, redtube, rule34, snapchat, tattos, tits, uniform```')
      .setColor('#FF00E8')
      .setTimestamp()
      .setFooter(`Requested by ${message.author.tag} | Help list`)
      return message.channel.send(helpembed);

}
 
module.exports.help = {
  name: "helpnsfw"
}
