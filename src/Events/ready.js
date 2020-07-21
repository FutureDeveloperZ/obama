const Event = require('../Structure/Event');

module.exports = class extends Event {
  
  constructor(...args) {
    super(...args, {
      once: true
    });
  }
  
  run() {
    console.log(`Logged in as ${this.client.user.tag}`);
    console.log(`Log ${this.client.commands.size} commands`);
    console.log(`Log ${this.client.events.size} events`);
    
  }
  

};