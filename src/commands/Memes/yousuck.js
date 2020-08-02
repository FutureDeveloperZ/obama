const request = require('node-superfetch');
const fsn = require("fs-nextra");
const Command = require('../../Structure/Command');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			aliases: [],
			description: 'Basically u just suck',
			category: 'Memes',
			usage: 'yousuck <user>'
		});
	}
	
async run(message, args) {
  const {
    Canvas
  } = require('canvas-constructor');
  if (message.mentions.users.size < 1) return message.channel.send("You didn't mention a user!");
  let a = message.mentions.users.first();
  const getSlapped = async (person) => {
    const plate = await fsn.readFile('./src/assets/images/suck.png');
    const png = person.replace('.gif', '.png');
    const {
      body
    } = await request.get(png);
    return new Canvas(979, 531)
      .addImage(plate, 0, 0, 979, 531)
      .setTextFont('bold 50px Comic Sans MS')
      .setTextAlign('center')
      .addText(`Dear ${a.username},`, 500, 225)
      .addText(`You SUCK!`, 500, 325)
      .toBuffer();
  };
  try {
    if (message.mentions.users.size < 1) {
      const person = message.author.didplayAvatarURL({ format: 'jpg' });
      const result = await getSlapped(person);
      await message.channel.send({
        files: [{
          attachment: result,
          name: 'usuck.png'
        }]
      });
    } else {
      const person = message.mentions.users.first().displayAvatarURL({ format: 'jpg' });
      const result = await getSlapped(person);
      await message.channel.send({
        files: [{
          attachment: result,
          name: 'usuck.png'
        }]
      });
    }
  } catch (error) {
    throw error;
  }
};
}