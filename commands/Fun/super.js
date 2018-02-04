exports.run = async (client, msg, [args]) => {
  msg.delete();
  let text = args.replace(/1/gi, "¹").replace(/2/gi, "²").replace(/3/gi, "³").replace(/4/gi, "⁴").replace(/5/gi, "⁵").replace(/6/gi, "⁶").replace(/7/gi, "⁷").replace(/8/gi, "⁸").replace(/9/gi, "⁹").replace(/0/gi, "⁰").replace(/a/gi, "ᵃ").replace(/b/gi, "ᵇ").replace(/c/gi, "ᶜ").replace(/d/gi, "ᵈ").replace(/e/gi, "ᵉ").replace(/f/gi, "ᶠ").replace(/g/gi, "ᵍ").replace(/h/gi, "ʰ").replace(/i/gi, "ᶦ").replace(/j/gi, "ʲ").replace(/k/gi, "ᵏ").replace(/l/gi, "ˡ").replace(/m/gi, "ᵐ").replace(/n/gi, "ⁿ").replace(/o/gi, "ᵒ").replace(/p/gi, "ᵖ").replace(/q/gi, "ᑫ").replace(/r/gi, "ʳ").replace(/s/gi, "ˢ").replace(/t/gi, "ᵗ").replace(/u/gi, "ᵘ").replace(/v/gi, "ᵛ").replace(/w/gi, "ʷ").replace(/x/gi, "ˣ").replace(/y/gi, "ʸ").replace(/z/gi, "ᶻ");
        msg.channel.send(text + `\nsent by ${msg.author.tag} (${msg.author.id})`);
};

exports.conf = {
    enabled: true,
    runIn: ['text'],
    aliases: [],
    permLevel: 0,
    cooldown: 3,
    botPerms: [],
    requireFuncs: [],
    requiredSettings: [],
    requiredModules: []
};

exports.help = {
    name: 'super',
    description: "Send something in ˢᵘᵖᵉʳ.",
    usage: "<args:str>",
    usageDelim: ''
};
