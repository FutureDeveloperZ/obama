const Discord = require("discord.js");
const Command = require('../../Structure/Command');
const config = require('../../../config.json');


module.exports = class extends Command {

constructor(...args) {
		super(...args, {
			aliases: ['ev'],
			description: 'Evaluates any stuff i send',
			category: 'Owners',
			usage: 'eval [evaluation]'
		});
	}


    async run(message, [args]) {
      
      
 let embed = new Discord.MessageEmbed()
  .setTitle("Evaluation")
  .setDescription("Sorry, the `eval` command can only be executed by the Main Developer.")
  .setColor("#cdf785");
  if(!this.client.owners.includes(message.author.id)) return message.channel.send(embed);
  function clean(text) {
  if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else
      return text;
}try {
  console.log('args)
      const code = args.join(" ");
      let evaled = eval(code);
      let rawEvaled = evaled;
      if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);
      let noarg = new Discord.MessageEmbed()
         .setColor("RED")
         .setTimestamp()
         .setFooter(`Requested ${message.author.tag}`)
         .setTitle("Usage: eval <eval crap>")

      if(!code) return message.channel.send(noarg)
 
  let embed = new Discord.MessageEmbed()
      .setTitle(`Evaluated in ${Math.round(bot.ws.ping)}ms`)
      .addField(":inbox_tray: Input", `\`\`\`js\n${code}\n\`\`\``)
      .addField(":outbox_tray: Output", `\`\`\`js\n${clean(evaled).replace(bot.token, "Are you retarded?")}\n\`\`\``)
      .addField('Type', `\`\`\`xl\n${(typeof rawEvaled).substr(0, 1).toUpperCase() + (typeof rawEvaled).substr(1)}\n\`\`\``)
      .setColor('GREEN');
      message.channel.send({embed});
    } catch (err) {
      
      message.channel.send(`\`ERROR\` \`\`\`js\n${clean(err)}\n\`\`\``);
    }
  }
}