const request = require("snekfetch");
const HTMLParser = require("fast-html-parser");

exports.run = async (client, msg) => {
    const { text: html } = await request.get('http://www.fmylife.com/random');
    const root = HTMLParser.parse(html);
    const article = root.querySelector('.block a');
    return msg.channel.send(article.text);
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
    name: 'fml',
    description: "Grabs random 'Fuck My Life' quote from the web.",
    usage: "",
    usageDelim: ""
};