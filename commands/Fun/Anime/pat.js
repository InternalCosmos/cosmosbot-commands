exports.run = async (client, msg) => {
    let random = ["I wish senpai would pat me >~<", "That must feel good..."]
    let user = msg.mentions.users.first();
  
  msg.channel.send(`<@${user.id}> you were patted by ${msg.author}! ${random[Math.floor(Math.random() * random.length)]}`)
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
    name: 'pat',
    description: "I wish Senpai would pat me! >~<",
    usage: "",
    usageDelim: ""
};