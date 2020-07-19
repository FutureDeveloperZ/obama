const Event = require('../Structure/Event');

module.exports = class extends Event {
  
  constructor(...args) {
    super(...args, {
      once: true
    });
  }
  
  run() {
    console.log(`Logged in as ${this.client.user.tag}`);
    console.log(`Logged in as ${this.client.commands.size} commands`);
    console.log(`Logged in as ${this.client.events.size} eve`);
    console.log([
      "Logged in as ${this.client.user.tag}",
      "Loaded ${this.client.commands.size} commands",
      "Loaded ${this.client.events.size} events"
      ].join('\n'));
  }
  

};