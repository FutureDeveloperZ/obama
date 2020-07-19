const Discord = require('discord.js');
const config = require('../../config.json');

module.exports.run = async (client, message, args) => {
  if (message.author.id !== `${config.ownerid}`) return errors.ownersOnly(message);

  if (message.author.id == `${config.ownerid}`) {
    let embed = new Discord.MessageEmbed()
      .setTitle('Shutting Down...')
      .setColor(config.red);

    message.channel.send(embed)
      .then(message => client.destroy())
  }
}

module.exports.help = {
  name: 'shutdown'
};