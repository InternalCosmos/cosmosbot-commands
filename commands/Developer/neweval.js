/*
 * Created by Tom on 7/29/2017.
 * Edited by InternalCosmos on 11/29/17.
*/
exports.run = async (client, msg, [args]) => {
  function clean(text) {
    if (typeof text === "string") {
      return text
        .replace(/`/g, "`" + String.fromCharCode(8203))
        .replace(/@/g, "@" + String.fromCharCode(8203));
    } else {
      return text;
    }
  }
    try {
        const code = args;
        let cb = "```";
        let evaled = await eval(code);
        if (typeof evaled !== "string")
            evaled = require("util").inspect(evaled);
            evaled = evaled.replace(client.token, "👀 Not for your eyes 👀");
        snekfetch.post(`http://feed-the-wump.us/documents`)
            .send(clean(evaled))
            .then(hb => {
              var eval = new client.methods.Embed()
              .setColor('RANDOM')
              .setAuthor('eval', client.user.avatarURL())
              .addField('Wumpus', `https://feed-the-wump.us/${hb.body.key}`);
                msg.channel.send({embed: eval}).catch(err => {
                    snekfetch.post(`http://feed-the-wump.us/documents`)
                        .send(clean(evaled))
                        .then(hb => {
                          var eval1 = new client.methods.Embed()
                          .setColor('RANDOM')
                          .setAuthor('eval', client.user.avatarURL())
                          .addField('Wumpus', `https://feed-the-wump.us/${hb.body.key}`);
                            msg.channel.send({embed: eval1});
                        });
                });
            });
    } catch (err) {
        snekfetch.post(`http://feed-the-wump.us/documents`)
            .send(clean(err))
            .then(hb => {
              var eval2 = new client.methods.Embed()
              .setColor('RANDOM')
              .setAuthor('eval', client.user.avatarURL())
              .addField('Wumpus', `https://feed-the-wump.us/${hb.body.key}`);
                msg.channel.send({embed: eval2});
            });
    }
};

exports.conf = {
  enabled: true,
  runIn: ["text", "dm"],
  aliases: ['nev'],
  permLevel: 10,
  botPerms: [],
  requiredFuncs: [],
  requiredSettings: [],
};

exports.help = {
  name: "neweval",
  description: "Evaluates arbitrary Javascript. Reserved for client owners.",
  usage: "<args:str>",
  usageDelim: "",
  category: "",
  subcategory: ""
};
