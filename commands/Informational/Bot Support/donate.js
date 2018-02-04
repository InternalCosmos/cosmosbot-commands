exports.run = async (client, msg) => {
    var embed = new client.methods.Embed()
    .addField('Here is my Paypal to donate!', `[Click Here](https://www.paypal.me/InternalCosmos)`)
    .addField('Info', `The money donated will go into paying for a domain so I can make CosmosBot a website!!`)
    .setColor(client.funcs.hex(true));

    msg.channel.send('', {embed});
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
    name: 'donate',
    description: "Gives you the link to my PayPal :D",
    usage: "",
    usageDelim: ""
};
