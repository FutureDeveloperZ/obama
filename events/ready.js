let status = require(`../resources/status.json`);
let activity = require(`../resources/activity.json`);

module.exports.run = async (client, message, args) => {
	
	client.user.setPresence({ activity: { name: 'f;help ' }, status: 'streaming' });
        
    console.log(" ###   #     #  #     #####  #     #  #####");
    console.log("#   #  # #   #  #       #    # #   #  #");
    console.log("#   #  #  #  #  #       #    #  #  #  ####");
    console.log("#   #  #   # #  #       #    #   # #  #");
    console.log(" ###   #     #  ####  #####  #     #  #####");
    console.log(`Bot name ${client.user.username}`);
};
