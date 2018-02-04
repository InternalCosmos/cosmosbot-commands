exports.run = async (client, msg) => {
    let random = ["h-hey, take it elsewhere!", "That must feel good... I mean w-what! >~<"]
    let user = msg.mentions.users.first();
  
  msg.channel.send(`<@${user.id}> you were *lewded* by ${msg.author}! ${random[Math.floor(Math.random() * random.length)]}`)
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
    name: 'lewd',
    description: "H-hey! T-that's naughty!",
    usage: "",
    usageDelim: ""
};