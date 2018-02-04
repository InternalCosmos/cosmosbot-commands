exports.run = async (client, msg) => {
    const request = require('request');
    const snekfetch = require('snekfetch');
    const dbotstoken = "censored";
    const votes = await snekfetch.get(`https://discordbots.org/api/bots/${client.user.id}/votes?onlyids=1`).set('Authorization', dbotstoken);
    var notUpvoter = new client.methods.Embed()
      .setAuthor(msg.author.tag, msg.author.avatarURL)
      .setURL(`https://discordbots.org/bot/${client.user.id}`)
      .setColor(client.funcs.hex(true))
      .addField("You haven\'t upvoted CosmosBot!", "My developers have made it so only upvoters can use nsfw commands!")
      .addField("Upvote Here:", `https://discordbots.org/bot/${client.user.id}`)
      .setFooter(`The main dev\, ${client.users.get('227110473466773504').tag} made the executive desision to do this!!`, client.users.get('227110473466773504').avatarURL);

    if (!votes.body.includes(msg.author.id)) {
    msg.channel.send({embed: notUpvoter});
    } else if (!msg.channel.nsfw) {
        return msg.channel.send("NSFW commands are NOT allowed in this channel! Please contact an admin if you think this is mistaken.");
    } else {
    const response = await request('https://nekos.life/api/lewd/neko', (e,r,b) => {
        var imageURL = JSON.parse(b).neko;
        var embed = new client.methods.Embed()
        .setImage(imageURL)
        .setColor(client.funcs.hex(true))
        .setTitle('Random Neko')
        .setURL(imageURL);
        msg.channel.send({embed});
      });
    }
};

exports.conf = {
    enabled: true,
    runIn: ['text','dm','group'],
    aliases: [],
    permLevel: 0,
    cooldown: 5,
    botPerms: [],
    requireFuncs: [],
    requiredSettings: []
};

exports.help = {
    name: 'lewd',
    description: "Sends a lewd neko image!",
    usage: "",
    usageDelim: ""
};
