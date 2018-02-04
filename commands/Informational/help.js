exports.run = async (client, msg) => {
  msg.channel.send(`The help command is being remade since the old one couldn't handle the ${client.commands.size} that ${client.user.username} has. Please check https://discordbots.org/bot/337514740970553354 for a small list of commands.`);
};

exports.conf = {
  enabled: true,
  runIn: ["text", "dm", "group"],
  aliases: ["commands", "cmds", "helpme"],
  permLevel: 0,
  cooldown: 5,
  botPerms: ["SEND_MESSAGES"],
  requiredFuncs: [],
  requiredSettings: [],
};

exports.help = {
  name: "help",
  description: "Display help for a command.",
  usage: "[command:str]",
  usageDelim: "",
};
