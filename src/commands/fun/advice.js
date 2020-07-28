const req = require('node-superfetch');
const Command = require('../../Structure/Command');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			aliases: [],
			description: 'get and advice from me',
			category: 'Fun',
			usage: ''
		});
	}

	async run(message) {
	  
  try {
    const {
      body
    } = await req.get('http://api.adviceslip.com/advice');
    message.reply(JSON.parse(body.toString()).slip.advice);
  } catch (e) {
    console.log(e);
    message.reply("Oh no, an error occurred!\n${e.message}");
  }
};
}