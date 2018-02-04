var Discord = require('discord.js');
const moment = require("moment");
require("moment-duration-format");
exports.run = async(client, msg) => {
    let large = (() => {
    var x = 0;
    for (guild of client.guilds.array()) {
        if (guild.large)
            x++;
    }
    return x;
    })()
    let small = (() => {
    var x =0;
    for (guild of client.guilds.array()) {
    	if (!guild.large)
    		x++;
    }
    return x;
    })()
  const duration = moment.duration(client.uptime).format(" D [days], H [hrs], m [mins], s [secs]");
  var embed = new client.methods.Embed()

  .addField('<:Online:344817445246074890> Mem Usage', `${(process.memoryUsage().heapUsed / 1000 / 1000).toFixed(2)} MB`, true)
  .addField('<:Online:344817445246074890> Uptime', `${duration}`, true)
  .addField('<:Online:344817445246074890> Pingtime', `${client.ping}ms`, true)
  .addField('<:Online:344817445246074890> Users', `${client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString()} users`, true)
  .addField('<:Online:344817445246074890> Servers', `${client.guilds.size.toLocaleString()} servers`, true)
  .addField('<:Online:344817445246074890> Channels', `${client.channels.size.toLocaleString()} channels`, true)
  .addField('<:Online:344817445246074890> Large Servers (Over 200 members)', large, true)
  .addField('<:Online:344817445246074890> Small Servers (Under 200 members)', small, true)
  .addField('<:Online:344817445246074890> Discord.js', `${Discord.version}`, true)
  .addField('<:Online:344817445246074890> Commands', `${client.commands.size}`, true)
  .addField('<:Online:344817445246074890> Aliases', `${client.aliases.size}`, true)
.setColor(client.funcs.hex(true));
msg.channel.send('', {embed});

};

exports.conf = {
  enabled: true,
  runIn: ["text", "dm", "group"],
  aliases: [],
  permLevel: 0,
  cooldown: 3,
  botPerms: [],
  requiredFuncs: [],
};

exports.help = {
  name: "stats",
  description: "Provides some details about the bot and stats.",
  usage: "",
  usageDelim: "",
  category: "",
  subcategory: ""
};
