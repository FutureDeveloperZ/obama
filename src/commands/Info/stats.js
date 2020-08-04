const Discord = require("discord.js");
const { version } = require('../../../package.json');
const Command = require('../../Structure/Command');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			aliases: [],
			description: 'Check the Stats of bot',
			category: 'Utilities',
			usage: ''
		});
	}

	async run(message, args) {
	let discordjsverison = require("discord.js").version
    let botembed = new Discord.MessageEmbed()
    .setColor("#002CFF")
    .setThumbnail(this.client.user.displayAvatarURL({ size: 2048 }))
    .addField(":pager: - Stats","Here are my Statistics below")
    .addField('⚒️ System', `
**DiscordJs Version:** ${discordjsverison}
**Guilds:** ${this.client.guilds.cache.size}
**Users:** ${this.client.users.cache.size}
**Version:** ${version}
**Memory:** \`${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}/${(require('os').totalmem() / 1024 / 1024).toFixed(2)} MB\`
**Uptime:** ${require('ms')(this.client.uptime)}
`, true)
.addField('📃 - About me', 'Im Obama Bot im written in Node-Js witht the assistance  with **Discord.JS**!. Im Developed by Wolfkid#4125. I have alot of features with category and separated.\n———\nIf ur looking for all my commands, u can try ``f;help`` to view all of my commands.')
.addField('📱 - Links', `
[Invite Bot](https://discordapp.com/oauth2/authorize?client_id=${this.client.user.id}&scope=bot&permissions=2146958591)
[Support Server](https://discord.gg/ZU8zFx8)
[UpDoot](https://discordbotlist.com/bots/obama/upvote) the bot!
`, true)
    message.channel.send(botembed);
}


}
