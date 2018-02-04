const request = require('snekfetch')
exports.run = async (client, msg) => {
    const res = await request.get('http://api.yomomma.info').then(data => JSON.parse(data.text))
    return msg.channel.send(`📢 **Yomomma joke:** *${res.joke}*`)
};

exports.conf = {
    enabled: true,
    runIn: ['text','dm','group'],
    aliases: ['yomoma'],
    permLevel: 0,
    cooldown: 5,
    botPerms: [],
    requireFuncs: [],
    requiredSettings: []
};

exports.help = {
    name: 'yomomma',
    description: "Grabs a random yomomma joke.",
    usage: "",
    usageDelim: ""
};