const request = require('superagent');
const { MessageEmbed } = require('discord.js');
module.exports.run = async (bot, message, args) => {
  const { body } = await request
        .get('http://icanhazdadjoke.com/')
        .set('Accept', 'application/json');
        let jEmbed = new MessageEmbed()
        .setTitle("Joke")
        .setDescription(body.joke)
        .setColor("RANDOM")
        .setTimestamp()
        .setFooter(`Requested by ${message.author.tag}`, `${message.author.avatarURL()}`)
        message.channel.send(jEmbed);
    }
module.exports.help = {
  name: "joke"
}
