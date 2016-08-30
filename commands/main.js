var util = require('../util');

var RtmClient = require('@slack/client').RtmClient;

var token = 'xoxb-74099110612-R8T2wdNfDNzcFFNiKEYC2f3q';

var RTM_EVENTS = require('@slack/client').RTM_EVENTS;

var rtm = new RtmClient(token);
rtm.start();


module.exports = function (param) {

    util.postMessage(param.channel, "main function initialized. Now listening to messages.");

    rtm.on(RTM_EVENTS.MESSAGE, function (message) {

        //everything in here happens each time a function is run
        console.log(message);

        var sentence = message.text.split(" ")

        if (sentence[0] === "jasonbot_calculate"){
          console.log("calculator initialized. Too bad it doesn't work yet! ")
        }



    });

};



