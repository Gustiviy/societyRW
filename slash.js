
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
		.setRequired(true)),
	new SlashCommandBuilder().setName('admin')
	.setDescription('Administrative tasks for mod team. Requires mod team role')
	.addSubcommand(subcommand => subcommand
		.setName('giverole')
		.setDescription('Gives specified user a role. Will return an error if role is above. (NORMALLY CANT HAPPEN)')
		.addUserOption(user => user
			.setName('user')
			.setDescription('User to give role to')
			.setRequired(true))
		.addRoleOption(role => role
			.setName('role')
			.setDescription('Role to assign user to')
			.setRequired(true))),
	new SlashCommandBuilder().setName('help')
			.setDescription('DM\'s you the help page.')
]
	.map(command => command.toJSON());

const rest = new REST({ version: '9' }).setToken(token());

rest.put(Routes.applicationGuildCommands("CLIENT_ID_HERE", "GUILD_ID_HERE"), { body: commands })
	.then(() => console.log('Successfully registered application commands.'))
	.catch(console.error);