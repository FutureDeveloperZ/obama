const Discord = require("discord.js");
require('../../Structure/data-retrieving')();
const Command = require('../../Structure/Command');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			aliases: ['rm'],
			description: 'Get a random Manga',
			category: 'Anime',
			usage: ''
		});
	}

	async run(message) {
	do {
		var rand = Math.floor(Math.random()*40000);
		console.log(rand); 

		mangaData = await getMangaData(rand);
		//console.log(mangaData.error == null);
	}
	while(mangaData.error != null);

	if(mangaData.error == null) {
		console.log("mangaData = " + mangaData);

		let mangaEmbed = new Discord.MessageEmbed()
		.setTitle("Random Manga: " + mangaData.title)
		.setAuthor("MyAnimeList", "https://myanimelist.cdn-dena.com/img/sp/icon/apple-touch-icon-256.png")
		.setColor("#4286f4");

		//Image URL
		if(mangaData.image_url != null) 
			mangaEmbed.setImage(mangaData.image_url);

		//Synopsis
		if(mangaData.synopsis != null) 
			mangaEmbed.setDescription(mangaData.synopsis);

		//MAL URL
		mangaEmbed.addField("MyAnimeList Url", mangaData.url);

		//Volumes
		if(mangaData.volumes != null)
			mangaEmbed.addField("Volumes", mangaData.volumes, true);

		//Episodes
		if(mangaData.chapters != null) 
			mangaEmbed.addField("Chapters", mangaData.chapters, true);

		//Rating
		if(mangaData.rating != null) 
			mangaEmbed.addField("Rating", mangaData.rating, true);

		//Score
		if(mangaData.score != null) 
			mangaEmbed.addField("Score", mangaData.score, true);

		//Genres
		if(mangaData.genres != null && mangaData.genres.length > 0) {
			var genres = "";
			for(var i = 0; i < mangaData.genres.length; i++) {
				genres += mangaData.genres[i].name
				if(i != mangaData.genres.length-1)
					genres += ", "
			}
			mangaEmbed.addField("Genres", genres, true);
		}

		return message.channel.send(mangaEmbed);
	}


}

}