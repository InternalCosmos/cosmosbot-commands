exports.run = (client, msg) => {
    msg.reply(`You flipped ${Math.random() > 0.5 ? 'Heads' : 'Tails'}.`);
};

exports.conf = {
    enabled: true,
    runIn: ['text','dm','group'],
    aliases: ['coin'],
    permLevel: 0,
    cooldown: 5,
    botPerms: [],
    requireFuncs: [],
    requiredSettings: [],
    requiredModules: []
};

exports.help = {
    name: 'coinflip',
    description: "Flips a (pseudo) fair coin.",
    usage: "",
    usageDelim: ''
};
