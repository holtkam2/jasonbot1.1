var slackTerminal = require('slack-terminalize');

slackTerminal.init('xoxb-74099110612-RRlGZVrn7VlExi62Rz6NLn8C', {

}, {

	CONFIG_DIR: __dirname + '/config',
	COMMAND_DIR: __dirname + '/commands',
  ERROR_COMMAND: "error"
});
