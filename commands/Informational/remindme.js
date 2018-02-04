const Sherlock = require('sherlockjs');
const moment = require('moment');
exports.run = async (client, msg) => {
    let embed = new client.methods.Embed()
    const s = Sherlock.parse(msg.content.split(' ').slice(1).join(' '));
    const relative = s.startDate.getTime() - Date.now();
    s.eventTitle = s.eventTitle.replace(/^me to ?|^me ?|^to ?/, '');
    msg.channel.send(`I will remind you to \`${s.eventTitle} ${moment().add(relative, 'ms').fromNow()}\`.`);
    setTimeout(() => {
      let final = `${s.eventTitle}`;
      embed.setAuthor("REMINDER")
      .setColor(client.funcs.hex(true))
      .setDescription(final)
      .addField('Guild Reminder Was Created In:', msg.guild.name)
      .addField('Channel Reminder Was Created In:', msg.channel.name)
      .setTimestamp()
      msg.author.send({embed})
    }, relative);
};

exports.conf = {
    enabled: true,
    runIn: ['text','dm','group'],
    aliases: ["remind"],
    permLevel: 0,
    cooldown: 5,
    botPerms: [],
    requireFuncs: [],
    requiredSettings: [],
    requiredModules: []
};

exports.help = {
    name: 'remindme',
    description: "Set something for the bot to remind you about!",
    usage: "",
    usageDelim: ""
};