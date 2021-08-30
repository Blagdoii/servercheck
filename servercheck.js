//ServerCheck v0.8.5 (beta) [Created by Kreska]
// Final Version I think


const Discord = require('discord.js');
const client = new Discord.Client();

const config = require('./config.json');

client.once('ready', () => {
	console.log('Ready! v0-8-5');
});





client.on('message', message => {
	if (message.content === '!servers') {
client.guilds.cache.forEach(guild => {
    console.log(`${guild.name} 
     ID:  ${guild.id}
      OWNER: ${guild.owner.id}
      MEMBERS: ${guild.memberCount}
      This app is created by Kreska`);
  })
    }
})



client.login('your-token-here');