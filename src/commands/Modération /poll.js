const { MessageEmbed } = require("discord.js");
const Command = require('../../Structure/Command');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			aliases: [],
			description: 'Make a poll',
			category: 'Moderation',
			usage: 'poll <question>'
		});
	}

	async run(message, args) {

let arg = args.join(" ")

let noarg = new MessageEmbed()
.setColor("RED")
.setTitle("Usage: poll <question>")

if(!arg) return message.channel.send(noarg)


let poll = new MessageEmbed()
.setColor("RANDOM")
.setTitle("Poll Command")
.addField("React Below To Vote", `${arg}`, true)
.setTimestamp()

let msg = await message.channel.send(poll)
await msg.react("👍")
await msg.react("🤷")
await msg.react("👎")


message.delete();

}


}
