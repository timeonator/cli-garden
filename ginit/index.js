require('dotenv').config();
const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const files=require('../lib/files');
const github = require('../lib/github');
const fetch = require('node-fetch');

 const token = process.env.GIT_TOKEN

clear();

console.log(
  chalk.yellow(
    figlet.textSync('Code Garden', { horizontalLayout: 'full' })
  )
);
console.log(process.env.GIT_TOKEN);
const run = async () => {
    const response = await fetch(
        "https://api.github.com/repos/octokit/core.js/releases/latest", 
        {
          headers: {
            authorization: `token ${process.env.GIT_TOKEN}`
          }
        }
      )
      console.log(await response.json());
}

  run();


