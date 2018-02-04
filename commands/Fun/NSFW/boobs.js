const got = require('got');
const _ = require('lodash');
const snekfetch = require('snekfetch');
getBoobs = (callback) => {
  got('http://api.oboobs.ru/boobs/noise/' + _.random(100,10732)).then(res => {
    try {
      let length =  JSON.parse(res.body).length;
      callback(undefined, JSON.parse(res.body)[_.random(0,length)].preview);
    } catch (err) {
      callback(err);
    }
  }).catch(callback);
};
exports.run = async (client, msg) => {
const dbotstoken = "censored";
const votes = await snekfetch.get(`https://discordbots.org/api/bots/${client.user.id}/votes?onlyids=1`).set('Authorization', dbotstoken);
    var notUpvoter = new client.methods.Embed()
      .setAuthor(msg.author.tag, msg.author.avatarURL)
      .setURL(`https://discordbots.org/bot/${client.user.id}`)
      .setColor(client.funcs.hex(true))
      .addField("You haven\'t upvoted CosmosBot!", "My developers have made it so only upvoters can use nsfw commands!")
      .addField("Upvote Here:", `https://discordbots.org/bot/${client.user.id}`)
      .setFooter(`The main dev\, ${client.users.get('227110473466773504').tag} made the executive desision to do this!!`, client.users.get('227110473466773504').avatarURL);
    let emb = new client.methods.Embed().setColor(client.funcs.hex(true));
    if (!votes.body.includes(msg.author.id)) {
        msg.channel.send({embed: notUpvoter});
    } else if (msg.channel.nsfw) {
      return getBoobs((a,b)=>{
        b='http://media.oboobs.ru/'+b;
        emb.setImage(b);
        msg.channel.send(' ', {embed: emb});
      });
    } else {
      return msg.channel.send("NSFW commands are NOT allowed in this channel! Please contact an admin if you think this is mistaken.");
    }
};

exports.conf = {
    enabled: true,
    runIn: ['text'],
    aliases: ['boob', 'tits', 'tit'],
    permLevel: 0,
    cooldown: 5,
    botPerms: [],
    requireFuncs: [],
    requiredSettings: [],
    requiredModules: []
};

exports.help = {
    name: 'boobs',
    description: "Get a naughty boob pic!",
    usage: "",
    usageDelim: ""
};
