const { MessageEmbed } = require("discord.js");
const config = require('../../../config.json');
const logchann = config.logsChannel;
const Command = require('../../Structure/Command');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			aliases: [],
			description: 'Kick a Member',
			category: 'Moderation',
			usage: 'kick <user> [reason]'
		});
	}

	async run(message, args) {

message.delete(message.author);

    if(!message.guild.me.hasPermission(['KICK_MEMBERS', 'ADMINISTRATOR'])) return message.channel.send("I dont have enough Permssions to execute this command, i need \`\`KICK_MEMBERS\`\` Permssions");
    if(!message.member.hasPermission(['KICK_MEMBERS', 'ADMINISTRATOR']) || !message.guild.owner) return message.channel.send("Hey <@"+ message.author.id+"> ! You don't have the permission to do that !");
 
    let member = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
    
    if (!member) 
      return message.channel.send("Please mention a user in the following form: \n\nMention:` `@user#1234`` \nDiscord ID:` `251455597738721280``");
    
    if (member.id === this.client.user.id)  
      return message.channel.send("Hahaha, give it a try but I can't kick myself!");
    
    if (member.user.bot) 
      return message.channel.send("Cannot kick a bot!");
    
    if (member.id === message.author.id) 
      return message.channel.send("You can't kick yourself");

    if(member.hasPermission(['KICK_MEMBERS', 'ADMINISTRATOR'])) 
      return message.channel.send("Cannot kick moderator!");
    
    if (!member.kickable) 
      return message.channel.send("I can't kick this user, do I have the necessary permissions? Am I high enough?");
    
      let reason = args.slice(2).join('');
    if (!reason) reason = "You have committed an offense, so a moderator kicked you";
    
    const kicked = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    client.users.cache.get(kicked);
    kicked.send(`You were kicked by $ {message.author.tag} => $ {reason}`);
    await member.kick ({
      reason: reason,
    }).catch(error => message.channel.send(`Sorry, I can't kick this user because of: ${error}`));
    
    
    const logchan = message.guild.channels.cache.find(c=>logchann.includes(c.name))
        setTimeout(function (){
            if (message.guild.me.hasPermission(['MANAGE_CHANNELS', 'ADMINISTRATOR']) && !logchan) {
                message.guild.channels.create('logs').catch(error => message.channel.send(`An error occured during the creation of the \'Logs\' Channel\n\nError : ${error}`));
            }
        }, 2000); 

    if (!message.guild.me.hasPermission(['MANAGE_CHANNELS', 'ADMINISTRATOR']) && !logchan) {
        message.channel.send("The \'Logs\' channel does not exist, i tried to create it but i lack permisions")
    }
    
    info.send (`${member.user.tag} was kicked by ${message.author.tag}`);
    logchan.send ({
      embed: {
        color: '# fc0703',
        author: {
          name: member.user.tag,
          icon_url: "https://cdn.discordapp.com/avatars/" + member.user.id + "/" + member.user.avatar + ".png"
        },
        title: "Kick",
        description: "Ouch, kick in the butt!",
        thumbnail: {
          url: "https://cdn.discordapp.com/avatars/" + message.author.id + "/" + message.author.avatar + ".png",
        },
        fields: [{
          name: "Action",
          value: `Kick`,
          inline: false,
        }, {
          name: "Username",
          value: `$ {member.user.tag}`,
          inline: false,
        }, {
          name: "ID",
          value: `$ {member.user.id}`,
          inline: false,
        }, {
          name: "Kicked by",
          value: `$ {message.author.tag}`,
          inline: false,
        }, {
          name: "Moderator ID",
          value: `$ {message.author.id}`,
          inline: false,
        }, {
          name: "Reason",
          value: `$ {reason}`,
          inline: false,
        }],
        timestamp: new Date (),
        footer: {
          icon_url: "https://cdn.discordapp.com/avatars/" +this.client.user.id+ "/" +this.client.user.avatar+ ".png?size=128",
          text: ""
        }
      }
    });
  }


  };

    