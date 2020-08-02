const { MesaageEmbed } = require('discord.js');
const Command = require('../../Structure/Command');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			aliases: [],
			description: 'Play Rock Paper and Scissors with the bot',
			category: 'Memes',
			usage: ''
		});
	}
	
async run(message, args) {
    const validPicks = ["rock", "paper", "scrissors"];
    const userPick = args.join(` `).toLowerCase();
    if (!validPicks.includes(userPick) || !userPick) return message.channel.send(`Your pick wasn't rock, paper, nor scrissors (not a valid pick)!`, true);
    const botPicked = validPicks[Math.floor(Math.random() * validPicks.length)];
    //Rock
    if (userPick == "rock" && botPicked == "rock") return messagee.channel.send(`You picked rock and I also picked rock. It's a tie!`);
    if (userPick == "rock" && botPicked == "paper") return message.channel.send(`You picked rock and I also picked rock. You beat me! :rage:`);
    if (userPick == "rock" && botPicked == "scrissors") return message.channel.send(`You picked rock and I also picked rock. I beat you! :sweat_smile:`);
    //Paper
    if (userPick == "paper" && botPicked == "paper") return message.channel.send(`You picked ${userPick} and I picked ${botPicked}. It's a tie!`);
    if (userPick == "paper" && botPicked == "rock") return message.channel.send(`You picked ${userPick} and I picked ${botPicked}. You beat me! :rage:`);
    if (userPick == "paper" && botPicked == "scrissors") return message.channel.send(`You picked ${userPick} and I picked ${botPicked}. I beat you! :sweat_smile:`);
    //Scrissors
    if (userPick == "scrissors" && botPicked == "scrissors") return message.channel.send(`You picked ${userPick} and I picked ${botPicked}. It's a tie!`);
    if (userPick == "scrissors" && botPicked == "rock") return message.channel.send(`You picked ${userPick} and I picked ${botPicked}. I beat you! :sweat_smile:`);
    if (userPick == "scrissors" && botPicked == "paper") return message.channel.send(`You picked ${userPick} and I picked ${botPicked}. You beat me! :rage:`);
};

};