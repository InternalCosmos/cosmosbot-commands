exports.run = async (client, msg, args) => {
    const dateFormat = require('dateformat');
    dateFormat('dddd, mmmm dS, yyyy, h:MM:ss TT');
var ch;
  if (msg.mentions.channels.first() !== undefined) {
    ch = msg.mentions.channels.first();
  } else {
    ch = msg.channel;
  }
  const millisCreated = new Date().getTime() - ch.createdAt.getTime();
  const daysCreated = millisCreated / 1000 / 60 / 60 / 24;

  const embed = new client.methods.Embed()
    .setTitle(ch.name)
    .setDescription(ch.topic)
    .setColor(4447003)
    .setFooter(`Type \'${msg.guildSettings.prefix}channel list\' to get a full list of channels for ${ch.guild.name}!`)
    .addField("Channel ID", ch.id)
    .addField("Created At", `${dateFormat(ch.createdAt)} That\'s ${daysCreated.toFixed(0)} days ago!`)
    .addField("Users", ch.members.size);
  msg.channel.send({embed});
};

exports.conf = {
    enabled: true,
    runIn: ['text'],
    aliases: ['cinfo'],
    permLevel: 0,
    cooldown: 3,
    botPerms: [],
    requireFuncs: [],
    requiredSettings: []
};

exports.help = {
    name: 'channelinfo',
    description: "Provides some details about the channel.",
    usage: "",
    usageDelim: ""
};