const request = require('node-superfetch');
const fsn = require("fs-nextra");
const Command = require('../../Structure/Command');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			aliases: [],
			description: '3000 avatar',
			category: 'Memes',
			usage: ''
		});
	}
	
async run(message, args) {
	const mentions = message.mentions.users.first() || message.author;
	let user = mentions.avatarURL();
    const {
      Canvas
    } = require('canvas-constructor');
    if (message.mentions.users.size < 1) return message.reply("You didn't mention a user.");
    const getSlapped = async (user) => {
      const plate = await fsn.readFile('./assets/images/3000-years.png');
      const png = user.replace('.gif', '.png');
      const {
        body
      } = await request.get(png);
      return new Canvas(856, 569)
      .resetTransformation()
      .addImage(plate, 0, 0, 856, 569)
      .addImage(body, 461, 127, 200, 200)
      .toBuffer();
    };
    try {
        const result = await getSlapped(user);
        await message.channel.send({
          files: [{
            attachment: result,
            name: '3000.png'
          }]
        });
    } catch (error) {
      throw error;
    }
};
}