const { get } = require("request-promise-native");
const { MessageEmbed } = require("discord.js")

const Command = require('../../Structure/Command');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			aliases: ['kitsu'],
			description: 'Shows Anime Info',
			category: 'Anime',
			usage: 'anime <anime name>'
		});
	}

	async run(message, [command]) {
    
    if(!args.length) {
      return message.channel.send("Please Give Anime Name").then(msg => msg.delete({ timeout: 4500 }));
    }
    //DEFINE OPTIONS
    
    let option = {
      url: `https://kitsu.io/api/edge/anime?filter[text]=${args.join(" ")}`,
      method: `GET`,
      headers: {
        'Content-Type': "application/vnd.api+json",
        'Accept': "application/vnd.api+json"

      },
      json: true
    }
    
    
    message.channel.send("Searching Anime").then(msg => {
      get(option).then(body => {
       try {
        let embed = new MessageEmbed()
        .setTitle(body.data[0].attributes.titles.en)
        .setColor("#4286f4")
        
        .setDescription(body.data[0].attributes.synopsis)
        .setThumbnail(body.data[0].attributes.posterImage.original)
        .addField("♤ | INFO", [
        `\>\ Avarage Rating: ${body.data[0].attributes.averageRating}`,
        `\>\ Romanji Name: ${body.data[0].attributes.titles.en_jp}`,
        `\>\ Age Rating: ${body.data[0].attributes.ageRating}`,
        `\>\ Age guide: ${body.data[0].attributes.ageRatingGuide}`,
        ])
        .addField("♧ | STATS", [
        `\>\ Popularity Rank: #${body.data[0].attributes.popularityRank}`,
        `\>\ Rating Rank: #${body.data[0].attributes.ratingRank}`,
        `\>\ Status: ${body.data[0].attributes.status}`,
        	])
        .addField("♡ | EPISODES", [
        `\>\ Episodes length: ${body.data[0].attributes.episodeLength}mins`,
        `\>\ Episodes: ${body.data[0].attributes.episodeCount}`,
        `\>\ Started on ${body.data[0].attributes.startDate}`,
        `\>\ Ended on ${body.data[0].attributes.endDate}`,
        	])
        .setImage(body.data[0].attributes.coverImage.large)
        //try it
        
        
        message.channel.send(embed)
        msg.delete();
        
       } catch (err) {
        msg.delete();
         return message.channel.send("Unable to find this anime").then(msg => msg.delete({ timeout: 4500 }));
       }
        
        
        
      }                 
                       
    )})
    
  }

}