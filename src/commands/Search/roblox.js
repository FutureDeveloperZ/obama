const { MessageEmbed } = require('discord.js');
const Command = require('../../Structure/Command');
const request = require('node-superfetch');

module.exports = class extends Command {
  
  
constructor(...args) {
		super(...args, {
			aliases: [],
			description: 'Search up your roblox profile',
			category: 'Search',
			usage: 'Roblox <username>'
		});
	}


async run(message, args) {
    try {
        let saybot = args.join('_');
        const url = `https://api.roblox.com/users/get-by-username?username=${saybot}`;
        request.get(url).then(result => {
          const data = result.body.Id;
          if (saybot.length < 1) return message.channel.send("Please provide a username to search for.");
          if (result.body.Id === "500") return message.channel.send("Couldn't find a roblox user by the name of " + saybot + ".");
          const url2 = `https://api.roblox.com/ownership/hasasset?userId=${data}&assetId=102611803`;
          request.get(url2).then(a => {
            const Verifiedcheck = a.body;
            const embed = new MessageEmbed()
              .setColor('#ff0000')
              .setTitle("❯ Username: " + saybot)
              .setDescription("❯ User ID: " + data)
              .addField("❯ Verified", Verifiedcheck)
              .setFooter("❯ Profile Link: " + `https://web.roblox.com/users/${data}/profile`)
              .setThumbnail("https://roblox.com/Thumbs/BCOverlay.ashx?username=" + saybot)
              .setImage("http://www.roblox.com/Thumbs/Avatar.ashx?x=250&y=250&Format=Png&username=" + saybot);
            message.channel.send({
              embed
            }).catch(console.error);
          });
        });
      } catch (err) {
        if (err.status === 404) { return msg.say('Could not find any results.');
      } else
        if (err.status === 500) { return msg.say('Internal Server Error kids');
        }
        console.log(err);
        return message.channel.send(`Oh no, an error occurred: \`${err.message}\`. Try again later!`);
    }
  }
}