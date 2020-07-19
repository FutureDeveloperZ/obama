const Discord = require("discord.js");
require('./data-retrieving')();

module.exports.run = async(bot, message, args) => {
	var weekDays = ["sunday", "monday", "tuesday", "wednesday", 
		"thursday", "friday", "saturday"];

	var days = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday", "today"];

	if(args.length == 1)
		var dayRequested = args[0].toLowerCase();
	else {
		message.channel.send("Invalid Command. f;schedule <Any day of the week/today>")
		return;
	}
	//console.log(dayRequested);

	if(days.indexOf(dayRequested) != -1) {
		var day = dayRequested;
		if(dayRequested == "today") {
			day = weekDays[new Date().getDay()];
			console.log(day);
			
		}

		var scheduleData = await getScheduleData(day);
		
		/*  -----  Singular Embed Message With List Of Anime  ----- */
		var scheduleEmbed = new Discord.MessageEmbed()
		.setTitle(day.charAt(0).toUpperCase() + day.slice(1) + " Anime Schedule")
		.setAuthor("MyAnimeList", "https://myanimelist.cdn-dena.com/img/sp/icon/apple-touch-icon-256.png")
		.setColor("#4286f4");

		var airing = "";

		for(var i = 0; i < scheduleData[day].length; i++) {
			airing += "**"+ (i+1) +".** " + scheduleData[day][i].title + "\n\n"; 
		}
		scheduleEmbed.setDescription(airing);

		console.log(scheduleData);
		//console.log(scheduleData[day].length);

		message.channel.send(scheduleEmbed);
		

		/*  -----  Multiple Messages With Thumbnail Of Each Anime

		for(var i = 0; i < scheduleData[day].length; i++) {
			var newEmbed = new Discord.RichEmbed()
			.setTitle("**"+ (i+1) +".** " + scheduleData[day][i].title + "\n");

			if(scheduleData[day][i].image_url != null)
				newEmbed.setThumbnail(scheduleData[day][i].image_url);

			message.channel.send(newEmbed);

		}

	
		
		*/

	} else {
		//send error message
		message.channel.send("Wrong Arguments. f;schedule <Any day of the week/today>");
	}
	
}



module.exports.help = {
	name: "schedule"
}