const Discord = require('discord.js');
const client = new Discord.Client();

const config = require('./config.json');

client.once('ready', () => {
	console.log('Ready!');
});





client.on('message', message => {
	if (message.content === '!svs') {
client.guilds.cache.forEach(guild => {
    console.log(`${guild.name} 
     ID:  ${guild.id}
      OWNER: ${guild.owner.id}`);
  })
    }
})



client.login('your-token-here');