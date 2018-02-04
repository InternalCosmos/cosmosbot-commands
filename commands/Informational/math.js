const math = require('mathjs');
exports.run = async (client, msg) => {
    var content = msg.content.split(' ').slice(1).join(' ');

      let result;
        try {
          result = math.eval(content)
        } catch (error) {
          var error = new client.methods.Embed()
          .setColor(client.funcs.hex(true))
          .addField("Input", `\`\`\`\n${content}\n\`\`\``)
          .addField("Error" ,'Error while evaluating the math expression.')
          return msg.channel.send({embed: error})
        } finally {
          if (isNaN(parseFloat(result))) {
            var invalid = new client.methods.Embed()
            .setColor(client.funcs.hex(true))
            .addField("Input", `\`\`\`\n${content}\n\`\`\``)
            .setTitle("Invalid" ,"Invalid Calculation Expression")
            return msg.channel.send({embed: invalid})
          } else {
            var results = new client.methods.Embed()
            .setColor(client.funcs.hex(true))
            .addField("Input", `\`\`\`\n${content}\n\`\`\``)
            .addField("Output", `\`\`\`\n${result}\n\`\`\``)
            return msg.channel.send({embed: results})
          }
        }
};

exports.conf = {
    enabled: true,
    runIn: ['text','dm','group'],
    aliases: ['calc'],
    permLevel: 0,
    cooldown: 3,
    botPerms: [],
    requireFuncs: [],
    requiredSettings: []
};

exports.help = {
    name: 'math',
    description: "A calculator, because why not!",
    usage: "",
    usageDelim: ""
};
