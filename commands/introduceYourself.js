var util = require('../util');

module.exports = function (param) {
    // param object contains the following keys:
    // 1. command - the primary command name
    // 2. args - an array of strings, which is user's message posted in the channel, separated by space
    // 3. user - Slack client user id
    // 4. channel - Slack client channel id
    // 5. commandConfig - the json object for this command from config/commands.json

    // implement your logic here..
    // ..

    // send back the response
    // more on this method here: https://api.slack.com/methods/chat.postMessage
    util.postMessage(param.channel, 'Hi, my name is jasonbot (version 1.1... version 1.0 is now completely broken and has been decomissioned). Jason made me for his Hack Reactor MVP project. I run on nodeJS, and I can store information using SQL and Sequelize. I have a handful of hardcoded commands and I can also do some basic math. I can also remember messages that you sent before and grab them from my database on request! \n \n As a side note, it would be really cool if there was a front end client service that could take control of me on Slack like a puppet! (Greenfield cough cough)');
};