const Discord = require("discord.js");
require('./data-retrieving')();

module.exports.run = async(bot, message, args) => {
	do {
		var rand = Math.floor(Math.random()*35000);
		//console.log(rand); 

		animeData = await getAnimeData(rand);
		//console.log(animeData.error == null);
	}
	while(animeData.error != null);

	if(animeData.error == null) {
		//console.log(animeData);
		//console.log(animeData.title); 
		//console.log(animeData.synopsis); 

		if(animeData.aired != null) {
			var date = new Date(animeData.aired.from);
			//console.log(date.getFullYear());
		}

		let animeEmbed = new Discord.MessageEmbed()
		.setTitle("Random Anime: **" + animeData.title+" ["+date.getFullYear()+"]**")
		.setAuthor("MyAnimeList", "https://myanimelist.cdn-dena.com/img/sp/icon/apple-touch-icon-256.png")
		.setColor("#4286f4");

		//Image URL
		if(animeData.image_url != null) 
			animeEmbed.setImage(animeData.image_url);

		//Synopsis
		if(animeData.synopsis != null) 
			animeEmbed.setDescription(animeData.synopsis);

		//MAL URL
		animeEmbed.addField("MyAnimeList Url", animeData.url);

		//Trailer URL
		if(animeData.trailer_url != null)
			animeEmbed.addField("Trailer Url", animeData.trailer_url);

		//Episodes
		if(animeData.episodes != null) 
			animeEmbed.addField("Episodes", animeData.episodes, true);

		//Rating
		if(animeData.rating != null) 
			animeEmbed.addField("Rating", animeData.rating, true);

		//Studios
		if(animeData.studios != null && animeData.studios.length > 0) {
			var studios = "";
			for(var i = 0; i < animeData.studios.length; i++) {
				studios += animeData.studios[i].name
				if(i != animeData.studios.length-1)
					studios += ", "
			}
			animeEmbed.addField("Studios", studios, true);
		}

		//Score
		if(animeData.score != null) 
			animeEmbed.addField("Score", animeData.score, true);

		//Genres
		if(animeData.genres != null && animeData.genres.length > 0) {
			var genres = "";
			for(var i = 0; i < animeData.genres.length; i++) {
				genres += animeData.genres[i].name
				if(i != animeData.genres.length-1)
					genres += ", "
			}
			animeEmbed.addField("Genres", genres, true);
		}

		//Music
		if(animeData.opening_themes != null && animeData.opening_themes.length > 0) {
			var openings = "";
			for(var i = 0; i < animeData.opening_themes.length; i++)
				openings += animeData.opening_themes[i] + "\n";

			animeEmbed.addField("Openings", openings);
		}

		if(animeData.ending_themes != null && animeData.ending_themes.length > 0) {
			var endings = "";
			for(var i = 0; i < animeData.ending_themes.length; i++)
				endings += animeData.ending_themes[i] + "\n";

			animeEmbed.addField("Endings", endings);
		}

		return message.channel.send(animeEmbed);
	}
}


module.exports.help = {
	name: "ranime"
}