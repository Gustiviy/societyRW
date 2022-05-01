//possible unknown error causes: intents, 

import { Client, Intents, Interaction } from 'discord.js';
import { token } from './token.js';

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
const blacklistedUsers = [] //add users here that do not follow rules of /createticket

client.once('ready', () => {
	console.log('Ready!');
	client.user.setPresence({ activities: [{ name: 'mod applications' }], status: 'online' });
	// oddly static
});

// TODO: add an admin command with sub-commands to cleanly do moderation tasks without
// editing.
client.once('interactionCreate', interaction => {
	if (!interaction.isCommand()) return;

	if (interaction.commandName === 'createticket') {
		if (!blacklistedUsers.includes(interaction.user.id)) {
			client.channels.cache.get('970028760629915699').send(`<@&891432927471218751>, ${interaction.user.tag} has created a ticket with the question > ${interaction.options.getString('ticket')} <.`);
			interaction.reply({ content: 'Ticket sent to all staff members. One will PM you shortly.', ephemeral: true })
		}
	}
	
})

client.login(token());