exports.run = async (client, msg, [type]) => {
  let text = msg.guild.channels.filter(c => c.type === "text").map(c => c.name).join('\n');
  let voice = msg.guild.channels.filter(c => c.type === "voice").map(c => c.name).join('\n');
  let embed = new client.methods.Embed()
  if (!msg.guild.member(client.user).hasPermission("EMBED_LINKS")) {
    return msg.channel.send("`ERROR:` I do not have permission to send Embed, contact administrator to get permission to send embed.");
  }
  switch (type) {
    case "list":
    embed.setAuthor(`${msg.guild.name} channels`)
    .addField("Text Channels", text, true)
    .addField("Voice Channels", voice, true)
    .setColor(client.funcs.hex(true))
    .setFooter(`There are ${msg.guild.channels.filter(r => r.name).size} channels in ${msg.guild.name}`)
    msg.channel.send('', {embed});
    break;
  }
};

exports.conf = {
    enabled: true,
    runIn: ['text'],
    aliases: ['channels'],
    permLevel: 0,
    cooldown: 3,
    botPerms: [],
    requireFuncs: [],
    requiredSettings: []
};

exports.help = {
    name: 'channel',
    description: "Show all the channels on the server.",
    usage: "<list:str>",
    usageDelim: ""
};
