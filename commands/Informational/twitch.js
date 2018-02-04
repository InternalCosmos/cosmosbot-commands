const request = require('snekfetch')
const moment = require('moment')

const clientID = 'censored' // https://dev.twitch.tv/docs/v5/guides/authentication/

exports.run = async (client, msg, [twitchName]) => {
    try {
        const { body } = await request.get(`https://api.twitch.tv/kraken/channels/${twitchName}?client_id=${clientID}`)
        const creationDate = moment(body.created_at).format('DD-MM-YYYY')
        const embed = new client.methods.Embed()
          .setColor(6570406)
          .setThumbnail(body.logo)
          .setAuthor(body.display_name, 'https://i.imgur.com/OQwQ8z0.jpg', body.url)
          .addField('Account ID', body._id, true)
          .addField('Followers', body.followers, true)
          .addField('Created On', creationDate, true)
          .addField('Channel Views', body.views, true)
        return msg.channel.send({embed})
      } catch (e) {
        return msg.reply('Unable to find account. Did you spell it correctly?')
      }
};

exports.conf = {
    enabled: true,
    runIn: ['text','dm','group'],
    aliases: [],
    permLevel: 0,
    cooldown: 3,
    botPerms: [],
    requireFuncs: [],
    requiredSettings: [],
    requiredModules: []
};

exports.help = {
    name: 'twitch',
    description: "Returns information on the specified twitch.tv Account.",
    usage: "<name:str>",
    usageDelim: ""
};
