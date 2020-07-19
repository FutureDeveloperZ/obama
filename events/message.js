module.exports.run = async(client, message) => {
    //Anti advertise function 12/08/18 - Ducky


   //AFK stuff
   if (message.content.includes(message.mentions.users.first())) {
    let mentioned = client.afk.get(message.mentions.users.first().id);
    if (mentioned) message.channel.send(`${mentioned.usertag} is currently afk. Reason: ${mentioned.reason}`);
  }
  let afkcheck = client.afk.get(message.author.id);
  if (afkcheck) return [client.afk.delete(message.author.id), message.reply(`you have been removed from the afk list!`).then(msg => msg.delete({ timeout: 5000 }))];


    //Message.js update 12/08/18 - Ducky
    var prefix = "t;";
    if (message.author.bot) return;
    if (message.channel.type === 'dm') return;
    if(message.content.indexOf(prefix) !== 0) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    const cmd = client.commands.get(command);
    if(!cmd) return;
    cmd.run(client, message, args);
    

};
