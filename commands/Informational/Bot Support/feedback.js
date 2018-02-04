exports.run = async (client, msg) => {
  const snekfetch = require('snekfetch');
  const dbotstoken = "censored";
  const votes = await snekfetch.get(`https://discordbots.org/api/bots/${client.user.id}/votes?onlyids=1`).set('Authorization', dbotstoken);
  const ms = require('ms');
  var channel = client.channels.get('channel id');
  var feedback = msg.content.split(' ').slice(1).join(' ');
  if (!feedback) return msg.channel.send(`I require feedback. Please say something about me :D`);
  var feedback = new client.methods.Embed()
    .setTitle(msg.author.tag + ' suggested:')
    .setColor(client.funcs.hex(true))
    .setThumbnail(msg.author.avatarURL)
    .setDescription(feedback)
    .addField('User\'s ID:', `${msg.author.id}`)
    .addField('Server:', `${msg.guild.name} [${msg.guild.id}]`, true)
    .addField('Channel:', `${msg.channel.name} [${msg.channel.id}]`, true);
  var notUpvoter = new client.methods.Embed()
    .setAuthor(msg.author.tag, msg.author.avatarURL)
    .setURL('https://discordbots.org/bot/337514740970553354')
    .setColor(client.funcs.hex(true))
    .addField("You haven\'t upvoted CosmosBot!", "My developers have made it so only upvoters can use feedback!")
    .addField("Upvote Here:", "https://discordbots.org/bot/337514740970553354")
    .setFooter(`The main dev\, ${client.users.get('227110473466773504').tag} made the executive desision to do this!!`, client.users.get('227110473466773504').avatarURL);

  if (!votes.body.includes(msg.author.id)) {
    msg.channel.send({embed: notUpvoter});
  } else {
    channel.send({embed: feedback}).then(msg.channel.send("Thank you for your Feedback!"));
  }
};

exports.conf = {
    enabled: true,
    runIn: ['text','dm','group'],
    aliases: [],
    permLevel: 0,
    cooldown: 10,
    botPerms: [],
    requireFuncs: [],
    requiredSettings: []
};

exports.help = {
    name: 'feedback',
    description: "You can give the devs your feedback on the bot! And suggest new things for it! [upvoter only]",
    usage: "",
    usageDelim: ""
};
