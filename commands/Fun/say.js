exports.run = async (client, msg) => {
    msg.delete();
    let said = msg.content.split(' ').slice(1).join(' ');
    if (!said) return msg.reply("I cannot send an empty message! Please give me something to say!");
    if (msg.content.includes('@everyone') || msg.content.includes('@here')) return msg.reply("Do not try to mention everyone or here with this bot.");
    if (msg.content.includes("nigger") || msg.content.includes("niggers") || msg.content.includes("cancer") || msg.content.includes("cancerous") || msg.content.includes("cracker") || msg.content.includes("crackers") || msg.content.includes("faggot") || msg.content.includes("faggots") || msg.content.includes("gay") || msg.content.includes("gays")) return msg.reply("You said something that contains a word in the blacklist.");
    if (msg.author.id === '227110473466773504' || msg.author.id === '299665456657072129' || msg.author.id === '254359591788347392' || msg.author.id === '195223544186142727') {
      msg.channel.send(said);
    } else {
      msg.channel.send(said + `\nsent by ${msg.author.tag} (${msg.author.id})`);
      }
};

exports.conf = {
    enabled: true,
    runIn: ['text','dm','group'],
    aliases: ['repeat'],
    permLevel: 0,
    cooldown: 3,
    botPerms: [],
    requireFuncs: [],
    requiredSettings: []
};

exports.help = {
    name: 'say',
    description: "Makes the bot repeat whatever you want! [to an extent]",
    usage: "",
    usageDelim: ""
};
