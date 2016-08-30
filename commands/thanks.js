var util = require('../util');

module.exports = function (param) {
    // param object contains the following keys:
    // 1. command - the primary command name
    // 2. args - an array of strings, which is user's message posted in the channel, separated by space
    // 3. user - Slack client user id
    // 4. channel - Slack client channel id
    // 5. commandConfig - the json object for this command from config/commands.json

    // implement your logic here..

    util.postMessage(param.channel, 'Any time! Stay tuned for student presentations on Friday, so Jason can show all you guys to make a slackbot! ');
};