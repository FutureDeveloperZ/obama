const config = require('../../config.json');
const Discord = require('discord.js')
const modRole = config.modRole;
const logchann = config.logsChannel;

module.exports.run = async (bot, message, args) => {
   // message.delete(message.author);
   
    console.log(config)
   
    if(!message.guild.me.hasPermission('BAN_MEMBERS')) return message.channel.send("I dont have enough Permssions to execute this command");
    if(!message.member.hasPermission('BAN_MEMBERS') || !message.guild.owner) return message.channel.send("Hey <@"+ message.author.id+"> ! You don't have the permission to do that !");
 
    let member = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
        if(!member) return message.channel.send("Please mention a user first.");
    
    if(member.user.bot) return message.channel.send("Sorry ! can't ban a bot user !");

    if(!message.member.roles.cache.find(r=> modRole == r.name))
        return message.channel.send("Hey <@"+ message.author.id+"> ! You don't have the permission to do that !");

    if(!member.bannable)
        return message.channel.send("I can't ban this user, do i have necessary permissions ? am i high enough ?");

    let reason = args.slice(1).join(' ');
     if(!reason) reason = "You have been banned by a moderator";
     

     const banned = message.mentions.members.first() ||  message.guild.members.cache.get(args[0]);
     bot.users.cache.get(banned);
       banned.send(`You have been banned from => ${message.guild.name}\n Reason : ${reason}`);

    await member.ban(reason)
    .catch(error => message.channel.send(`An error occured during the execution of the command\n\nError : ${error}`));

    const logchan = message.guild.channels.cache.find(c=>logchann.includes(c.name))
        setTimeout(function (){
            if (message.guild.me.hasPermission('MANAGE_CHANNELS') && !logchan) {
                message.guild.channels.create('logs').catch(error => message.channel.send(`An error occured during the creation of the \'Logs\' Channel\n\nError : ${error}`));
            }
        }, 2000); 

    if (!message.guild.me.hasPermission('MANAGE_CHANNELS') && !logchan) {
        message.channel.send("The \'Logs\' channel does not exist, i tried to create it but i lack permisions")
    }
    logchan.send({embed: {
        color: '#fc0703',
        author: {
        name: member.user.tag,
        icon_url: "https://cdn.discordapp.com/avatars/"+member.user.id+ "/"+member.user.avatar+".png"
    },
        title: "Bannissement",
        description: "The Ban Hammer !",
        thumbnail: {
            url:"https://cdn.discordapp.com/avatars/"+message.author.id+ "/"+message.author.avatar+".png",
        },
        fields: [{
            name: "Action",
            value: `Ban`,
            inline: false,
        },
        {
            name: "Username",
            value: `${member.user.tag}`,
            inline: false,
        },
        {
            name: "User ID",
            value: `${member.user.id}`,
            inline: false,
        },
        {
            name: "Banned by",
            value: `${message.author.tag}`,
            inline: false,
        },
        {
            name: "Moderator ID",
            value: `${message.author.id}`,
            inline: false,
        },
        {
            name: "Reason",
            value: `${reason}`,
            inline: false,
        }
    ],
        timestamp: new Date(),
        footer: {
        icon_url: "https://cdn.discordapp.com/avatars/"+bot.user.id+ "/"+bot.user.avatar+".png",
        text: ""
        }
    }
  });
}; 

module.exports.help = {
    name: 'ban'
};