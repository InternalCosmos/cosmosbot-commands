exports.run = async (client, msg) => {
    let random = ["I wish senpai kissed me >~<", "That must feel good..."]
    let user = msg.mentions.users.first();
  
  msg.channel.send(`<@${user.id}> you were kissed by ${msg.author}! ${random[Math.floor(Math.random() * random.length)]}`)
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
    name: 'kiss',
    description: "Show someone affection with a kiss!~",
    usage: "[user:mention]",
    usageDelim: ""
};