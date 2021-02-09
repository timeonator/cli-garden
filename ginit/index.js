const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const files=require('../lib/files');
const github = require('../lib/github');

clear();

console.log(
  chalk.yellow(
    figlet.textSync('Code Garden', { horizontalLayout: 'full' })
  )
);

const run = async () => {
    let token = github.getStoredGithubToken();
    if(!token) {
      token = await github.getPersonalAccesToken();
    }
    console.log(token);
  };

  run();


