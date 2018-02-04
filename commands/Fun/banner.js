const figletAsync = require('util').promisify(require('figlet'));

exports.run = async (client, msg, [banner]) => {
  if (!banner) return msg.reply("Please give me something to say!");
  if (banner.length > '15') return msg.reply("Please do something with less characters. [15 or less]");
  const data = await figletAsync(banner);
  return msg.channel.send(data, { code: true });
};

exports.conf = {
    enabled: true,
    runIn: ['text','dm','group'],
    aliases: ['ascii'],
    permLevel: 0,
    cooldown: 3,
    botPerms: [],
    requireFuncs: [],
    requiredSettings: [],
    requiredModules: ['figlet']
};

exports.help = {
    name: 'banner',
    description: "Creates an ASCII banner from the string provided.",
    usage: "<banner:str>",
    usageDelim: ''
};
