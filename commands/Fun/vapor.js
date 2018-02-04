exports.run = async (client, msg, [args]) => {
  msg.delete();
  let text = args.replace(/1/gi, "１").replace(/2/gi, "２").replace(/3/gi, "３").replace(/4/gi, "４").replace(/5/gi, "５").replace(/6/gi, "６").replace(/7/gi, "７").replace(/8/gi, "８").replace(/9/gi, "９").replace(/0/gi, "０").replace(/a/gi, "ａ").replace(/b/gi, "ｂ").replace(/c/gi, "ｃ").replace(/d/gi, "ｄ").replace(/e/gi, "ｅ").replace(/f/gi, "ｆ").replace(/g/gi, "ｇ").replace(/h/gi, "ｈ").replace(/i/gi, "ｉ").replace(/j/gi, "ｊ").replace(/k/gi, "ｋ").replace(/l/gi, "ｌ").replace(/m/gi, "ｍ").replace(/n/gi, "ｎ").replace(/o/gi, "ｏ").replace(/p/gi, "ｐ").replace(/q/gi, "ｑ").replace(/r/gi, "ｒ").replace(/s/gi, "ｓ").replace(/t/gi, "ｔ").replace(/u/gi, "ｕ").replace(/v/gi, "ｖ").replace(/w/gi, "ｗ").replace(/x/gi, "ｘ").replace(/y/gi, "ｙ").replace(/z/gi, "ｚ");
  msg.channel.send(text + `\nsent by ${msg.author.tag} (${msg.author.id})`);
};

exports.conf = {
    enabled: true,
    runIn: ['text'],
    aliases: ['vaporwave'],
    permLevel: 0,
    cooldown: 3,
    botPerms: [],
    requireFuncs: [],
    requiredSettings: [],
    requiredModules: ['figlet']
};

exports.help = {
    name: 'vapor',
    description: "Say something in ｖａｐｏｒｗａｖｅ.",
    usage: "<args:str>",
    usageDelim: ''
};
