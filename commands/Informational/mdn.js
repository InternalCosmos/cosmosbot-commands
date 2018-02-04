const unirest = require('unirest');

exports.run = async(client, msg) => {
    return new Promise(async(resolve, reject) => {
        try {
            let args = msg.content.split(' ').splice(1).join(' ');
            var linkToResults = `https://developer.mozilla.org/en-US/search?locale=en-US&q=${args}`;
            if (!args[0]) return resolve(await msg.channel.send(":x: You must specify something to search"));
            fetch: {
                await unirest.get(`https://developer.mozilla.org/en-US/search.json?locale=en-US&q=${args}`)
                .end(async function(result) {
                    if (!result.body.documents || !result.body.documents.length) return resolve(await msg.channel.send(":x: Your search did not returned any result"))
                    let firstResult = result.body.documents[0];
                    var mdn = new client.methods.Embed()
                    .setColor(client.funcs.hex(true))
                    .setTitle("MDN")
                    .setURL("https://developer.mozilla.org/en/")
                    .setThumbnail("https://developer.cdn.mozilla.net/static.img.opengraph-logo.dc4e08e2f6af.png")
                    .addField('Search Results', `Here's the results for [${args}](https://developer.mozilla.org/en-US/search?locale=en-US&q=${args})`)
                    .addField(`**${firstResult.title}**`, firstResult.excerpt)
                    .setFooter(`Searched by ${msg.author.username}`);

                    msg.channel.send({embed: mdn});
                })
            }
        } catch (err) {
            reject(client.emit('commandFail', message, err));
        }
    });
};

exports.conf = {
    enabled: true,
    runIn: ['text','dm','group'],
    aliases: [],
    permLevel: 0,
    cooldown: 5,
    botPerms: [],
    requireFuncs: [],
    requiredSettings: []
};

exports.help = {
    name: 'mdn',
    description: "Search something through the Mozilla Developer Network.",
    usage: "",
    usageDelim: ""
};
