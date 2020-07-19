module.exports = async (client, guild) => {
        if (!guild.available) return;
        const embed = new (require('discord.js').MessageEmbed)()
			.setTitle('Guild Added')
			.addField('Guild Name', guild.name)
			.addField('Guild ID', guild.id)
			.addField('Guild Owner', guild.owner.user.username)
			.addField('Guild Members (Excluding bots)', guild.members.cache.filter(m => !m.user.bot).size)
			.setColor('GREEN');
		return client.channels.cache.get('718089203040387162').send(embed);
};
