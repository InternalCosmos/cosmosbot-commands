exports.run = async  (client, msg, [user]) => {
  const penischar = '\='
  var masterPeeen = `8==============================================================================================================D`
  var member;
  if (!user) {
    member = msg.author
  } else {
    member = user
  }

  if (member.id === '227110473466773504' || member.id === '337514740970553354' || member.id === '299665456657072129' || member.id === '254359591788347392' || member.id === '195223544186142727') {
    msg.channel.send(`${member.tag}\'s Penis Length\n` + masterPeeen)
  } else {
    msg.channel.send(`${member.tag}\'s Penis Length\n` +
    `8${penischar.repeat( + Math.floor(Math.random() * Math.random() * 10) * 2)}D`)
  }

}

exports.conf = {
  enabled: true,
  runIn: ['text', 'dm'],
  aliases: [],
  permLevel: 0,
  cooldown: 3,
  botPerms: [],
  botPerms: [],
  requiredFuncs: [],
}

exports.help = {
  name: "penis",
  description: "gets the penis length of a user via mention, or if no mention the sender",
  usage: "[user:mention]",
  usageDelim: "",
  category: "",
  subcategory: ""
}
