const request = require('node-superfetch');
const fsn = require("fs-nextra");
const Command = require('../../Structure/Command');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			aliases: [],
			description: 'Are u beautiful?',
			category: 'Images',
			usage: 'beautiful <user>'
		});
	}
	
async run(message, args) {
    const {
      Canvas
    } = require('canvas-constructor');
    if (message.mentions.users.size < 1) return message.channel.send("You didn't mention a user to make beautiful.");
    const getSlapped = async (person) => {
      const plate = await fsn.readFile('./src/assets/images/beautiful.png');
      const png = person.replace('.gif', '.png');
      const {
        body
      } = await request.get(png);
      return new Canvas(480, 640)
        .setColor(0x00A2E8)
        .addImage(plate, 0, 0, 480, 640)
        .addImage(body, 287, 170, 200, 200, {
          type: "round",
          radius: 100
        })
        //.restore()
        .toBuffer();
    };
    try {
        const person = message.mentions.users.first().displayAvatarURL({ format: 'jpg' });
        const result = await getSlapped(person);
        await message.channel.send({
          files: [{
            attachment: result,
            name: 'beautiful.png'
          }]
        });
    } catch (error) {
      throw error;
    }
};

}