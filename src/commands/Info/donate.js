const Command = require('../../Structure/Command');
const Discord = require('discord.js');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			aliases: [],
			description: 'Donate for the bot',
			category: 'Utilities',
			usage: ''
		});
	}

	async run(message, args) {
	  
	  var embed = new Discord.MessageEmbed()
	  .setTitle('Donations')
	  .setDescription(`We created a pool for obama the bot of course this pool would let u guys donate maybe in the future we will make a patron for this
	  for the time being this is the only thing available for us the reason for this pool is to improve the bot development and hopefully move the bot a suitable 
	  place were he will be able use more extra features, like ranks, custom prefix the options are infinite but in our current state we cannot afford the hosting 
	  expensives or even a database.`)
	  .addBlankField()
	  .addField(`\u200b`, `[DONATE HERE](https://paypal.me/pools/c/8rhYAdLdZP) Remember must have a paypal this will change in the future`)
	  messge.channel.send(embed);
    }
}