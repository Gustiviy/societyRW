
import { SlashCommandBuilder } from '@discordjs/builders';
import { REST } from '@discordjs/rest';
import { Routes } from 'discord-api-types/v9';
import { token } from './token.js';

//client.user.setPresence({ activities: [{ name: 'activity' }], status: 'idle' });


const commands = [
	new SlashCommandBuilder().setName('createticket')
	.setDescription('Create a question ticket. Will notify staff and if one is available, they\'ll answer your question.')
	.addStringOption(option => option
		.setName('ticket')
		.setDescription('Your question / suggestion')
		.setRequired(true))
]
	.map(command => command.toJSON());

const rest = new REST({ version: '9' }).setToken(token());

rest.put(Routes.applicationGuildCommands("835221782751084554", "882688985376358421"), { body: commands })
	.then(() => console.log('Successfully registered application commands.'))
	.catch(console.error);