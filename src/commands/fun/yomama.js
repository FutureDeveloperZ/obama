const { MessageEmbed } = require('discord.js');
const fetch = require('superagent');

const emoji = ['🤣', '👅', '😱', '😆', '😂'];
const Command = require('../../Structure/Command');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			aliases: ['ym'],
			description: 'get a yomama joke',
			category: 'Fun',
			usage: ''
		});
	}
	
async run(message) {
    fetch('https://api.apithis.net/yomama.php').then(res => {
        const joke = new MessageEmbed()
        .addField(`${emoji[~~(Math.random() * emoji.length)]}`, res.text)
        .setColor('#6C00FF')
        .setTimestamp()
        .setFooter(`Requested by ${message.author.tag}`)
        message.channel.send({embed:joke});
        });
};
}