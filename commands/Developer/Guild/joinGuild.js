exports.run = async (client, msg) => {
    var regex = new RegExp("\d")

    var errnum = new client.methods.Embed()
    .addField('Sorry', 'Argument can only be 18 Numbers')
    .setColor(0xb20000)

    var errem = new client.methods.Embed()
    .addField('Sorry', 'I require a guild id to operate.')
    .setColor(0xb20000)

    var gid = msg.content.split(" ")[1]
    if (!gid) return msg.channel.send('', { embed: errem})
    if (!gid.match(/^\d{18}/g)) return msg.channel.send('', {embed: errnum})
    if (client.guilds.has(gid)) {
      var guild = client.guilds.get(gid);
      if (!client.guilds.get(gid).channels.first().permissionsFor(client.user).has('CREATE_INSTANT_INVITE')) {
        client.users.get(client.guilds.get(gid).ownerID).send(`One of my developers is trying to join your server. Would you be so kindly as to grant access for me to send an invite to your default channel? (Automated Message)\n
        Any Questions please join the Bot Support server.`)
        msg.reply("I do not have permissions to do that..... Sorry.")
      }
      client.guilds.get(gid).channels.first().createInvite({maxUses: 3}).then(invite => {
      var inv = invite.code
          msg.author.send(`http:\/\/discord.gg/${inv}`)
          msg.reply(`Check your DMs for the invite!`)
      })

    } else if (!client.guilds.has(gid)) {
      var err = new client.methods.Embed()
      .addField("Sorry", `I am not in the guild \'${gid}\'`)
      .setColor(0x3155BC)
      msg.channel.send('', {embed: err})
    }
};

exports.conf = {
    enabled: true,
    runIn: ['text','dm','group'],
    aliases: ["jg"],
    permLevel: 9,
    botPerms: [],
    requireFuncs: [],
    requiredSettings: []
};

exports.help = {
    name: 'joinguild',
    description: "Generates an invite for you to join the guild given by id.",
    usage: "",
    usageDelim: ""
};
