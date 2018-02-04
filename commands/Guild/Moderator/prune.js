exports.run = async (client, msg) => {
    let amount = msg.content.split(" ").splice(1, 2).join(" ");
    if(amount < 1) {
      return msg.reply("The amount of messages to remove is 1-100.");
    }
    if(amount > 100) {
      return msg.reply("Choose a number between 1-100.");
    }
    msg.channel.bulkDelete(amount);
    msg.delete()
    msg.channel.send(`${msg.author} Pruned: ${amount} messages`).then(m => m.delete(2500));
};

exports.conf = {
    enabled: true,
    runIn: ['text'],
    aliases: ['purge', 'clean'],
    permLevel: 2,
    cooldown: 10,
    botPerms: [],
    requireFuncs: [],
    requiredSettings: []
};

exports.help = {
    name: 'prune',
    description: "Prune a number of messages on the current channel.",
    usage: "<number:int>",
    usageDelim: " "
};