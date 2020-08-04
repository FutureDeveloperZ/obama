const Discord = require("discord.js");
const Command = require('../../Structure/Command');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			aliases: [],
			description: 'Invite the Bot to your server',
			category: 'Utilities',
			usage: ''
		});
	}

	async run(message, args) {
    let bicon = this.client.user.displayAvatarURL();
    let botembed = new Discord.MessageEmbed()
    .setTitle('Bot invite')
    .setImage(bicon)
    .setDescription("Join our Support Discord Server for any bugs or questions regarding the bot or simply invite the bot to your server.")
    .addField("Join our server", "[SERVER INVITE](https://discord.gg/Z42u23M)")
    .addField("Invite The Bot", "[BOT INVITE](https://discordapp.com/oauth2/authorize?client_id=444463875908304901&scope=bot&permissions=2146958591)")
    .setColor("RANDOM")
    message.channel.send(botembed);
}

}