// const magick = require("../build/Release/image.node");
const { promisify } = require("util");
const Command = require('../../Structure/Command');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			aliases: ['funy'],
			description: 'ifunny watermark',
			category: 'Meme',
			usage: '[command]'
		});
	}

	async run(message) {
  message.channel.sendTyping();
  const image = await require("../utils/imagedetect.js")(message);
  if (image === undefined) return `${message.author.mention}, you need to provide an image to add a iFunny watermark!`;
  const buffer = await promisify(magick.watermark)(image.path, "./assets/images/ifunny.png", 8, true, true, false, image.type.toUpperCase(), image.delay ? (100 / image.delay.split("/")[0]) * image.delay.split("/")[1] : 0);
  return {
    file: buffer,
    name: `ifunny.${image.type}`
  };
};
}