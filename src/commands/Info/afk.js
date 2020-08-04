const Command = require('../../Structure/Command');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			aliases: [],
			description: 'Make yourself afk',
			category: 'Fun',
			usage: 'afk [text]'
		});
	}
	
async run(message, args) {

    let reason = args.join(' ') ? args.join(' ') : 'I am currently afk, I will reply as soon possible.';
    let afklist = this.client.afk.get(message.author.id);


    if (!afklist) {
        let construct = {
            id: message.author.id,
            usertag: message.author.tag,
            reason: reason
        };

        this.client.afk.set(message.author.id, construct)
        return message.reply(`you have been set to afk for reason: ${reason}`).then(msg => msg.delete({ timeout: 5000 }));
    }

};


};