//possible unknown error causes: intents, 

import { Client, Intents, Permissions} from 'discord.js';
import { token } from './token.js';

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
const blacklistedUsers = [] //add users here that do not follow rules of /createticket

client.once('ready', () => {
	console.log('Ready!');
	client.user.setPresence({ activities: [{ name: 'mod applications' }], status: 'online' });
	// oddly static
});

const helpContent = "    **Commands:**\n - */createticket*\n    Ask moderators of the server anything with a ticket\n - */admin*\n    DO ADMIN STUFF"
client.once('interactionCreate', interaction => {
	if (!interaction.isCommand()) return;

	if (interaction.commandName === 'createticket') {
		if (!blacklistedUsers.includes(interaction.user.id)) {
			client.channels.cache.find(channel => channel.name === 'tickets').send(`@everyone, ${interaction.user.tag} has created a ticket with the question > ${interaction.options.getString('ticket')} <.`);
			interaction.reply({ content: 'Ticket sent to all staff members. One will PM you shortly.', ephemeral: true })
		}
	}
	if (interaction.commandName === 'admin' && interaction.options.getSubcommand() === 'giverole') {
		if (interaction.member.permissions.has(Permissions.FLAGS.MANAGE_MESSAGES)) { 
			let role = interaction.guild.roles.cache.find(r => r.id === interaction.options.getRole('role').id);
			let member = interaction.options.getMember('user');

			try { member.roles.add(role) } catch (error) { interaction.reply(error) }
			interaction.reply(`Gave user **${member}** role **${interaction.options.getRole('role').name}**`)
		} else {
			interaction.reply({ content: 'You dont have permission to do this.', ephemeral: true });
		}

	}
	//ISSUE: doesnt work: no errors, keeps running
	if (interaction.commandName === 'help') {
		interaction.member.createDM()
		.then((DMChannel) => {
			DMChannel.send(helpContent).catch(() => 
			interaction.reply('Your DM\'s are off. Please turn them on to receive messages.'))
		})
		if (!interaction.replied) {
			interaction.reply('✅')
		}
		
	}
	
})

client.login(token());