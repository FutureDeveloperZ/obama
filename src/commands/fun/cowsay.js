const cowsay = require("cowsay");
const cowList = ["beavis.zen",
  "bong",
  "bud-frogs",
  "bunny",
  "cheese",
  "cower",
  "daemon",
  "default",
  "doge",
  "dragon-and-cow",
  "dragon",
  "elephant-in-snake",
  "elephant",
  "eyes",
  "flaming-sheep",
  "ghostbusters",
  "goat",
  "hedgehog",
  "hellokitty",
  "kiss",
  "kitty",
  "koala",
  "kosh",
  "luke-koala",
  "mech-and-cow",
  "meow",
  "milk",
  "moofasa",
  "moose",
  "mutilated",
  "ren",
  "satanic",
  "sheep",
  "skeleton",
  "small",
  "squirrel",
  "stegosaurus",
  "stimpy",
  "supermilker",
  "surgery",
  "telebears",
  "turkey",
  "turtle",
  "tux",
  "vader-koala",
  "vader",
  "whale",
  "www"
];
const Command = require('../../Structure/Command');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			aliases: ['cow'],
			description: 'Makes cow say',
			category: 'Fun',
			usage: 'cow [text]'
		});
	}

	async run(message, args) {
	  console.log(args)
  if (args.length === 0) {
    return message.channel.send(`${message.author.mention}, you need to provide some text for the cow to say!`);
  } else if (cowList.includes(args[0].toLowerCase())) {
    const cow = args.shift().toLowerCase();
    return `\`\`\`\n${cowsay.say({
      text: args.join(" "),
      f: cow
    })}\n\`\`\``;
  } else {
    return `\`\`\`\n${cowsay.say({ text: args.join(" ") })}\n\`\`\``;
  }
};
}