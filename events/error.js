exports.run = (client, err) => {
  var channel = client.channels.get('channel id');
  client.emit("log", err, "error");
  channel.send(`
    Error has occured
    \`\`\`${err}\`\`\`
    `)
};
