const Event = require('../Structure/Event');
const request = require('node-superfetch');
const ms = require('ms');
module.exports = class extends Event {
  
  constructor(...args) {
    super(...args, {
      once: true
    });
  }
  
  run(client, message, args) {
    console.log(`Logged in as ${this.client.user.tag}`);
    console.log(`Log ${this.client.commands.size} commands`);
    console.log(`Log ${this.client.aliases.size} Aliases`)
    console.log(`Log ${this.client.events.size} events`);
    
    
    let url = `https://discord.bots.gg/api/v1/bots/${this.client.user.id}/stats`;
    
  this.client.setInterval(() => {
    
/*request.post(`https://discordbots.org/api/bots/${this.client.user.id}/stats`)
      .set('Authorization', dblKey)
      .send({ server_count: this.client.guilds.size })
      .then(() => console.log(`Posted to dbl.`))
      .catch((e) => console.error(e.message));*/
      // bots .gg
      request.post(url, { headers: {Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGkiOnRydWUsImlkIjoiMjgyOTc4NjcyNzExODI3NDU2IiwiaWF0IjoxNTk2NDkwNjYwfQ.IGhxjT8KS95-IMaClN_blCo1tChHNkFNJsKfHJMvdDk',
        'Content-Type': 'application/json' }})
      .send({
        guildCount: this.client.guilds.size,
      })
      .then(() => console.log(`Posted to dbl.`))
      .catch((e) => console.error(e.message));
  }, ms("130m")); // setting it up so it auto updates every hour and 30 mins
  // this code below is used it set it at start up
 /* request.post(`https://discordbots.org/api/bots/${this.client.user.id}/stats`)
    .set('Authorization', dblKey)
    .send({
      server_count: this.client.guilds.size,
    })
    .then(() => console.log(`Posted to top.gg.`))
    .catch((e) => console.error(e.message));*/
    request.post(url, { headers: {Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGkiOnRydWUsImlkIjoiMjgyOTc4NjcyNzExODI3NDU2IiwiaWF0IjoxNTk2NDkwNjYwfQ.IGhxjT8KS95-IMaClN_blCo1tChHNkFNJsKfHJMvdDk',
        'Content-Type': 'application/json' }})
    .send({
      guildCount: this.client.guilds.size,
    })
    .then(() => console.log(`Posted to dbl.gg.`))
    .catch((e) => console.error(e.message));
    
    this.client.user.setPresence({ activity: { name: 'f;help ' }, status: 'dnd' });
        
  }

// Spare Token [eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0IjoxLCJpZCI6IjQ0NDQ2Mzg3NTkwODMwNDkwMSIsImlhdCI6MTU5NjQ2NzYyNn0.-LhDMY_OVpWygKpZHdVw-5jlUaXoUK28Ecjdj0GU9hY]
};