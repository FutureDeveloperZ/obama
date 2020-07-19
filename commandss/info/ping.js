const Discord = require("discord.js");

exports.run = (client, message) => {
	let author = message.author;

	const embed = new Discord.MessageEmbed()
		.setAuthor(author.username)
		.addField("📊 API Latency:","`" + `${Math.round(client.ws.ping)}` + "`ms")
        .setColor('#0017FF');
        
	message.channel.send({ embed });
};


exports.help = {
	name: "ping"
};