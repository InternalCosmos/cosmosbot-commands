exports.run = async (client, msg) => {
    var invite = new client.methods.Embed()
    .addField('CosmosBot Invite:', `[Click here to invite me](https://discordapp.com/oauth2/authorize?client_id=337514740970553354&scope=bot&permissions=2146958463)`)
    .addField('CosmosBot Server:', `[Click here to go to my server](https://discord.gg/ayKygcK)`)
    .setColor(client.funcs.hex(true));

    msg.channel.send( {embed: invite})
};

exports.conf = {
    enabled: true,
    runIn: ['text','dm','group'],
    aliases: ["inv"],
    permLevel: 0,
    cooldown: 3,
    botPerms: [],
    requireFuncs: [],
    requiredSettings: []
};

exports.help = {
    name: 'invite',
    description: "Gives the invite link to the bot and to the support server.",
    usage: "",
    usageDelim: ""
};