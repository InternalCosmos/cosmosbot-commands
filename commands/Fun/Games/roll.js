exports.run = async (client, msg, args) => {
    var dice = Math.floor(Math.random() * 5 + 1);
    msg.channel.send(`You rolled a ${dice}`);
    setTimeout(() => {
    msg.channel.sendFile(`./images//dice//${dice}.jpg`).then(m => m.react('🎲'));
    }, 1000);
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
    name: 'roll',
    description: "Rolls a six sided die!",
    usage: "",
    usageDelim: ""
};