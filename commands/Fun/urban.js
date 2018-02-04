exports.run = async (client, msg, args) => {
    const unirest = require ('unirest')
    unirest.get(`https://mashape-community-urban-dictionary.p.mashape.com/define?term=${args.join(' ')}`)
    .header("X-Mashape-Key", "censored")
    .header("Accept", "text/plain")
    .end(function (result, err) {
      if(!result.body.list[0]) return msg.reply('No definition found!')
      const embed = new client.methods.Embed()
      .setTitle(`Definition for ${args}`)
      .setURL(`https://www.urbandictionary.com/define.php?term=${args.join(' ')}`)
      .setDescription(`${result.body.list[0].definition}`)
      .addField(`Example`, `${result.body.list[0].example}`, false)
      .addField(":thumbsup: Upvotes:", result.body.list[0].thumbs_up, true)
      .addField(":thumbsdown: Downvotes:", result.body.list[0].thumbs_down, true)
      .setColor(client.funcs.hex(true))
      msg.channel.send({embed})
    })
};

exports.conf = {
    enabled: true,
    runIn: ['text','dm','group'],
    aliases: [],
    permLevel: 0,
    cooldown: 5,
    botPerms: [],
    requireFuncs: [],
    requiredSettings: []
};

exports.help = {
    name: 'urban',
    description: "Searches the Urban Dictionary library for a definition to the search term.",
    usage: "<search:str> [resultNum:int]",
    usageDelim: ", "
};
