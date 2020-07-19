const Discord = require('discord.js');
const client = new Discord.Client({disableEveryone: true});
const fs = require("fs");
const config = require(`./config.json`);
const prefix = config.prefix;

client.commands = new Discord.Collection();
client.afk = new Map();

fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    let eventFunc = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, (...args) => eventFunc.run(client, ...args));
  });
});

fs.readdir(`./commands`, (err, directories) => {
  if (err) return console.error(error);
  directories.forEach(directory => {
    fs.readdir(`./commands/${directory}`, (e, files) => {
      if (e) return console.error(e);
      files.forEach(file => {
        const eventFunc = require(`./commands/${directory}/${file}`);
        let eventName = file.split(".")[0];
        client.commands.set(eventName, eventFunc);
      });
    });
  });
});

client.login(process.env.BOT_TOKEN);
