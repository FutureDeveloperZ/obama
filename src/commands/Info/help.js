const Command = require('../../Structure/Command');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			aliases: ['halp'],
			description: 'Displays all the commands in the bot',
			category: 'Utilities',
			usage: 'command [command]'
		});
	}

	async run(message) {

message.channel.send('__Command List__\nhttps://obamabot.ml/commands\n\n__Support Server__\nhttps://discord.gg/ZU8zFx8\n\n__Help Command Usage__\n\`f;command [command name]\`- provides the commands or command usage');
	  
  }
}  