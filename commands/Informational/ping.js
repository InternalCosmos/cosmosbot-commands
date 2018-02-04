exports.run = async (client, msg) => {
    const ping = ["Pong!", "Ping!", "Pung!", "Peng!", "Pang!", "Do people even look at this?", "Insert Clever And/Or Wity Phrase Here"]
    try {
      const message = await msg.channel.send("Ping?");
      await message.edit(`${ping[Math.floor(Math.random() * ping.length)]} : Roundtrip took: ${message.createdTimestamp - msg.createdTimestamp}ms. Heartbeat: ${Math.floor(client.ping)}ms.`);
    } catch (e) {
      client.funcs.log(e, "error");
    }
};

exports.conf = {
    enabled: true,
    runIn: ['text','dm','group'],
    aliases: [],
    permLevel: 0,
    cooldown: 3,
    botPerms: [],
    requireFuncs: [],
    requiredSettings: []
};

exports.help = {
    name: 'ping',
    description: "Pongs back how fast the bot is, for the nerds lol",
    usage: "",
    usageDelim: ""
};