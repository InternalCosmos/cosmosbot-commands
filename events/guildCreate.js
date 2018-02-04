exports.run = async (client, guild) => {

      client.settings.guilds.create(guild);

      var h = 0;
      var b = 0;


      guild.members.forEach(m => {
        if (m.user.bot) {
          b = b + 1;
        } else if (!m.user.bot) {
          h = h + 1;
        }

      });
      if (!guild.available) return;

      if (guild.owner.id == '303921883043332096') {
          guild.owner.send('Your bot farm is so cool that I added a line in my guild create event to leave every guild you ever make. You earned this buddy! :heart:');
          await guild.leave();
          return;
      }

      let members = guild.memberCount;
      let percent = Math.floor(b / h * 10000) / 100;

      var embed = new client.methods.Embed();
      var moment = require('moment');
      embed.setAuthor('New Guild Added')
          .addField("Guild Name", `${guild.name}`, true)
          .addField("Guild ID", `${guild.id}`, true)
          .setThumbnail(guild.iconURL())
          .setColor("#00ff0e")
          .setTimestamp()
          .addField("Owner Tag", `${guild.owner.user.tag}`, true)
          .addField("Owner ID", `${guild.owner.id}`, true)
          .addField('Humans : Bots',`${h} : ${b}`, true)
          .addField("Percentage:", `${percent}%`, true)
          .addField("New Guild Amount", client.guilds.size);
      client.channels.get("channe id").send(
          '', {
              disableEveryone: true,
              embed: embed
          }

      );

    // DiscordBots
    if (guild.id === '110373943822540800') return;
    // DiscordBots List
    if (guild.id === '264445053596991498') return;
      if (percent >= "80") {
        guild.forceLeave = true;
        var embed = new client.methods.Embed();
      embed.setAuthor('BotFarm Automatically Removed')
            .addField("Guild Name", `${guild.name}`, true)
            .addField("Guild ID", `${guild.id}`, true)
            .setThumbnail(guild.iconURL())
            .setColor("#E71515")
            .setTimestamp()
            // .addBlankField()
            .addField("Owner Tag", `${guild.owner.user.tag}`, true)
            .addField("Owner ID", `${guild.owner.id}`, true)
            .addField('Humans : Bots',`${h} : ${b}`,false)
            .addField("New Guild Amount", client.guilds.size);
        client.channels.get("channel id").send(
            '', {
                disableEveryone: true,
                embed: embed
            });

        guild.owner.send(`This bot has left this guild automatically because the bot to human ratio is more than 80%. Current Percentage: ${percent}%`).then(guild.leave());
      }

    };

    function users(guild) {
      var h = 0
      var b = 0


      guild.members.forEach(m => {
        if (m.user.bot) {
          b = b + 1
        } else if (!m.user.bot) {
          h = h + 1
        }
        return [h, b]
      })
    }
