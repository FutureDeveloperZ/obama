const Discord = require('discord.js');
const Command = require('../../Structure/Command');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			aliases: [],
			description: 'Makes the bot says stuff',
			category: 'Utilities',
			usage: 'say [text]'
		});
	}

	async run(message, args) {

 if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(`U can't use this command u need \`\`MANAGE_MESSAGES\`\` Permissions`);
      const sayMessage = args.join(" ") || "Text u dumy";
      message.delete().catch();
      message.channel.send(sayMessage);

};
}