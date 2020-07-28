const { MessageEmbed } = require("discord.js");
const Command = require('../../Structure/Command');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			aliases: [],
			description: 'Make and embed customizable',
			category: 'Utilities',
			usage: 'embed [text]'
		});
	}

	async run(message, args) {
	  
 if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(`U can't use this command u need \`\`MANAGE_MESSAGES\`\` Permissions`);
  const text = args.join(` `).substr(0, 1000) || "No text provided.";
  const embed = new MessageEmbed().setDescription(text).setColor("#FFFFFF");
  message.delete().catch();
  message.channel.send(embed);
};
}
