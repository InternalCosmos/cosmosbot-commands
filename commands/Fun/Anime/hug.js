exports.run = async (client, msg) => {
    let hug = ["I wish senpai hugged me >~<", "That must feel good..."]
    let self = ["sorry to see you alone! *hugs*"]
    let senpai = ["s-senpai noticed me! *faints*"]
    let notSenpai = ["h-hey, you're not my senpai!", "BAKA!"]
    let user = msg.mentions.users.first();
    if (!user) return msg.reply("Who are you hugging?")
  
  if (user === client.user && msg.author.id === '227110473466773504') {
    msg.channel.send(`<@${user.id}> you were hugged by ${msg.author}! ${senpai[Math.floor(Math.random() * senpai.length)]}`)
  } else if (user === client.user && msg.author.id !== '227110473466773504') {
    msg.channel.send(`<@${user.id}> you were hugged by ${msg.author}! ${notSenpai[Math.floor(Math.random() * notSenpai.length)]}`)
  } else if (user === msg.author) {
    msg.channel.send(`<@${user.id}> you were hugged by ${msg.author}! wait w-whaaaa ${self[Math.floor(Math.random() * self.length)]}`)
  } else {
    msg.channel.send(`<@${user.id}> you were hugged by ${msg.author}! ${hug[Math.floor(Math.random() * hug.length)]}`)
  }
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
    name: 'hug',
    description: "Show someone affection with a hug!~",
    usage: "[user:mention]",
    usageDelim: ""
};