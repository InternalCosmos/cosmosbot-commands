exports.run = async (client, msg, args) => {
  let cb = "```";
  if (!args.join(" ")) {
    let embed = new client.methods.Embed()
      .setColor(0x333c9b)
      .setTitle("Evaluation")
      .setDescription(
        `${cb}md\n# Interesting:\nHey nerd are you gonna eval something?${cb}`
      );
    return msg.channel.send({ embed });
  } else
    try {
      var evaled = eval(args.join(" "));
      if (typeof evaled !== "string") evaled = require("util").inspect(evaled);

      evaled = evaled.replace(client.token, "censored");

      let embed = new client.methods.Embed()
        .setColor(0x333c9b)
        .setTitle("Evaluation")
        .setDescription(`${cb}md\n# Input:\n${args.join(" ")}${cb}\n${cb}md\n# Output:\n${clean(evaled)}${cb}`);
      msg.channel.send({ embed });
    } catch (err) {
      let embed = new client.methods.Embed()
        .setColor(0x9b3232)
        .setTitle("Evaluation")
        .setDescription(`${cb}md\n# Input:\n${args.join(" ")}${cb}\n${cb}md\n# Error:\n${err}${cb}`);
      msg.channel.send({ embed });
      return;
    }
};

exports.conf = {
  enabled: true,
  runIn: ["text", "dm"],
  aliases: ["ev"],
  permLevel: 10,
  botPerms: [],
  botPerms: [],
  requiredFuncs: []
};

exports.help = {
  name: "eval",
  description: "Evaluates arbitrary Javascript. Reserved for bot owners.",
  usage: "<expression:str>",
  usageDelim: "",
  category: "",
  subcategory: ""
};

function clean(text) {
  if (typeof text === "string") {
    return text
      .replace(/`/g, "`" + String.fromCharCode(8203))
      .replace(/@/g, "@" + String.fromCharCode(8203));
  } else {
    return text;
  }
}
