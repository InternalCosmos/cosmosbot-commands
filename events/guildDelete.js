exports.run = async (client, guild) => {
    client.settings.guilds.destroy(guild);
    if (guild.forceLeave) return;
    var embed = new client.methods.Embed();
    var moment = require('moment');
    embed.setAuthor('Guild Left / Kicked')
        .addField("Guild Name", `${guild.name}`, true)
        .addField("Guild ID", `${guild.id}`, true)
        .setThumbnail(guild.iconURL())
        .setColor("#E71515")
        .setTimestamp()
        .addField("Owner Name", `${guild.owner.user.username}`, true)
        .addField("Owner ID", `${guild.owner.id}`, true);
    client.channels.get("channel id").send(
        '', {
            embed: embed,
            disableEveryone: true
        }

    );

  };
