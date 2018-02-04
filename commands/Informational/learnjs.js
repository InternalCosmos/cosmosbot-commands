exports.run = async (client, msg) => {
    msg.delete()
    msg.channel.send(`
      ***Useful links for learning JavaScript and Node:***
    
      **codecademy online course:**
      *https://www.codecademy.com/learn/introduction-to-javascript*
      **Eloquent Javascript, free book:**
      *http://eloquentjavascript.net/*
      **Some Node:**
      *http://nodeschool.io/*
      *https://www.codeschool.com/courses/real-time-web-with-node-js*
      **discord.js getting started guides:**
      *https://yorkaargh.gitbooks.io/discord-js-bot-guide/content/*
      *https://www.youtube.com/channel/UCvQubaJPD0D-PSokbd5DAiw/videos*
      *https://www.youtube.com/channel/UCLun-hgcYUgNvCCj4sIa-jA/videos*
      **Javascript reference/docs:**
      *https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference*
      **discord.js documentation:**
      *https://discord.js.org/#!/docs/*
      `)
};

exports.conf = {
    enabled: true,
    runIn: ['text','dm','group'],
    aliases: [],
    permLevel: 0,
    cooldown: 3,
    botPerms: [],
    requireFuncs: [],
    requiredSettings: []
};

exports.help = {
    name: 'learnjs',
    description: "Gives you some links so you can learn js and make your own bot!",
    usage: "",
    usageDelim: ""
};