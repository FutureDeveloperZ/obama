const ascii = require("ascii-art");
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(!args[0]) return message.channel.send('Please insert text, u dummy');
ascii.font(args.join(" "), "Doom", function (rendered) {
rendered = rendered.trimRight();

if(rendered.length > 2000) return message.channel.send("Too Long");

message.channel.send(rendered, {
  code: "md"
    });
  });
}

module.exports.help = {
  name: "ascii"
}
