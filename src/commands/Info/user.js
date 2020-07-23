const { MessageEmbed, Util }  = require('discord.js');
const moment = require('moment');
const Command = require('../../Structure/Command');


const flags = {
	DISCORD_EMPLOYEE: '<:DiscordEmployee:708105978499039322>',
	DISCORD_PARTNER: '<:DiscordPartner:708106082320646245>',
	BUGHUNTER_LEVEL_1: '<:BugHunterLevel1:708106296347590666>',
	BUGHUNTER_LEVEL_2: '<:BugHunterLevel2:708106413431455784>',
	HYPESQUAD_EVENTS: '<:HypeSquadEvents:708106190491484201>',
	HOUSE_BRAVERY: '<:HouseBravery:708106687692800150>',
	HOUSE_BRILLIANCE: '<:HouseBrilliance:708106521761808395>',
	HOUSE_BALANCE: '<:HouseBalance:708106612363100220>',
	EARLY_SUPPORTER: '<:EarlySupporter:708484659444711534>',
	TEAM_USER: 'Team User',
	SYSTEM: '<:System:708106774238199928>',
	VERIFIED_BOT: '<:VerifiedBot:708106882421882930>',
	VERIFIED_DEVELOPER: '<:VerifiedDeveloper:708105822655217695>'
};

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			aliases: ['whois', 'userinfo'],
			description: 'Displays User Information',
			category: 'Utilities',
			usage: 'user [user]'
		});
	}

	async run(message) {
	  
const member = message.mentions.members.last() || message.guild.members.cache.get() || message.member;
		const roles = member.roles.cache
			.sort((a, b) => b.position - a.position)
			.map(role => role.toString())
			.slice(0, -1);
		const userFlags = member.user.flags.toArray();
		const embed = new MessageEmbed()
			.setThumbnail(member.user.displayAvatarURL({ dynamic: true, size: 512 }))
			.setColor(member.displayHexColor || 'BLUE')
			.addField('User', [
				`**❯ Username:** ${member.user.username}`,
				`**❯ Discriminator:** ${member.user.discriminator}`,
				`**❯ ID:** ${member.id}`,
				`**❯ Flags:** ${userFlags.length ? userFlags.map(flag => flags[flag]).join(' , ') : 'None'}`,
				`**❯ Avatar:** [Link to avatar](${member.user.displayAvatarURL({ dynamic: true })})`,
				`**❯ Time Created:** ${moment(member.user.createdTimestamp).format('LT')} ${moment(member.user.createdTimestamp).format('LL')} ${moment(member.user.createdTimestamp).fromNow()}`,
				`**❯ Status:** ${member.user.presence.status}`,
				`**❯ Game:** ${member.user.presence.game || 'Not playing a game.'}`,
				`\u200b`
			])
			.addField('Member', [
				`**❯ Highest Role:** ${member.roles.highest.id === message.guild.id ? 'None' : member.roles.highest.name}`,
				`**❯ Server Join Date:** ${moment(member.joinedAt).format('LL LTS')}`,
				`**❯ Hoist Role:** ${member.roles.hoist ? member.roles.hoist.name : 'None'}`,
				`\u200b`
			])
			.addField(`Roles (${member.roles.cache.filter(c => c.name !== '@everyone').size})`,[ member.roles.cache ? member.roles.cache.map(x => x.toString()).join(' , ').substring(0, 1024).replace(/\s\S+[^>]$/, '') : 'None'
			]);

		return message.channel.send(embed);
}
}