// MODULE
const Discord = require("discord.js")
const fs = require('node:fs');
const paths = require ('node:path');
const { Client, Collection, Events, GatewayIntentBits } = require('discord.js');
require('dotenv').config({ path: paths.resolve(__dirname, '.env') })

// TOKEN
const TOKEN = process.env.TOKEN

// const client = new Discord.Client()
const client = new Discord.Client({ intents: [
	Discord.GatewayIntentBits.Guilds,
	Discord.GatewayIntentBits.GuildMessages,
  	Discord.GatewayIntentBits.MessageContent
]})

// TO SET COMMAND IN FOLDER COMMANDS
client.command = new Collection();
fs.readdirSync('./commands').forEach(dirs => {
	const dataGet = fs.readdirSync(`./commands/${dirs}`).filter(files => files.endsWith('.js'));

	for (const file of dataGet) {
		const command = require(`./commands/${dirs}/${file}`);
		client.command.set(command.data.name.toLowerCase(), command);
	};
});

// EVENTS
const events = fs.readdirSync('./events').filter(file => file.endsWith('.js'));
for (const file of events) {
    const event = require(`./events/${file}`);
    client.on(file.split(".")[0], event.bind(null, client));
};

// LOGIN CLIENT
client.login(TOKEN)