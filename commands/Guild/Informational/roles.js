exports.run = async (client, msg, [type]) => {
    let roles = msg.guild.roles.array().join(' | ');
    let roles1 = msg.guild.roles.map(r => r.name).join(', ')
    var embed = new client.methods.Embed()
    if (!msg.guild.member(client.user).hasPermission("EMBED_LINKS")) {
      return msg.channel.send("`ERROR:` I do not have permission to send Embed, contact administrator to get permission to send embed.");
    }
    switch (type) {
      case "pc":
      embed.setAuthor(`${msg.guild.name} Roles`)
      .setDescription(roles)
      .setColor(client.funcs.hex(true))
      .setFooter(`There are ${msg.guild.roles.filter(r => r.name).size} roles in ${msg.guild.name}`)
      msg.channel.send('', {embed}).catch((err) => {msg.channel.send(`:warning: **An error occurred.**\n${err}`); console.log(err)});
      break;
      case "mobile":
      embed.setAuthor(`${msg.guild.name} Roles`)
      .setDescription(roles1)
      .setColor(client.funcs.hex(true))
      .setFooter(`There are ${msg.guild.roles.filter(r => r.name).size} roles in ${msg.guild.name}`)
      msg.channel.send('', {embed}).catch((err) => {msg.channel.send(`:warning: **An error occurred.**\n${err}`); console.log(err)});
      break;
      default:
      msg.channe.reply("Please do one of the following choices: \`pc\` or \`mobile\`")
    }
  
  };

  exports.conf = {
    enabled: true,
    runIn: ['text'],
    aliases: ['r'],
    permLevel: 0,
    cooldown: 5,
    botPerms: [],
    requireFuncs: [],
    requiredSettings: []
};

exports.help = {
    name: 'roles',
    description: "Show all the roles on the server.",
    usage: "<pc|mobile>",
    usageDelim: "|"
};