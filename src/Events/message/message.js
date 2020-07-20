const Event = require('../../Structure/Event');

module.exports = class extends Event {
  
  
  async run(message) {
			const mentionRegex = RegExp(`^<@!${this.client.user.id}>$`);
			const mentionRegexPrefix = RegExp(`^<@!${this.client.user.id}> `);

			if (!message.guild || message.author.bot) return;

			if (message.content.match(mentionRegex)) message.channel.send(`My prefix for ${message.guild.name} is \`${this.prefix}\`.`);

			const prefix = message.content.match(mentionRegexPrefix) ?
				message.content.match(mentionRegexPrefix)[0] : this.client.prefix;
			
			if(!message.content.startsWith(prefix)) return;

			// eslint-disable-next-line no-unused-vars
			const [cmd, ...args] = message.content.slice(prefix.length).trim().split(/ +/g);


console.log(this.client.aliases);
console.log(this.client.aliases.get(cmd.toLowerCase()));
			const command = this.client.commands.get(cmd.toLowerCase()) || this.client.commands.get(this.client.aliases.get(cmd.toLowerCase()));
			if (command) {
				command.run(message, args);
			}
  }
};