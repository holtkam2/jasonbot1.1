var util = require('../util');

module.exports = function (param) {
    var HRRstudents = ["Ali", "Aman", "Anna", "Caleb", "Cody", "Hoon", "Busby", "Yara", "Yasser", "Tyler", "Roni", "Wes", "Victor", "Kent", "Henry"]

    var jasonBotChoice = HRRstudents[Math.floor(Math.random()*14)]

    console.log(jasonBotChoice)

    util.postMessage(param.channel, jasonBotChoice+' should do a pep talk!');
};