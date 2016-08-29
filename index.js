var slackTerminal = require('slack-terminalize');

slackTerminal.init('xoxb-74099110612-R8T2wdNfDNzcFFNiKEYC2f3q', {

}, {

	CONFIG_DIR: __dirname + '/config',
	COMMAND_DIR: __dirname + '/commands',
  ERROR_COMMAND: "error"
});
