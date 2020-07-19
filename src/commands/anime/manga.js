const { get } = require("request-promise-native");
const { MessageEmbed } = require("discord.js")

module.exports.run = async(client, message, args) => {
    
    
    
    if(!args.length) {
      return message.channel.send("Please Give Manga Name").then(msg => msg.delete({ timeout: 4500 }));
    }
    //DEFINE OPTIONS
    
    let option = {
      url: `https://kitsu.io/api/edge/manga?filter[text]=${args.join(" ")}`,
      method: `GET`,
      headers: {
        'Content-Type': "application/vnd.api+json",
        'Accept': "application/vnd.api+json"

      },
      json: true
    }
    
    
    message.channel.send("Fetching The Info").then(msg => {
      get(option).then(body => {
       try {
        let embed = new MessageEmbed()
        .setTitle(body.data[0].attributes.titles.en)
        .setColor("#4286f4")
        
        .setDescription(body.data[0].attributes.synopsis)
        .setThumbnail(body.data[0].attributes.posterImage.original)
        .addField("♤ |INFO", [
        `\>\ Avarage Rating: ${body.data[0].attributes.averageRating}`,
        `\>\ Romanji Name: ${body.data[0].attributes.titles.en_jp}`,
        `\>\ Age Rating: ${body.data[0].attributes.ageRating}`,
        `\>\ Age guide: ${body.data[0].attributes.ageRatingGuide}`,
        ])
        .addField("♧ |STATS", [
        `\>\ Popularity Rank: #${body.data[0].attributes.popularityRank}`,
        `\>\ Rating Rank: #${body.data[0].attributes.ratingRank}`,
        `\>\ Status: ${body.data[0].attributes.status}`,
        	])
        .addField("♡ |CHAPTER", [
        `\>\ Chapter: ${body.data[0].attributes.chapterCount}`,
        `\>\ Valume: ${body.data[0].attributes.volumeCount}`,
        `\>\ Started on ${body.data[0].attributes.startDate}`,
        `\>\ Ended on ${body.data[0].attributes.endDate}`,
        	])
        .setImage(body.data[0].attributes.coverImage.large)
        //try it
        
        
        message.channel.send(embed)
        msg.delete();
        
       } catch (err) {
        msg.delete();
         return message.channel.send("Unable to find this Manga").then(msg => msg.delete({ timeout: 4500 }));
       }
        
        
        
      }                 
                       
    )})
    
  }

module.exports.help = {
  name: "manga",
  category: "info",
  aliases: ["mg"],
  description: "Get manga information",
  usage: "manga <manga_name>",
}