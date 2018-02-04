exports.run = async (client, msg) => {
    const request = require('request')
    const response = await request('https://nekos.life/api/neko', (e,r,b) => {
        var imageURL = JSON.parse(b).neko
        var embed = new client.methods.Embed()
        .setImage(imageURL)
        .setColor(client.funcs.hex(true))
        .setTitle('Random Neko')
        .setURL(imageURL)
        msg.channel.send({embed});
      })
};

exports.conf = {
    enabled: true,
    runIn: ['text','dm','group'],
    aliases: ['nyaa'],
    permLevel: 0,
    cooldown: 5,
    botPerms: [],
    requireFuncs: [],
    requiredSettings: []
};

exports.help = {
    name: 'neko',
    description: "Sends a random pic of a neko!",
    usage: "",
    usageDelim: ""
};