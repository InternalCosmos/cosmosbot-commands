function secondsToString(seconds) {
    var numyears = Math.floor(seconds / 31536000);
    var numdays = Math.floor((seconds % 31536000) / 86400);
    var numhours = Math.floor(((seconds % 31536000) % 86400) / 3600);
    var numminutes = Math.floor((((seconds % 31536000) % 86400) % 3600) / 60);
    var numseconds = (((seconds % 31536000) % 86400) % 3600) % 60;

    var str = "";
    if (numyears > 0) {
        str += numyears + " years ";
    }
    if (numdays > 0) {
        str += numdays + " days ";
    }
    if (numhours > 0) {
        str += numhours + " hours ";
    }
    if (numminutes > 0) {
        str += numminutes + " minutes ";
    }
    if (numseconds > 0) {
        str += numseconds + " seconds ";
    }
    return str;
}

exports.run = async(client, msg, [args]) => {
  msg.delete();
    var a = new Date();
    var e = new Date(a.getFullYear() + 1, 0, 1, 0, 0, 0, 0);
    var info = secondsToString(Math.ceil((e - a) / 1000)) + "until " + (a.getFullYear() + 1) + "!";
    try {
        msg.channel.send(info)
    } catch (e) {
        console.log(e)
        msg.channel.send("There was a problem.")
    }
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
    name: 'newyears',
    description: "When is New Years from this second? Use this command to find out!",
    usage: "",
    usageDelim: ""
};
