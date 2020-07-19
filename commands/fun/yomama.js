const { MessageEmbed } = require('discord.js');
const fetch = require('superagent');

const emoji = ['🤣', '👅', '😱', '😆', '😂'];
module.exports.run = async (client, message) => {
    console.log("Command executed")
    fetch('https://api.apithis.net/yomama.php').then(res => {
        const joke = new MessageEmbed()
        .addField(`${emoji[~~(Math.random() * emoji.length)]}`, res.text)
        .setColor('#6C00FF')
        .setTimestamp()
        .setFooter(`Requested by ${message.author.tag}`)
        message.channel.send({embed:joke});
        });
};

module.exports.help = {
    name: 'yomama'
};
