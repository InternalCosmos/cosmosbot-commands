exports.run = async (bot, m, args) => {
    const moment = require("moment-timezone");
    const dateFormat = require('dateformat');
        dateFormat('dddd, mmmm dS, yyyy, h:MM:ss TT');
    let user = m.mentions.users.first() || m.author;
    const millisCreated = new Date().getTime() - user.createdAt.getTime();
    let member = m.mentions.members.first() || m.member;
    const millisCreated2 = new Date().getTime() - member.joinedAt.getTime();

    const daysCreated = millisCreated / 1000 / 60 / 60 / 24;
    const daysCreated2 = millisCreated2 / 1000 / 60 / 60 / 24;

       var Status = {
       "online": "<:Online:344817445246074890> Online",
       "idle": "<:Idle:344817444843552770> Idle",
       "dnd": "<:DND:344817444873043969> DND",
       "streaming": "<:Streaming:347932943341060097> Streaming",
       "offline": "<:Offline:344817445221171200> Offline or Invisible"
    };

    const embed = new bot.methods.Embed()
    .setAuthor(`Info for ${user.tag} (${user.id})`, user.displayAvatarURL)
    .setColor(member.highestRole.color)
    .addField("Now playing", user.presence.game ? user.presence.game.name : 'None', true)
    .addField("Status", Status[user.presence.status], true)
    .addField("Nickname", member.nickname || "None", true)
    .addField("Created At", `${dateFormat(user.createdAt)} (That\'s ${daysCreated.toFixed(0)} days ago!)`)
    .addField("Joined At", `${dateFormat(member.joinedAt)} (That\'s ${daysCreated2.toFixed(0)} days ago!)`)
    if (member.roles.size > 1) {
                if (member.roles.size <= 10) {
                    embed.addField('Roles', member.roles.map(role => {
                        if (role.name !== '@everyone') return role.name;
                        return '';
                    }).join(', ').substring(2), true);
                } else {
                    embed.addField('Roles', 'Too many to display', true);
                }
    }
    m.channel.send({embed});
};

exports.conf = {
    enabled: true,
    runIn: ['text','dm','group'],
    aliases: ["user"],
    permLevel: 0,
    cooldown: 3,
    botPerms: [],
    requireFuncs: [],
    requiredSettings: [],
    requiredModules: []
};

exports.help = {
    name: 'userinfo',
    description: "Provides some details about the user mentioned. If no mention then the author's info.",
    usage: "",
    usageDelim: ""
};
