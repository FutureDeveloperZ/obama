const request = require('superagent');
const { MessageEmbed } = require('discord.js');
const Command = require('../../Structure/Command');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			aliases: [],
			description: 'Tells u a dad joke',
			category: 'Fun',
			usage: ''
		});
	}

	async run(message) {
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
}
