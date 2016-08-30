var util = require('../util');

var RtmClient = require('@slack/client').RtmClient;

var token = 'xoxb-74099110612-R8T2wdNfDNzcFFNiKEYC2f3q';

var RTM_EVENTS = require('@slack/client').RTM_EVENTS;

var rtm = new RtmClient(token);

rtm.start();


module.exports = function (param) {

    util.postMessage(param.channel, "main function initialized. Now listening to messages.");

    var messagesArr = [];

    rtm.on(RTM_EVENTS.MESSAGE, function (message) {

        //everything in here happens each time a function is run
        messagesArr.push(message);

        // a very simple calculator
        var sentence = message.text.split(" ")

        if (sentence[0] === "jasonbot" && sentence[1] === "calculate"){
          console.log("calculator initialized.")

          var arg1 = Number(sentence[2])
          var arg2 = Number(sentence[4])

          if (sentence[3] === "+"){
            util.postMessage(param.channel, "the answer is: "+(arg1+arg2));
          } else if (sentence[3] === "-"){
            util.postMessage(param.channel, "the answer is: "+(arg1-arg2));
          } else if (sentence[3] === "*"){
            util.postMessage(param.channel, "the answer is: "+(arg1*arg2));
          } else if (sentence[3] === "/"){
            util.postMessage(param.channel, "the answer is: "+(arg1/arg2));
          }

        }

        // retrieve past messages using: jasonbot show the last 4 messages
        if (sentence[0] === "jasonbot" && sentence[1] === "show"){
          var numberToRetrieve = sentence[4];
          var stringToDisplay = "MESSAGES:";

          for (var i = messagesArr.length-2; i > messagesArr.length - numberToRetrieve-2; i--){
            console.log(messagesArr[i].text)
            stringToDisplay += "\n" + messagesArr[i].text
          }

          util.postMessage(param.channel, stringToDisplay);
        }

    });

};



