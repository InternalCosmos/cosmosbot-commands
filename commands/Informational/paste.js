exports.run = async (client, msg, [args]) => {
  var request = require('request')
  const rp = require('request-promise');
  let options = {
      method: "POST",
      uri: "https://feed-the-wump.us/documents",
      body: args,
      json: false
  };
  const snekfetch = require('snekfetch');
  const dbotstoken = "censored";
  const votes = await snekfetch.get(`https://discordbots.org/api/bots/${client.user.id}/votes?onlyids=1`).set('Authorization', dbotstoken);
  var notUpvoter = new client.methods.Embed()
    .setAuthor(msg.author.tag, msg.author.avatarURL)
    .setThumbnail(client.guilds.get('264445053596991498').iconURL())
    .setURL(`https://discordbots.org/bot/${client.user.id}`)
    .setColor(client.funcs.hex(true))
    .addField("You haven\'t upvoted CosmosBot!", "My developers have made it so only upvoters can use paste!")
    .addField("Upvote Here:", `https://discordbots.org/bot/${client.user.id}`)
    .setFooter(`The main dev\, ${client.users.get('227110473466773504').tag} made the executive desision to do this!!`, client.users.get('227110473466773504').avatarURL);
    if (!votes.body.includes(msg.author.id)) {
    msg.channel.send({embed: notUpvoter});
  } else {
      rp(options).then(data => {
          msg.delete()
          msg.channel.send(`Here\'s your hastebin document!\nhttps://feed-the-wump.us/${JSON.parse(data).key}`);
      });
  }

};

exports.conf = {
    enabled: true,
    runIn: ['text','dm','group'],
    aliases: ['hastebin'],
    permLevel: 0,
    cooldown: 30,
    botPerms: [],
    requireFuncs: [],
    requiredSettings: []
};

exports.help = {
    name: 'paste',
    description: "Paste your args into a hastebin document.",
    usage: "<args:str>",
    usageDelim: ""
};
