exports.run = async (client, msg, [args]) => {
  var zalgo = require("zalgotxt");
    msg.delete();
    msg.channel.send(zalgo(args) + `\nsent by ${msg.author.tag} (${msg.author.id})`);
};

exports.conf = {
    enabled: true,
    runIn: ['text'],
    aliases: [],
    permLevel: 0,
    cooldown: 3,
    botPerms: [],
    requireFuncs: [],
    requiredSettings: [],
    requiredModules: ['zalgotxt']
};

exports.help = {
    name: 'zalgo',
    description: "Send something in z͙̜̜a͙͕͡ĺ̼g̸͖̦o̤̱.",
    usage: "<args:str>",
    usageDelim: ''
};
