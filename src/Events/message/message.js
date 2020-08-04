const Event = require('../../Structure/Event');

module.exports = class extends Event {
  
  
  async run(message) {
			
    if (message.content.includes(message.mentions.users.first())) {
    let mentioned = this.client.afk.get(message.mentions.users.first().id);
    if (mentioned) message.channel.send(`${mentioned.usertag} is currently afk. Reason: ${mentioned.reason}`);
  }
  let afkcheck = this.client.afk.get(message.author.id);
  if (afkcheck) return [this.client.afk.delete(message.author.id), message.reply(`you have been removed from the afk list!`).then(msg => msg.delete({ timeout: 5000 }))];
    
    
			const mentionRegex = RegExp(`^<@!${this.client.user.id}>$`);
			const mentionRegexPrefix = RegExp(`^<@!${this.client.user.id}> `);

			if (!message.guild || message.author.bot) return;

			if (message.content.match(mentionRegex)) message.channel.send(`My prefix for ${message.guild.name} is \`${this.prefix}\`.`);

			const prefix = message.content.match(mentionRegexPrefix) ?
				message.content.match(mentionRegexPrefix)[0] : this.client.prefix;
			
			if(!message.content.startsWith(prefix)) return;

			// eslint-disable-next-line no-unused-vars
			const [cmd, ...args] = message.content.slice(prefix.length).trim().split(/ +/g);


  	const command = this.client.commands.get(cmd.toLowerCase()) || this.client.commands.get(this.client.aliases.get(cmd.toLowerCase()));
			if (command) {
				command.run(message, args);
			}
			
  }
};