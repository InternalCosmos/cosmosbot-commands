exports.run = async (client, msg, [num]) => {
    const suits = ['♠️', '♦', '♥️', '♠️']
    const ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
    const numCards = num
      const lines = []

      for (let i = 0; i < numCards; ++i) {
        lines.push(`**${ranks[Math.floor(Math.random() * ranks.length)]}**${suits[Math.floor(Math.random() * suits.length)]}`)
      }

      return msg.channel.send(lines.join(', '))
};

exports.conf = {
    enabled: true,
    runIn: ['text','dm','group'],
    aliases: ['cards'],
    permLevel: 0,
    cooldown: 3,
    botPerms: [],
    requireFuncs: [],
    requiredSettings: [],
    requiredModules: []
};

exports.help = {
    name: 'card',
    description: "Draws some random cards from a deck.",
    usage: "<num:int{1,10}>",
    usageDelim: ""
};
