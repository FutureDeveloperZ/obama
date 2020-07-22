const { MessageEmbed } = require('discord.js');
const Command = require('../../Structure/Command');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			aliases: ['addrole'],
			description: 'Add a role to a user',
			category: 'Moderation',
			usage: 'role <user> <role>'
		});
	}

	async run(message, args) {
        if (message.channel.type == "dm") return message.channel.send("This command only works in a server!");

        if(!message.member.hasPermission(["MANAGE_ROLES", "ADMINISTRATOR"])) return errors.noPerms(message, "MANAGE_ROLES");
        if(!message.guild.me.hasPermission(["MANAGE_ROLES", "ADMINISTRATOR"])) return errors.lack(message.channel, "MANAGE_ROLES");

        let cmd = message.content.split(" ")[0]; //used because of command aliases
      
        let rMember = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
        if(!rMember) return message.channel.send(`Didn't find the user u where looking for`);

        if (rMember.id === this.client.user.id) return message.channel.send(`Can't add Role to myself`);

        let role = message.guild.roles.cache.find(r => r.name == args[1]) || message.guild.roles.find(r => r.id == args[1]) || message.mentions.roles.first();
        if(!role) return message.channel.send(`Didn't find the Role or ID dumb dumb`);

        if(rMember.roles.has(role.id)) {
            return message.channel.send(`**${rMember.displayName} already has that role!**`)
        } else {
            try {
              
              let AddEmbed = MessageEmbed()
              .setDescription(`✅  Change roles for ${rMember.displayName}, +${role.name}`)
               await rMember.roles.add(role.id);
               message.channel.send(AddEmbed); //if successful this message
                
            } catch(e) {
                let id = second.getError(e.message);
                message.channel.send(`Unfortunately an error occurred. Error ID: ${id}`);
            }
        }
    }
}