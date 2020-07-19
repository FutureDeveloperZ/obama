const Discord = require("discord.js");
const fetch = require('node-fetch');

module.exports.run = async (bot, message, args) => {

    if (!args.slice(0).join(' ')) return message.channel.send('Please, provide the text! Usage: hastebin <text>').then(msg => msg.delete({ timeout: 10000 }));
	fetch('https://hastebin.com/documents').send(args.slice(0).join(' ')).then(body => {message.channel.send('Posted text to Hastebin\nURL: https://hastebin.com/' + body.body.key)});

}

module.exports.help = {
    name:"hastebin" 
 }
