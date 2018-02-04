exports.run = async (client, msg) => {
    const request = require('request');
    const response = await request('https://random.dog/woof.json', (e,r,b) => {
        var imageURL = JSON.parse(b).url
        var embed = new client.methods.Embed()
        .setImage(imageURL)
        .setColor(client.funcs.hex(true))
        .setTitle('Random Dog')
        msg.channel.send({embed})
      })
};

exports.conf = {
    enabled: true,
    runIn: ['text','dm','group'],
    aliases: ['bork', 'doggo', 'puppy', 'pupper'],
    permLevel: 0,
    cooldown: 5,
    botPerms: [],
    requireFuncs: [],
    requiredSettings: [],
    requiredModules: []
};

exports.help = {
    name: 'dog',
    description: "Sends a random dog image. [the api sucks so it may not work 100% of the time]",
    usage: "",
    usageDelim: ""
};