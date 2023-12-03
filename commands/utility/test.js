const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('test')
		.setDescription('Test command for admins.'),
	async execute(interaction) {
        const locales = {
            en: 'Hello world! I am the Workstation.js bot. Type /help to use me.',
            de: 'Hallo Welt! Ich bin der Workstation.js Bot. Schreibe /help um mich zu benutzen.',
            tr: 'Merhaba Dünya! Ben Workstation.js botu. Beni kullanmak için /help yazın.',
        };
		await interaction.reply(locales[interaction.locale] ?? 'Hello world! I am the Workstation.js bot. Type /help to use me.');
	},
};