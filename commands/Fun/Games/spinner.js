exports.run = async (client, msg) => {
    const ms = require('ms');
    var time = Math.floor(Math.random() * 99 + 1);
  
  msg.channel.send("You spun your fidget spinner...");
  setTimeout(() => {
    msg.channel.send(`<@${msg.author.id}> your spinner spun for **${time}** seconds!`);
  }, ms(`${time}s`));
};

exports.conf = {
    enabled: true,
    runIn: ['text','dm','group'],
    aliases: ['fidget'],
    permLevel: 0,
    cooldown: 3,
    botPerms: [],
    requireFuncs: [],
    requiredSettings: [],
    requiredModules: []
};

exports.help = {
    name: 'spinner',
    description: "See how long you can spin your fidget spinner like the cool memer you are!",
    usage: "",
    usageDelim: ""
};