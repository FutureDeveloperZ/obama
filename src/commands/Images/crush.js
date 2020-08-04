const request = require('node-superfetch');
const fsn = require("fs-nextra");
const Command = require('../../Structure/Command');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			aliases: [],
			description: 'He\'s you\'re crush ',
			category: 'Images',
			usage: 'crush <user>'
		});
	}
	
async run(message, args) {
        const {
            Canvas
        } = require('canvas-constructor');
        if (message.mentions.users.size < 1) return message.channel.send("No mentions found in your message.");
        const getSlapped = async (slapper, slapped) => {
            const plate = await fsn.readFile('./src/assets/images/plate_crush.png');
            const pngSlapper = slapper.replace('.gif', '.png');
            const pngSlapped = slapped.replace('.gif', '.png');
            const Slapper = await request.get(pngSlapper);
            const Slapped = await request.get(pngSlapped);
            return new Canvas(600, 873)
                .rotate(-0.09)
                .addImage(Slapped.body, 109, 454, 417, 417)
                .resetTransformation()
                .addImage(plate, 0, 0, 600, 873)
                .addImage(Slapper.body, 407, 44, 131, 131, {
                    type: 'round',
                    radius: 66
                })
                .restore()
                .toBuffer();
        };
        try {
            const slapped = message.mentions.users.first().displayAvatarURL({ format: 'jpg' });
            const slapper = message.author.displayAvatarURL({ format: 'jpg' });
            const result = await getSlapped(slapper, slapped);
            await message.channel.send({
                files: [{
                    attachment: result,
                    name: 'crush.png'
                }]
            });
        } catch (error) {
            throw error;
        }
};

}