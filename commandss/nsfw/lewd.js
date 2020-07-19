const { MessageEmbed } = require("discord.js");
const superagent = require("superagent");
const send = require("quick.hook");

module.exports.run = async (bot, message, args) => {

    let {body} = await superagent
    .get(`https://nekos.life/api/lewd/neko`);
    if (!message.channel.nsfw) return message.reply("You can use this command only on **nsfw** channels!");
  
    let embed = new MessageEmbed()
    .setColor("#ff9900")
    .setTitle("Why does someone put a command like this?")
    .setImage(body.neko)
    .setTimestamp()
    .setFooter(`Requested by ${message.author.tag}`);
    message.channel.send(embed);
  
}

module.exports.help = {
	name: "lewd"
}
