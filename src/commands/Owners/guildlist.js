const { MessageEmbed } = require('discord.js');
const Command = require('../../Structure/Command');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			aliases: ['gl'],
			description: 'Displays The Guild List ',
			category: 'Owner',
			usage: '[command]'
		});
	}

	async run(message) {
	  
  if (!this.client.owners.includes(message.author.id)) return message.channel.send("Only bot owner can use this command.");
  try {
    let guilds = this.client.guilds.cache.map(g => `Name: ${g.name}, Membercount: ${g.members.size}, ID: ${g.id}`).join('\n');
    if (this.client.guilds.size >= 1) {
      message.channel.send("```" + guilds + "```", {
        split: {
          prepend: "```",
          append: "```"
        }
      });
      return;
    }
    let embed = new MessageEmbed()
      .setTimestamp()
      .setThumbnail(this.client.user.avatarURL)
      .setFooter(`Total guilds: ${this.client.guilds.cache.size}`)
      // .setColor(funcs.rc())
    this.client.guilds.cache.forEach(guild => {
      embed.addField(`__**${guild.name}**__`, `Owner: ${guild.owner.user.tag}\nMembercount: ${guild.members.memberCount}\nID: ${guild.id}`)
    });
    message.channel.send(embed);
  } catch (e) {
    console.log(e);
    message.channel.send(`Oh no, an error occurred!\n${e.message}`);
  }
};
}