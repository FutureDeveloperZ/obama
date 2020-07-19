const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.MessageEmbed()
    .setTitle('Bot invite')
    .setDescription("Join our Support Discord Server for any bugs or questions regarding the bot or simply invite the bot to your server.")
    .addField("Join our server", "[SERVER INVITE](https://discord.gg/Z42u23M)")
    .addField("Invite The Bot", "[BOT INVITE](https://discordapp.com/oauth2/authorize?client_id=444463875908304901&scope=bot&permissions=2146958591)")
    .setColor("RANDOM")
    message.channel.send(botembed);
}

module.exports.help = {
  name:"invite"
}