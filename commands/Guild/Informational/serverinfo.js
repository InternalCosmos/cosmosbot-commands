exports.run = async (client, msg) => {
    const dateFormat = require('dateformat');
    dateFormat('dddd, mmmm dS, yyyy, h:MM:ss TT');
    let roles = msg.guild.roles.array().join(' | ');
    let guild = msg.guild;
    const millisCreated = new Date().getTime() - guild.createdAt.getTime();
    const daysCreated = millisCreated / 1000 / 60 / 60 / 24;
  
    var h = 0
    var b = 0
  
  
    msg.guild.members.forEach(m => {
      if (m.user.bot) {
        b = b + 1
      } else if (!m.user.bot) {
        h = h + 1
      }
  
    })
  
    var Level = {
      "0": `${guild.verificationLevel}` + " | None | Unrestricted.",
      "1": `${guild.verificationLevel}` + " | Low | Must have a verified email on their Discord account.",
      "2": `${guild.verificationLevel}` + " | Medium | Must be registered on Discord for longer than 5 minutes.",
      "3": `${guild.verificationLevel}` + " | \(\╯\°\□\°\）\╯\︵ \┻\━\┻ | Must also be a member of this server for longer than 10 minutes.",
      "4": `${guild.verificationLevel}` + " | \┻\━\┻ \ﾐ\ヽ\(\ಠ\益\ಠ\)\ノ\彡\┻\━\┻ | Must have a verified phone on their Discord account."
    }
  
  const embed = new client.methods.Embed()
    .setColor(client.funcs.hex(true))
    .setAuthor(`${guild.name} [${guild.id}]`, guild.iconURL)
    .addField('<:Owner:349521407580962816> Server Owner', guild.owner.displayName)
    .addField('<:Users:349685541756731395> Users:', h, true)
    .addField('<:Bot:349521935652356097> Bots:', b, true)
    .addField('<:Members:349677435299692544> Total Members:', msg.guild.memberCount, true)
    .addField('Channels', `${guild.channels.size} Total\n${guild.channels.filter(c=>c.type === "text").size} Text | ${guild.channels.filter(c=>c.type === "voice").size} Voice`)
    .addField('Emojis', `${guild.emojis.size} \nDo ${msg.guildSettings.prefix}emojis to get the full list!` || `No Emojis`, true)
    if (guild.roles.size > 1) {
                if (guild.roles.size <= 10) {
                    embed.addField('Roles', guild.roles.map(role => {
                        if (role.name !== '@everyone') return role.name;
                        return '';
                    }).join(', ').substring(2), true);
                } else {
                    embed.addField('Roles', 'Too many to display', true);
                }
    }
    embed.addField('Verification Level', Level[guild.verificationLevel])
    .addField('Region', guild.region)
    .addField("Created On", `${dateFormat(guild.createdAt)} (That\'s ${daysCreated.toFixed(0)} days ago!)`);
  
    msg.channel.send({embed})
};

exports.conf = {
    enabled: true,
    runIn: ['text'],
    aliases: ['sinfo', 'server'],
    permLevel: 0,
    cooldown: 5,
    botPerms: [],
    requireFuncs: [],
    requiredSettings: []
};

exports.help = {
    name: 'serverinfo',
    description: "Provides some details about the server.",
    usage: "",
    usageDelim: ""
};