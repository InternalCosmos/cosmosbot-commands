const forIn = require('for-in');
const ms = require('ms');
const snekfetch = require('snekfetch');
const dbotstoken = "censored";
const servicestoken = "censored";
exports.run = async (client) => {

    client.user.setPresence({
              activity: {
                  name: 'you 😉 | +help for commands',
                  type: 3
              }
          });

  //Discord Bot List
  setInterval(() => {
            snekfetch.post(`https://discordbots.org/api/bots/${client.user.id}/stats`)
              .set('Authorization', dbotstoken)
              .send({ server_count: client.guilds.size })
              .then(() => console.log('Updated discordbots.org stats.'))
              .then(() => client.channels.get('channel id').send('Updated discordbots.org stats.'))
              .catch(err => console.error(`Whoops something went wrong:\n ${err.body}`));
            }, ms('30m') );

    //Discord Services
    setInterval(() => {
            snekfetch.post(`https://discord.services/api/bots/${client.user.id}`)
              .set('Authorization', servicestoken)
              .send({ server_count: client.guilds.size })
              .then(() => console.log('Updated discord.services stats.'))
              .then(() => client.channels.get('channel id').send('Updated discord.services stats.'))
              .catch(err => console.error(`Whoops something went wrong:\n ${err.body}`));
            }, ms('30m') );

    var embed = new client.methods.Embed()
      .setTitle("Bot On")
      .addField("Current Mem Usage", `${(process.memoryUsage().heapUsed / 1000 / 1000).toFixed(2)} MB`, true)
      .addField("Ping:", `${client.ping}ms`, true)
      .addField("Guild Count", client.guilds.size.toLocaleString(), true)
      .addField("User Count", client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString(), true)
      .addField("Commands", client.commands.size, true)
      .addField("Aliases", client.aliases.size, true);
    client.channels.get('channel id').send({embed});
};
