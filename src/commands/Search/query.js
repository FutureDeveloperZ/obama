//You May Not Reproduce This Code Or You Will Be DCMA
//Meaning ur not able to copy this code or ur repo 
//will be taken down so dont do it 
//© ThePandazManYT & Wolfkid200444 2018

const Discord = require('discord.js');
const Command = require('../../Structure/Command');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			aliases: ['qr'],
			description: 'Displays your minecraft server info even bedrock editon too ',
			category: 'Search',
			usage: 'query <ip> [port]'
		});
	}
	
async run(message, args) {
  
let a = args[1]
var request = require('request');

if(a == null){
	a = 19132
}
	
        var url = 'https://api.minetools.eu/query/'+args[0]+"/"+a
        let res = new Discord.MessageEmbed()
        .setColor("RED")
        .setTitle("Query Usage")
        .setTimestamp()
        .setThumbnail(`https://cdn.discordapp.com/attachments/505849614121828367/510126675128745985/unnamed.png`)
        .setFooter(`DOPE? or NOPE ${message.author.username}`, `${message.author.avatarURL()}`)
        .addField("󠂪:white_check_mark: Usage: 󠂪", "**query <server ip> <port>**\n 󠂪 󠂪󠂪 󠂪", true)
      if(!args[0]) return message.channel.send(res);
        request(url, function(err, response, body) {
            if(err) {
                console.log(err);
                return message.reply('Error getting Minecraft server status...');
            }
         
          body = JSON.parse(body);
          let Omsg = new Discord.MessageEmbed()
          .setColor("RED")
          .setTitle("Query ERROR Message")
	        .setThumbnail(`https://cdn.discordapp.com/attachments/505849614121828367/510126675128745985/unnamed.png`)
          .addField("󠂪 󠂪", "🚫 Server Is Either Offline Or Is Not A MC server 🚫", true)
          .setTimestamp()
          .setFooter("Correct Usage: query <ip> [port]")
          
let stat = body.status
if(stat == false) return message.channel.send(Omsg);
let white = body.cached
if(white == true){
  white = ["Enabled"];
}
if(white == false){
  white = ["Disabled"]
}
let list = body.list
if(list == null){
  list = ["None"]
}

          let query = new Discord.MessageEmbed()
          .setColor("RANDOM")
          .setTitle("Query Command")
	        .setThumbnail(`https://cdn.discordapp.com/attachments/505849614121828367/510126675128745985/unnamed.png`)
          .addField("🖇 VERSION", "```" + `${body.Version}` + "```", true)
          .addField("💾 SOFTWARE", "```" + `${body.Software}` + "```", true)
          .addField("🎉 MOTD", "```" + `${body.Motd}` + "```", true)
          .addField("📈 Status", "```" + `${body.status}` + "```", true)
          .addField("👥 PLAYER Count", "```" + `${body.Players}/${body.MaxPlayers}` +  "```", true)   

          message.channel.send(query)

        });
    }
}
  