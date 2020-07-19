const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  if(!message.guild.me.hasPermission('MANAGE_MESSAGES')) return message.reply("I dont have the right permissions to proceed with this command be sure i have `MANAGE_MESSAGES` or re-invite me with proper permissions.")
  if(!message.member.hasPermission("MANAGE_MESSAGES") || !message.guild.owner) return message.reply("Must have ``MANAGE_MESSAGES`` To use command");
  if(!args[0]) return message.channel.send("Usage: f;purge (number of messages ex. 100)");
  if(args[0] > 101) return message.channel.send("Please make sure the number is between 1 to 100");
 // if(args[0] > 0) return message.channe.send("Cannot delete 0 messages!");
    message.channel.bulkDelete(Number(args[0])+1).then(() => {
        message.channel.send(`Clear ${args[0]} messages.`).then(msg => msg.delete({ timeout: 4500 }));
        
});

}

module.exports.help = {
  name: "purge"
}
