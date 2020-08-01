const Command = require('../../Structure/Command');
const { MessageEmbed } = require('discord.js');

module.exports = class extends Command {
  
constructor(...args) {
		super(...args, {
			aliases: [],
			description: 'SECRET',
			category: 'Fun',
			usage: 'SECRET'
		});
	}


async run(message, args) {
        if (args[0]) {
            if (command) {
			const cmd = this.client.commands.get(command) || this.client.commands.get(this.client.aliases.get(command));

			if (!cmd) return message.channel.send(`Invalid Command named. \`${command}\``);

			embed.setAuthor(`${this.client.utils.capitalise(cmd.name)} Command Help`, this.client.user.displayAvatarURL());
			embed.setDescription([
				`**❯ Aliases:** ${cmd.aliases.length ? cmd.aliases.map(alias => `\`${alias}\``).join(' ') : 'No Aliases'}`,
				`**❯ Description:** ${cmd.description}`,
				`**❯ Category:** ${cmd.category}`,
				`**❯ Usage:** ${cmd.usage}`
			]);

			return message.channel.send(embed);
        }
      }
      // const senke = message.guild.emojis.cache.find(emoji => emoji.name === '<:Senke:738856241958223932>');
        const pages = {
            system: new MessageEmbed()
                .setColor('BlUE')
                .setAuthor('System Commands', this.client.user.displayAvatarURL())
                .setDescription(`These are some cool and useful commands, that could help you out 😎\n\n**Commands:**\n${this.client.commands.filter(c => c.category === 'system').map(c => `\`${c.name}\``).join(', ')}`),
            anime: new MessageEmbed()
                .setColor('PINK')
                .setAuthor('Anime Commands <:Senke:738856241958223932>', this.client.user.displayAvatarURL())
                .setDescription(`Check some anime, i know anime? ah\n\n**Commands:**\n${this.client.commands.filter(c => c.category === 'Anime').map(c => `\`${c.name}\``).join(', ')}`),
            image: new MessageEmbed()
                .setColor(this.client.color)
                .setAuthor('Image Commands', this.client.user.displayAvatarURL())
                .setDescription(`You can enact actions upon other users, or make me do them to you! >:3\n\n**Commands:**\n${this.client.commands.filter(c => c.category === 'image').map(c => `\`${c.name}\``).join(', ')}`),
            imgmanip: new MessageEmbed()
                .setColor('BLUE')
                .setAuthor('Image Manipulation Commands', this.client.user.displayAvatarURL())
                .setDescription(`Manipulate someones avatar, have fun :D\n\n**Commands:**\n${this.client.commands.filter(c => c.category === 'imgmanip').map(c => `\`${c.name}\``).join(', ')}`),
            nsfw: new MessageEmbed()
                .setColor('BLUE')
                .setAuthor('NSFW Commands', this.client.user.displayAvatarURL())
                .setDescription(`It's lewd, thats all I can say.\n\n**Commands:**\n${this.client.commands.filter(c => c.category === 'nsfw').map(c => `\`${c.name}\``).join(', ')}`)
        };
        const msg = await message.channel.send(
            new MessageEmbed()
                .setColor('BLUE')
                .setAuthor('Help', this.client.user.displayAvatarURL())
                .setDescription(`**React** with the emojis below to get info on that topic.
🏘️ -  **Return here**
⚒️ - **System**
<:Senke:738856241958223932> - **Anime**
📷 - **Image**
🔧 - **Image Manipulation**${message.channel.nsfw ? '\n🔞 - **NSFW**' : ''}
❌ - **Stop and delete this help menu**
`)
        );
        await msg.react('🏘️');
        await msg.react('⚒️');
        await msg.react('738856241958223932');
        await msg.react('📷');
        await msg.react('🔧');
        if (message.channel.nsfw) await msg.react('🔞');
        await msg.react('❌');
        const collector = msg.createReactionCollector((r, u) => u.id === message.author.id, {
            time: 60000 * 5
        });

        collector.on('collect', reaction => {
            const name = reaction.emoji.name;
            if (name === '❌') {
                msg.delete();
                return collector.stop();
            }
            if (name === '🏘️') msg.edit(
                new MessageEmbed()
                    .setColor('BLUE')
                    .setAuthor('Help', this.client.user.displayAvatarURL())
                    .setDescription(`**React** with the emojis below to get info on that topic.
                        🏘️ -  **Return here**
                        ⚒️ - **System**
                        <:Senke:738856241958223932> - **Anime**
                        📷 - **Image**
                        🔧 - **Image Manipulation**${message.channel.nsfw ? '\n🔞 - **NSFW**' : ''}
                        ❌ - **Stop and delete this help menu**
                    `)
            );
            const e = {
                '⚒️': 'system',
                '738856241958223932': 'anime',
                '📷': 'image',
                '🔧': 'imgmanip',
                '🔞': 'nsfw'
            };
            if (!e[name]) return;
            const embed = pages[e[name]];
            msg.edit(embed);
        });
    }
};