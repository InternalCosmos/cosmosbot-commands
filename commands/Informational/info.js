exports.run = async (client, msg) => {
    const dateFormat = require('dateformat');
        dateFormat('dddd, mmmm dS, yyyy, h:MM:ss TT');
    const millisCreated = new Date().getTime() - client.user.createdAt.getTime();
    const daysCreated = millisCreated / 1000 / 60 / 60 / 24;
    const information = `CosmosBot is a WIP bot that will get updated as much as possible! Be sure to do \`${msg.guildSettings.prefix}help\` to find out if there are more commands added or you can join the server for CosmosBot! Do \`${msg.guildSettings.prefix}invite\` to get the server and bot invite! CosmosBot has been a bot user since \`${dateFormat(client.user.createdAt)} (That\'s ${daysCreated.toFixed(0)} days ago!)\``;

msg.channel.send(information);
};

exports.conf = {
    enabled: true,
    runIn: ['text','dm','group'],
    aliases: ["details", "what"],
    permLevel: 0,
    cooldown: 3,
    botPerms: [],
    requireFuncs: [],
    requiredSettings: []
};

exports.help = {
    name: 'info',
    description: "Provides some information about this bot.",
    usage: "",
    usageDelim: ""
};
