const { MessageEmbed} = require('discord.js');
const request = require('node-superfetch');
const Command = require('../../Structure/Command');


module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			aliases: [],
			description: 'Gets nsfw images of bikinis',
			category: 'nsfw',
			usage: ''
		});
	}

	async run(message) {
  
  if (!message.channel.nsfw) return message.reply(`Cannot send NSFW content in a SFW channel.`);
  try {
    const {
      body
    } = await request
      .get("https://www.reddit.com/r/bikinis.json?sort=top&t=week")
      .query({
        limit: 800
      });
    const allowed = body.data.children;
    const randomnumber = Math.floor(Math.random() * allowed.length);
    const embed = new MessageEmbed()
      .setColor("#FF0500")
      .setTitle(allowed[randomnumber].data.title)
      .setDescription("Posted by: " + allowed[randomnumber].data.author)
      .setImage(allowed[randomnumber].data.url)
    message.channel.send(embed);
  } catch (err) {
    console.log(err);
    return message.reply(`Oh no, an error occurred: \`${err.message}\`. Try again later!`);
  }
};
}