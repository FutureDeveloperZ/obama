const Event = require('../../Structure/Event');

module.exports = class extends Event {
  
  
  async run(message, channel) {
    this.client.snipes = new Map()
    this.client.snipes.set(message.channel.id, {
    content:message.content,
    author:message.author.tag,
    image:message.attachments.first() ? message.attachments.first().proxyURL : null
  })


  }
};