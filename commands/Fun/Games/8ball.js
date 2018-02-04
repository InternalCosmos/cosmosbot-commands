exports.run = async (client, msg) => {
    const answers = ["Maybe.", "Certainly not.", "I hope so.", "Not in your wildest dreams.", "There is a good chance.", "Quite likely.", "I think so.", "I hope not.", "I hope so.", "Never!", "Fuhgeddaboudit.", "Ahaha! Really?!?", "Pfft.", "Sorry, bucko.", "Hell, yes.", "Hell to the no.", "The future is bleak.", "The future is uncertain.", "I would rather not say.", "Who cares?", "Possibly.", "Never, ever, ever.", "There is a small chance.", "Yes!", "Omae Wa Mou Shindeiru\n\nNANI?!?!"];
    if (msg.content.endsWith("?")) {
        msg.reply(`🎱 ${answers[Math.floor(Math.random() * answers.length)]}`).catch(err => console.log(err.stack, "error"));
      } else {
        msg.reply("🎱 That doesn't look like a question, try again please.").catch(err => console.log(err.stack, "error"));
      }
};

exports.conf = {
    enabled: true,
    runIn: ['text','dm','group'],
    aliases: ['8', 'magic'],
    permLevel: 0,
    cooldown: 3,
    botPerms: [],
    requireFuncs: [],
    requiredSettings: [],
    requiredModules: []
};

exports.help = {
    name: '8ball',
    description: "Magic 8-Ball, does exactly what the toy does. (Results may vary)",
    usage: "<query:str>",
    usageDelim: " "
};
