const { MessageEmbed } = require("discord.js");
const request = require('node-superfetch');
module.exports.run = async (bot, message, args, funcs) => {
  if (!message.channel.nsfw) return message.reply(`Can't send NSFW content in a SFW channel.`);
  let thing = args.join(` `);
  if (!thing) return message.reply(`Please enter something to search on redtube!`);
  try {
    const {
      body
    } = await request
      .get(`https://api.redtube.com/?data=redtube.Videos.searchVideos&output=json&search=${thing}&thumbsize=medium`);
    if (body.count == 0) return message.reply(`No results found.`);
    let embed = new MessageEmbed()
      .setTitle(`Redtube`)
      .addField(`Searched for:`, thing)
      .addField(`Found:`, body.videos[0].video.title)
      .addField(`Duration:`, body.videos[0].video.duration)
      .addField(`Views:`, body.videos[0].video.views)
      .addField(`URL:`, body.videos[0].video.url)
      .setColor("#FF0800")
      .setThumbnail(body.videos[0].video.thumb);
    message.channel.send(embed);
  } catch (err) {
    console.log(err);
    return message.reply(`Oh no, an error occurred: \`${err.message}\`. Try again later!`);
  }
};

module.exports.config = {
  name: "redtube",
  aliases: [],
  usage: "Use this command to redtube something.",
  commandCategory: "nsfw",
  cooldownTime: '5'
};