exports.run = async (client, msg) => {
    const request = require('request')
    const response = await request('https://nekos.life/api/lizard', (e,r,b) => {
        var imageURL = JSON.parse(b).url
        var embed = new client.methods.Embed()
        .setImage(imageURL)
        .setColor(client.funcs.hex(true))
        .setTitle('Random Lizard')
        .setURL(imageURL)
        msg.channel.send({embed});
      })
};

exports.conf = {
    enabled: true,
    runIn: ['text','dm','group'],
    aliases: [],
    permLevel: 0,
    cooldown: 5,
    botPerms: [],
    requireFuncs: [],
    requiredSettings: []
};

exports.help = {
    name: 'lizard',
    description: "Sends a random pic of a lizard!",
    usage: "",
    usageDelim: ""
};
