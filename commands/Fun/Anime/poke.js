exports.run = async (client, msg) => {
    let random = ["boop!", "You has been poked!"]
    let user = msg.mentions.users.first();
  
  msg.channel.send(`<@${user.id}> you were poked by ${msg.author}! ${random[Math.floor(Math.random() * random.length)]}`)
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
    requiredModules: []
};

exports.help = {
    name: 'poke',
    description: "I like poking people! *pokes*",
    usage: "",
    usageDelim: ""
};