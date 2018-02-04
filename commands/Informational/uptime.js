const moment = require("moment");
require("moment-duration-format");
exports.run = async (client, msg) => {
    const duration = moment.duration(client.uptime).format(" D [days], H [hrs], m [mins], s [secs]");
    const bleh = ["Uptime:", "This is how long I\'ve been up for:", "Still alive and been for this long:"]
  
    msg.channel.send(`${bleh[Math.floor(Math.random() * bleh.length)]} \`${duration}\``)
};

exports.conf = {
    enabled: true,
    runIn: ['text','dm','group'],
    aliases: [],
    permLevel: 0,
    cooldown: 3,
    botPerms: [],
    requireFuncs: [],
    requiredSettings: [],
    requiredModules: []
};

exports.help = {
    name: 'uptime',
    description: "Tells you how long the bot has been up.",
    usage: "",
    usageDelim: ""
};