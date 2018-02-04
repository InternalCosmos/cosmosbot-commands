const quiz = [
  { q: "What colour is the sky?", a: ["blue"] },
  { q: "Name a soft drink brand", a: ["pepsi", "coke", "rc", "7up", "sprite", "mountain dew"] },
  { q: "Name a programming language", a: ["actionscript", "coffeescript", "c", "c++", "basic", "python", "perl", "javascript", "dotnet", "lua", "crystal", "go", "d", "php", "ruby", "rust", "dart"] },
  { q: "Who's a good boy? **Who's a good boy???**", a: ["you are", "i am"] },
  { q: "What's the meaning of life?", a: ["42"] },
  { q: "Who created me?", a: ["InternalCosmos", "internalcosmos", "terry", "Terry", "InternalCosmos#3689"] },
  { q: "What programming language am I made in?", a: ["javascript", "Javascript", "JavaScript"] },
  { q: "Name the seventh planet from the Sun.", a: ["Uranus"] },
  { q: "Name the World's biggest island.", a: ["Greanland"] },
  { q: "What's the World's longest river?", a: ["Amazon"] },
  { q: "Name the World's largest ocean.", a: ["Pacific"] },
  { q: "Name one of the three primary colours.", a: ["blue", "red", "yellow"] },
  { q: "How many colours are there in a rainbow?", a: ["7"] },
  { q: "What do you call a time span of one thousand years?", a: ["Millennium"] },
  { q: "How many squares are there on a chess board?", a: ["64"] },
  { q: "How many degrees are found in a circle?", a: ["360", "360 degrees", "three hundred sixty"] },
  { q: "The Dewey Decimal system is used to categorise what?", a: ["books"] },
  { q: "How many points does a compass have?", a: ["32"] },
  { q: "How many strings does a cello have?", a: ["4"] },
  { q: "How many symphonies did Beethoven compose?", a: ["9"] },
  { q: "How many lines should a limerick have?", a: ["5"] },
  { q: "Which species of mollusc and a planet share a name?", a: ["Venus"] },
];

const options = {
  max: 1,
  time: 30000,
  errors: ["time"],
};

exports.run = async (client, msg) => {
  const item = quiz[Math.floor(Math.random() * quiz.length)];
  await msg.channel.send(item.q);
  try {
    const collected = await msg.channel.awaitMessages(answer => item.a.includes(answer.content.toLowerCase()), options);
    const winnerMessage = collected.first();
    await client.funcs.points(client, winnerMessage.author.id, "add");
    return msg.channel.send(`We have a winner! *${winnerMessage.author.username}* had a right answer with \`${winnerMessage.content}\`!`);
  } catch (_) {
    return msg.channel.send(`Seems no one got it! Oh well. The answer was: \`${item.a}\``);
  }
};

exports.conf = {
  enabled: true,
  runIn: ["text", "dm", "group"],
  aliases: [],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: ["points"],
  requiredModules: [],
};

exports.help = {
  name: "quiz",
  description: "Answer random quiz questions to get points!",
  usage: "",
  usageDelim: ""
};
