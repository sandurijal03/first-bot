require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client({
  partials: ['MESSAGE'],
});

const BOT_PREFIX = '!';
const MOD_ME_COMMAND = 'mod-me';

client.on('ready', () => {
  console.log('Out bot is ready to go!!');
});

client.on('messageDelete', (msg) => {
  msg.channel.send('Stop deleting message');
});

client.on('message', (msg) => {
  if (msg.content === 'I like HRS') {
    msg.react('♥️');
  }

  if (msg.content.includes('hi')) {
    msg.channel.send('Hello');
  }

  if (msg.content === `${BOT_PREFIX}${MOD_ME_COMMAND}`) {
    modUser(msg.member);
  }
});

function modUser(member) {
  member.roles.add('783391785002467389');
}

client.login(process.env.BOT_TOKEN);
