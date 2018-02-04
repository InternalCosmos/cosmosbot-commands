exports.run = async (client, msg) => {
    let args = msg.content.split(' ').splice(1).join(' ') || msg.author.discriminator;
    const res = client.users.filter(u => u.discriminator === `${args}`).map(u => u.username);
    var embed = new client.methods.Embed()
    if (res.length === 0) {
        embed.setTitle(`No users found with discrim ${args}`)
        .setColor(client.funcs.hex(true))
        msg.channel.send({embed})
    } else {
        embed.setTitle(`Users Found With Discrim ${args}`)
        .setDescription(`${res.join('\n')}`)
        .setColor(client.funcs.hex(true))
    msg.channel.send({embed})
      }
};

exports.conf = {
    enabled: true,
    runIn: ['text','dm','group'],
    aliases: [],
    permLevel: 0,
    cooldown: 3,
    botPerms: [],
    requireFuncs: [],
    requiredSettings: []
};

exports.help = {
    name: 'discrim',
    description: "Gives you all users the bot has access to and shows you the discord for them, used for discrim farming.",
    usage: "",
    usageDelim: ""
};