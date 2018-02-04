exports.run = async (client, msg) => {
    const jimp = require('jimp');
    var content = msg.content.split(' ').slice(1).join(' ');
      if (!content) {
        var content = "When I\'m not given something to nut to";
      }
      jimp.read('../CosmosBot//images//nut.jpg', (err, image) => {
        if (err) return console.log(err);
        var text = new jimp(630, 150, function(err, text) {
          if (err) return console.log(err);
          jimp.loadFont(jimp.FONT_SANS_32_BLACK).then(function(font) {
             text.print(font, 0, 0, content, 650);
             image.composite(text, 15, 5)
             image.getBuffer(jimp.AUTO, (err, buffer) => {
               if (err) return console.log(err);
               msg.channel.sendFile(buffer)
             })
          });
        });
      });
};

exports.conf = {
    enabled: true,
    runIn: ['text'],
    aliases: [],
    permLevel: 0,
    cooldown: 5,
    botPerms: [],
    requireFuncs: [],
    requiredSettings: [],
    requiredModules: []
};

exports.help = {
    name: 'nut',
    description: "Put text in the Nut meme.",
    usage: "",
    usageDelim: ""
};