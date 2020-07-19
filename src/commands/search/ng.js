const axios = require("axios")
const Discord = require("discord.js")
const { shorten } = require("../../utils/util");


var parsedIGN = ""
var ign = ""
var parsedRank = ""
var parsedUUID = ""
var parsedKarma = 0
var parsedLevel = 0
var parsedOnline = true
var parsedVersion = ""
var parsedGuild = ""


module.exports.run = async(client, message, args) => {
const nether = "https://apiv2.nethergames.org/players/" + args[0] + "/stats"

async function getIGN() {
	try {
		var response = await axios.get(args[0])
		parsedIGN = response.data.name;
	} catch (error) {
		console.log(error);
		
	}
}

async function getGuild() {
    try {
        var response = await axios.get(args[0]);
        parsedGuild = response.data.guild;
        
    } catch (error) {
    	console.log(error)
    }
	
}


if (args[0] != undefined) {
           console.log(args[0])
            ign = args[0]
            return message.channel.send("Fetching API...")
            try {
                //
                await getIGN();
                await getRank();
                await getKarma();
                await getLevel();
                await getOnline();
                await getVersion();
                await getGuild();
                //
                var Statss = Discord.MessageEmbed()
                    .setTitle(parsedIGN + "'s stats")
                    .setThumbnail(`https://image.ibb.co/emhGrV/Hypixel-Thumbnail.png`)
                    .addField('Name:', `${parsedIGN}`)
                    .addField('Player Info', `
 Guild: **${parsedGuild}**
 Rank: **${parsedRank}**
 Karma: **${parsedKarma}**
 Level: **${parsedLevel}**
 Minecraft Version: **${parsedVersion}**
                    
                    `)
                    .setColor(`#FFD700`)
                    .setImage("https://visage.surgeplay.com/full/" + parsedUUID + "?.png")
                    // .setFooter(`${parsedOnline}`)
                    //.setTimestamp()
                message.channel.send(Statss)

	} catch (error) {
                var Error_message = new Discord.MessageEmbed()
                    .setTitle(":x: Error! make sure that IGN is correct.")
                message.channel.send(Error_message)
                    console.log(error)
            }
        } else {
            const errorStats = new Discord.MessageEmbed()
                .setTitle(":x: Error! please use correct format _stats <IGN>.")
            message.channel.send(errorStats)
        }
}

module.exports.help = {
	name: "ng"
}
/*var parsedIGN = ""
var ign = ""
var parsedRank = ""
var parsedUUID = ""
var parsedKarma = 0
var parsedLevel = 0
var parsedOnline = true
var parsedVersion = ""
var parsedGuild = ""

/*const guild = "https://api.slothpixel.me/api/guilds/"
const slothpixel = "https://api.slothpixel.me/api/players/"
const hypixel = "https://api.hypixel.net/player?key=" + process.env.HYPIXEL_TOKEN + "&uuid="
const mojang = "https://api.mojang.com/users/profiles/minecraft/"*/
/*const nether = "https://apiv2.nethergames.org/players/" + args[0] + "/stats"


async function getIGN() {
    try {
        var response = await axios.get(args[0])
        parsedIGN = response.data.name;

    } catch (error) {
        console.log(error);
    }
}

/*async function GetUUID() {
    try {
        var response = await axios.get(mojang + ign);
        parsedUUID = response.data.id;
    } catch (error) {
        console.log(error);
    }
}
*/
/*async function getIGN() {
    
    try {
        var response = await axios.get(nether + ign)
        parsedIGN = response.data.name;

    } catch (error) {
        console.log(error);
    }
}*/

/*async function getRank() {
    var response = await axios.get(hypixel + parsedUUID)
    if (response.data.player.rank != undefined) {
        parsedRank = response.data.player.rank
    } else if (response.data.player.newPackageRank != undefined) {
        parsedRank = response.data.player.newPackageRank.replace("_PLUS", "+");
    } else {
        parsedRank = "NONE"
    }
}

async function getGuild() {
    try {
        var response = await axios.get(guild + ign);
        parsedGuild = response.data.name;
        
    } catch (error) {
    	console.log(error)
    }
	
}

async function getKarma() {
    try {
        var response = await axios.get(slothpixel + ign);
        parsedKarma = response.data.karma;
        parsedKarma = String(parsedKarma)
    } catch (error) {
        console.log(error)
    }
}

async function getLevel() {
    try {
        var response = await axios.get(slothpixel + ign);
        parsedLevel = response.data.level;
        parsedLevel = String(parsedLevel)
    } catch (error) {
        console.log(error)
    }
}

async function getOnline() {
    try {
        var response = await axios.get(slothpixel + ign)
        parsedOnline = response.data.online;
        if (parsedOnline == true) {
            parsedOnline = "🟢 " + "Player is Online"
        } else {
            parsedOnline = "🔴 " + "Player is Offline"
        }
    } catch (error) {
        console.log(error)
    }
}

async function getVersion() {
    try {
        var response = await axios.get(slothpixel + ign)
        parsedVersion = response.data.mc_version
    } catch (error) {
        console.log(error)
    }
}*/

/*module.exports = {
    name: "ng",
    category: "Nethergames",
    description: "Send Nethergames stats",
    run: async(client, message, args) => {
        if (args[0] != undefined) {
           console.log(args[0])
            ign = args[0]
            message.channel.send("Fetching API...")
            try {
                //
                await getIGN();
              /*  await getRank();
                await getKarma();
                await getLevel();
                await getOnline();
                await getVersion();
                await getGuild();*/
                //
                
                /*var Statss = new Discord.MessageEmbed()
                    .setTitle(parsedIGN + "'s stats")
                    .setThumbnail(`https://image.ibb.co/emhGrV/Hypixel-Thumbnail.png`)
                    .addField('Name:', `${parsedIGN}`)*/
                    /*.addField('Player Info', `
 Guild: **${parsedGuild}**
 Rank: **${parsedRank}**
 Karma: **${parsedKarma}**
 Level: **${parsedLevel}**
 Minecraft Version: **${parsedVersion}**
                    
                    `)
                    .setColor(`#FFD700`)
                    .setImage("https://visage.surgeplay.com/full/" + parsedUUID + "?.png")
                    // .setFooter(`${parsedOnline}`)
                    //.setTimestamp()
                message.channel.send(Statss)
            } catch (error) {
                var Error_message = new Discord.MessageEmbed()
                    .setTitle(":x: Error! make sure that IGN is correct.")
                message.channel.send(Error_message)
                    console.log(error)
            }
        } else {
            const errorStats = new Discord.MessageEmbed()
                .setTitle(":x: Error! please use correct format _stats <IGN>.")
            message.channel.send(errorStats)
        }
    }
}*/