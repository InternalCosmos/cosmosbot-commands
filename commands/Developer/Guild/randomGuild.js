exports.run = async (client, msg) => {
    var array = client.guilds.array()
    var guild = array[Math.floor(Math.random() * array.length)]
    var oUser = client.users.get(guild.ownerID)
    var oMember = guild.member(oUser)
    var oID = guild.ownerID
    var h = 0
    var b = 0
    var thumbnail = guild.iconURL ? guild.iconURL : client.user.avatarURL
    var thumbType = guild.iconURL ? 'Guild icon' : 'Bot Avatar (Guild icon not present)'
    guild.members.forEach(m => {
      if (m.user.bot) {
        b = b + 1
      } else if (!m.user.bot) {
        h = h + 1
      }
    })
    let members = guild.memberCount;
    let percent = Math.floor(b / members * 10000) / 100;
  
    var embed = new client.methods.Embed()
    .setTitle(guild.name)
    .addField('Guild ID', guild.id, true)
    .addField('Channel Count', guild.channels.size, true)
    .addField('Guild Owner', oUser.tag + ' \(' + oID + '\)')
    .addField('Humans', h, true)
    .addField('Bots', b, true)
    .addField('Percentage', `${percent}%`, true)
    .setColor(client.funcs.hex())
    .setThumbnail(thumbnail)
    .setFooter(thumbType)
  
    msg.channel.send({embed})
};

exports.conf = {
    enabled: true,
    runIn: ['text','dm','group'],
    aliases: ["rg"],
    permLevel: 9,
    botPerms: [],
    requireFuncs: [],
    requiredSettings: []
};

exports.help = {
    name: 'randomguild',
    description: "Returns a random guild's information.",
    usage: "",
    usageDelim: ""
};