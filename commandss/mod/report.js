const { MessageEmbed } = require('discord.js');
const config = require('../../config.json');

module.exports.run = async (bot, message, args) => {

    let target = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
    let reason = args.slice(1).join(' ');
    let reports = message.guild.channels.cache.find(channel => channel.name === config.logsChannel);

    if (!target) return message.reply('please specify a member to report!');
    if (!reason) return message.reply('please specify a reason for this report!');
    if (!reports) return message.reply(`please create a channel called ${config.logsChannel} to log the reports!`);

    let embed = new MessageEmbed()
        .setColor('RANDOM')
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

module.exports.help = {
    name: 'report'
};