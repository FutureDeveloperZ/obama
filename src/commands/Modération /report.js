const { MessageEmbed } = require('discord.js');
const config = require('../../../config.json');
const Command = require('../../Structure/Command');
const logchann = config.logsChannel;

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			aliases: ['warn'],
			description: 'Warn/Report someone body',
			category: 'Moderation',
			usage: 'report <user> [reason]'
		});
	}

	async run(message, args) {

    let target = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
    let reason = args.slice(1).join(' ');
    let reports = message.guild.channels.cache.find(channel => channel.name === config.logsChannel);

    if (message.user.hasPermissions(['KICK_MEMBERS',  'BAN_MEMBERS', 'ADMINISTRATOR']))
    if (!target) return message.reply('please specify a member to report!');
    if (!reason) return message.reply('please specify a reason for this report!');
    if (!reports) return message.reply(`please create a channel called ${config.logsChannel} to log the reports!`);

       const logchan = message.guild.channels.cache.find(c=>logchann.includes(c.name))
        setTimeout(function (){
            if (message.guild.me.hasPermission(['MANAGE_CHANNELS', 'ADMINISTRATOR']) && !logchan) {
                message.guild.channels.create('logs').catch(error => message.channel.send(`An error occured during the creation of the \'Logs\' Channel\n\nError : ${error}`));
            }
        }, 2000); 

    if (!message.guild.me.hasPermission(['MANAGE_CHANNELS', 'ADMINISTRATOR']) && !logchan) {
        message.channel.send("The \'Logs\' channel does not exist, i tried to create it but i lack permisions")
    


    let embed = new MessageEmbed()
        .setColor('RED')
        .setThumbnail(target.user.avatarURL)
        .addField('Reported Member', `${target.user.username} with an ID: ${target.user.id}`)
        .addField('Reported By', `${message.author.username} with an ID: ${message.author.id}`)
        .addField('Reported Time', message.createdAt)
        .addField('Reported In', message.channel)
        .addField('Reported Reason', reason)
        .setFooter('Reported user imformation', target.user.displayAvatarURL);

    message.channel.send(`${target} was reported by ${message.author} | Check Logs for More Info`).then(msg => msg.delete({ timeout: 5000 }));
    reports.send(embed);

};


}
}