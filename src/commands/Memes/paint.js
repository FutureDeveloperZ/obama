const request = require('node-superfetch');
const fsn = require("fs-nextra");
const Command = require('../../Structure/Command');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			aliases: ['bobross'],
			description: 'Bobross made your profile\?',
			category: 'Memes',
			usage: 'paint <user>'
		});
	}
	
async run(message, args) {
        const {
            Canvas
        } = require('canvas-constructor');
        if (message.mentions.users.size < 1) return message.channel.send("No mentions found in your message.");
        const getSlapped = async (person) => {
            const plate = await fsn.readFile('./assets/images/bob-ross.png');
            const png = person.replace('.gif', '.png');
            const {
                body
            } = await request.get(png);
            return new Canvas(600, 755)
                .resetTransformation()
                .rotate(3 * (Math.PI / 180))
                .addImage(body, 30, 19, 430, 430)
                .rotate(-3 * (Math.PI / 180))
                .addImage(plate, 0, 0, 600, 755)
                .toBuffer();
        };
        try {
            const person = message.mentions.users.first().displayAvatarURL({ format: 'jpg' });
            const result = await getSlapped(person);
            await message.channel.send({
                files: [{
                    attachment: result,
                    name: 'paint.png'
                }]
            });
        } catch (error) {
            throw error;
        }
};
}