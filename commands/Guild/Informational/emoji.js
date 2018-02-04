exports.run = async (client, msg, [type]) => {
    let emojis = msg.channel.guild.emojis.array(e => `:${e.name}:`).join(', ')
    var embed = new client.methods.Embed()
    if (!msg.guild.member(client.user).hasPermission("EMBED_LINKS")) {
      return msg.channel.send("`ERROR:` I do not have permission to send Embed, contact administrator to get permission to send embed.");
    }
    switch (type) {
      case "embed":
      embed.setAuthor(`${msg.guild.name} emoji list`)
      .setDescription(emojis)
      .setColor(client.funcs.hex(true))
      .setFooter(`There are ${msg.guild.emojis.filter(r => r.name).size} custom emojis in ${msg.guild.name}`)
      .setTimestamp()
      msg.channel.send({embed}).catch((err) => {msg.channel.send(`:warning: **An error occurred.**\n${err}`); console.log(err)});
      break;
      case "noembed":
      msg.channel.send(`**${msg.guild.name} emoji list**\n${emojis}\n\n__There are ${msg.guild.emojis.filter(r => r.name).size} custom emojis in ${msg.guild.name}__`)
      break;
    }
};

exports.conf = {
    enabled: true,
    runIn: ['text'],
    aliases: ['e', 'emojis', 'emote', 'emotes'],
    permLevel: 0,
    cooldown: 5,
    botPerms: [],
    requireFuncs: [],
    requiredSettings: []
};

exports.help = {
    name: 'emoji',
    description: "Show all the custom emojis on the server.",
    usage: "<embed|noembed>",
    usageDelim: "|"
};