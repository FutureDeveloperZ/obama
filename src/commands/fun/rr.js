const { MessageEmbed } = require('discord.js');
const Command = require('../../Structure/Command');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			aliases: [],
			description: 'play a game of Rousian Roullete',
			category: 'Fun',
			usage: 'rr <user>'
		});
	}
	
async run(message) {
  try {
    let stuff = [
      "Boom! :boom: You're dead! :skull:",
      "Wow you made it alive.. :upside_down:"
    ];
    const embed = new MessageEmbed()
      .setTitle("Rousian Roullete.")
      .setColor("#FF00BE")
      .setTimestamp()
      .setDescription(stuff[Math.floor(Math.random() * stuff.length)]);
    message.channel.send(embed);
  } catch (e) {
    console.error;
    message.reply(`Oh no, an error occurred!\n${e.message}`);
  }
};
}