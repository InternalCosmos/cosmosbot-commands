exports.run = async (client, msg) => {
  var nitro = '';
  msg.guild.members.map(usr => {
    if (usr.avatar != null) {
      if (usr.avatar.startsWith("a_")) {
        nitro += usr.mention + "\n";
      }
    }
  });

  var nitro = new client.methods.Embed()
  .setAuthor("Nitro Users", "http://i.imgur.com/H5CwSY2.png")
  .setDescription("The following users on this guild have nitro:\n\n" + nitro)
  .setColor(client.funcs.hex(true))
  .setThumbnail("http://i.imgur.com/Ls5pRMF.png")


  msg.channel.send({embed: nitro})
};

exports.conf = {
    enabled: true,
    runIn: ['text','dm','group'],
    aliases: ['nitrousers', 'nitro_users'],
    permLevel: 0,
    cooldown: 3,
    botPerms: [],
    requireFuncs: [],
    requiredSettings: []
};

exports.help = {
    name: 'nitro',
    description: "Find all of the nitro users in the server.",
    usage: "",
    usageDelim: ""
};
