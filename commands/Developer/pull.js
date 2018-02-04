const { promisify } = require("util");
const exec = promisify(require("child_process").exec);
const path = require("path");
const { URL } = require("url");
const config = {
  "gitURL": "censored",
  "gitUsername": "censored",
  "gitPassword": "censored" };


exports.run = async (client, msg, args, level) => { // eslint-disable-line no-unused-vars
  const gitURL = new URL(config.gitURL);
  gitURL.password = config.gitPassword;
  gitURL.username = config.gitUsername;

  const { stdout, stderr, err } = await exec(`git pull ${gitURL}`, {
     cwd: path.join(__dirname, "../")
   }).catch(err => ({ err }));
  if (err) return console.error(err);

  const out = [];
  if (stdout) out.push(stdout);
  if (stderr) out.push(stderr);

  await msg.channel.send("Pulling out...");
  await msg.channel.send(out.join("\`\`\`\n`\`\`"), {code:true});
};

exports.conf = {
    enabled: true,
    runIn: ['text'],
    aliases: ['update'],
    permLevel: 10,
    cooldown: 5,
    botPerms: [],
    requireFuncs: [],
    requiredSettings: []
};

exports.help = {
    name: 'pull',
    description: "Pulls out, what else should I say?",
    usage: "",
    usageDelim: ""
};
