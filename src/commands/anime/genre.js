const Discord = require("discord.js");
require('./data-retrieving')();

module.exports.run = async(bot, message, args) => {
/*
	var animeGenres = new Map([["action",1], ["adventure",2], ["cars",3], ["comedy",4], ["dementia",5], 
		["demons",6], ["mystery",7], ["drama",8], ["ecchi",9], ["fantasy",10], ["game",11], ["hentai",12],
		["historical",13], ["horror",14], ["kids",15], ["magic",16], ["martialarts", 17], ["mecha",18],
		["music", 19], ["parody",20], ["samurai",21], ["romance",22], ["school",23], ["sci-fi",24], ["shoujo",25], 
		["shoujoai",26], ["shounen",27], ["shounenai",28], ["space",29], ["sports",30], ["superpower",31], 
		["vampre",32], ["yaoi",33], ["yuri",34], ["harem",35], ["sliceoflife",36], ["supernaturl",37], 
		["military",38 ], ["police",39], ["psychological",40], ["thriller",41], ["seinen",42], ["josei",43]]);
*/
	var animeGenres = {"action":1, "adventure":2, "cars":3, "comedy":4, "dementia":5, 
		"demons":6, "mystery":7, "drama":8, "ecchi":9, "fantasy":10, "game":11, "hentai":12,
		"historical":13, "horror":14, "kids":15, "magic":16, "martialarts": 17, "mecha":18,
		"music": 19, "parody":20, "samurai":21, "romance":22, "school":23, "sci-fi":24, "shoujo":25, 
		"shoujoai":26, "shounen":27, "shounenai":28, "space":29, "sports":30, "superpower":31, 
		"vampire":32, "yaoi":33, "yuri":34, "harem":35, "sliceoflife":36, "supernatural":37, 
		"military":38, "police":39, "psychological":40, "thriller":41, "seinen":42, "josei":43 };

	var mangaGenres = {"action":1, "adventure":2, "cars":3, "comedy":4, "dementia":5, 
		"demons":6, "mystery":7, "drama":8, "ecchi":9, "fantasy":10, "game":11, "hentai":12,
		"historical":13, "horror":14, "kids":15, "magic":16, "martialarts": 17, "mecha":18,
		"music": 19, "parody":20, "samurai":21, "romance":22, "school":23, "sci-fi":24, "shoujo":25, 
		"shoujoai":26, "shounen":27, "shounenai":28, "space":29, "sports":30, "superpower":31, 
		"vampire":32, "yaoi":33, "yuri":34, "harem":35, "sliceoflife":36, "supernatural":37, 
		"military":38, "police":39, "psychological":40, "seinen":41, "josei":42, "doujinshi":43, "genderbender":44, "thriller": 45};

	//{anime: manga} {genre} {pageNum}

	var regex = /(anime|manga)/;
	console.log(args.length);
	if(args.length == 1) {
		console.log(regex.test(args[0]));
		if (regex.test(args[0])) {
			if(args[0] == "manga") {
				var mangaEmbed = new Discord.MessageEmbed()
				.setTitle("Manga Genres")
				.setAuthor("MyAnimeList", "https://myanimelist.cdn-dena.com/img/sp/icon/apple-touch-icon-256.png")
				.setColor("#4286f4")
				.addField("\u200b", "Action \n Adventure \n Cars \n Comedy \n Dementia \n Demons \n Mystery \n Drama \n Ecchi", true)
				.addField("\u200b", "Fantasy \n Game \n Hentai \n Historical \n Horror \n Kids \n Magic \n Martial Arts \n Mecha", true)
				.addField("\u200b", "Music \n Parody \n Samurai \n Romance \n School \n Sci-fi \n Shoujo \n Shoujo Ai \n Shounen", true)
				.addField("\u200b", "Shouen Ai \n Space \n Sports \n Superpower \n Vampire \n Yaoi \n Yuri \n Harem \n Slice of Life", true)
				.addField("\u200b", "Supernaturl \n Military \n Police \n Psychological \n Seinen \n Josei \n Doujinshi \n Gender Bender \n Thriller", true);

				message.channel.send(mangaEmbed);
			}
			if(args[0] == "anime") {
				var animeEmbed = new Discord.MessageEmbed()
				.setTitle("Anime Genres")
				.setAuthor("MyAnimeList", "https://myanimelist.cdn-dena.com/img/sp/icon/apple-touch-icon-256.png")
				.setColor("#4286f4")
				.addField("\u200b", "Action \n Adventure \n Cars \n Comedy \n Dementia \n Demons \n Mystery \n Drama \n Ecchi", true)
				.addField("\u200b", "Fantasy \n Game \n Hentai \n Historical \n Horror \n Kids \n Magic \n Martial Arts \n Mecha", true)
				.addField("\u200b", "Music \n Parody \n Samurai \n Romance \n School \n Sci-fi \n Shoujo \n Shoujo Ai \n Shounen", true)
				.addField("\u200b", "Shouen Ai \n Space \n Sports \n Superpower \n Vampire \n Yaoi \n Yuri \n Harem \n Slice of Life", true)
				.addField("\u200b", "Supernaturl \n Military \n Police \n Psychological \n Seinen \n Josei \n Thriller", true);

				message.channel.send(animeEmbed);
			}
		}
		else {
			message.channel.send("Invalid command usage. \n $genre {anime/manga} for list of anime/manga genres \n $genre {anime/manga} {genre} {page number} leave page number blank for first page of results.");
		} 
	}
	else if (args.length > 1) {
		if (regex.test(args[0])) {
			var lastArg = parseInt(args[args.length - 1]);
			var userPageNum = 1;
			var genreSlice;

			//console.log(isNaN(lastArg));
			if(isNaN(lastArg)) {
				genreSlice = args.slice(1);
			} else {
				genreSlice = args.slice(1, args.length-1);
				userPageNum = args[args.length-1];
				//console.log(genreSlice);
			}

			var genre = genreSlice.join("").toLowerCase();
			var startIndex = ((userPageNum - 1)*10) % 100;
			var pageRequest = Math.floor(((userPageNum - 1)*10)/100) +1;
			//console.log(genre);

			switch(args[0]) {
				case "anime":
					if(genre in animeGenres) {
						var genreAnimeData = await getGenreData("anime", animeGenres[genre], pageRequest);
						//console.log(genreAnimeData);
						//page 10 should be the second page link


						if(genreAnimeData.error == null){
							var animeEmbed = new Discord.MessageEmbed()
							.setTitle(genre.charAt(0).toUpperCase() + genre.slice(1) + " Anime ")
							.setAuthor("MyAnimeList", "https://myanimelist.cdn-dena.com/img/sp/icon/apple-touch-icon-256.png")
							.setColor("#4286f4");

							var anime = "";

							for(var i = startIndex; i < (startIndex + 10); i++) {
								if(genreAnimeData.anime[i] != null)
									anime += "**"+ (i+1) +".** " + genreAnimeData.anime[i].title + "\n\n"; 
							}
							animeEmbed.setDescription(anime);
							message.channel.send(animeEmbed);


						}
						else {
							message.channel.send("Invalid page number. \n f;genre {anime/manga} for list of anime/manga genres \n f;genre {anime/manga} {genre} {page number} leave page number blank for first page of results.");
						}
					} 
					else {
						message.channel.send("Genre not in the database");
					}
					break;

				case "manga":
					if(genre in mangaGenres) {
						var genreMangaData = await getGenreData("manga", mangaGenres[genre], pageRequest);
					
						if(genreMangaData.error == null){
							var mangaEmbed = new Discord.MessageEmbed()
							.setTitle(genre.charAt(0).toUpperCase() + genre.slice(1) + " Manga ")
							.setAuthor("MyAnimeList", "https://myanimelist.cdn-dena.com/img/sp/icon/apple-touch-icon-256.png")
							.setColor("#4286f4");

							var manga = "";

							for(var i = startIndex; i < (startIndex + 10); i++) {
								if(genreMangaData.manga[i] != null)
									manga += "**"+ (i+1) +".** " + genreMangaData.manga[i].title + "\n\n"; 
							}
							mangaEmbed.setDescription(manga);
							message.channel.send(mangaEmbed);


						}
						else {
							message.channel.send("Invalid page number. \n f;genre {anime/manga} for list of anime/manga genres \n f;genre {anime/manga} {genre} {page number} leave page number blank for first page of results.");
						}
					}
					else {
						message.channel.send("Genre not in the database");
					}
					break;
			}
		}
		else {
			message.channel.send("Invalid command usage. \n f;genre {anime/manga} for list of anime/manga genres \n f;genre {anime/manga} {genre} {page number} leave page number blank for first page of results.");

		}
	}
	else {
		message.channel.send("Invalid command usage. \n f;genre {anime/manga} for list of anime/manga genres \n f;genre {anime/manga} {genre} {page number} leave page number blank for first page of results.");
	}

/*
	if(args[0] in animeGenres) {
		console.log("yes");
	}
	else
		console.log("no");
*/
/*
	//Loops through and gets list of genres
	for(var i = 1; i < 70; i++) {
		var genreData = await getGenreData("manga", i);

		if(genreData.mal_url != null)
			console.log(genreData.mal_url.name);
	}

	*/
}


module.exports.help = {
	name: "genre"
}