exports.run = async (client, msg) => {
    const {get} = require("snekfetch");
    get("https://random.cat/meow").then(response => {
      var embed = new client.methods.Embed()
      .setImage(response.body.file)
      .setColor(client.funcs.hex(true))
      .setTitle('Random Cat')
      msg.channel.send({embed})
    });
};

exports.conf = {
    enabled: true,
    runIn: ['text','dm','group'],
    aliases: ['kitten', 'meow', 'kitty'],
    permLevel: 0,
    cooldown: 5,
    botPerms: [],
    requireFuncs: [],
    requiredSettings: [],
    requiredModules: []
};

exports.help = {
    name: 'cat',
    description: "Sends a random cat image.",
    usage: "",
    usageDelim: ""
};
