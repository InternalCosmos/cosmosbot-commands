exports.run = async (client, msg, args) => {
    const rps = ["Rock", "Paper", "Scissor"]
    var random = Math.floor(Math.random() * rps.length);
    const choice = args[0].toLowerCase();
    const mychoice = rps[random];
    const draw = "it's a draw, and got to keep all your points!!";
    const won = "you won, and gained a point \:\D";
    const loss = "you lost, and lost a point \:\(";
    var result;
    if (choice === mychoice.toLowerCase()) {
    result = draw;
    } else if (choice === "rock" && mychoice === "Scissor") {
    result = won;
    client.funcs.points(client, msg.author.id, "add");
    } else if (choice === "rock" && mychoice === "Paper") {
    result = loss;
    client.funcs.points(client, msg.author.id, "remove");
    } else if (choice === "scissor" && mychoice === "Paper") {
    result = won;
    client.funcs.points(client, msg.author.id, "add");
    } else if (choice === "scissor" && mychoice === "Rock") {
    result = loss;
    client.funcs.points(client, msg.author.id, "remove");
    } else if (choice === "paper" && mychoice === "Rock") {
    result = won;
    client.funcs.points(client, msg.author.id, "add");
    } else if (choice === "paper" && mychoice === "Scissor") {
    result = loss;
    client.funcs.points(client, msg.author.id, "remove");
    } else {
    result = `...nothing idiot :angry: ${args[0]} is not a thing in Rock/Paper/Scissor!!! Removed a point for doing it wrong!!`;
    client.funcs.points(client, msg.author.id, "remove");
    }
    const embed = new client.methods.Embed()
      .setColor(client.funcs.hex(true))
      .setTitle("RPS")
      .setDescription(`I picked ${mychoice}. And your choice was ${args[0]} :thinking:\nSo ${result}!`)
      .setFooter(`rps made by ${client.users.get('227110473466773504').tag}`)
    return msg.channel.send({embed});
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
    name: 'rps',
    description: "Play Rock/Paper/Scissors with the bot!",
    usage: "<query:str>",
    usageDelim: " "
};
