const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('help')
		.setDescription('Provides information about the bot.'),
	async execute(interaction) {
        const locales = {
            en: 'Commands: \n\n /help - Provides information about the bot. \n /user - Provides information about the user. \n /server - Provides information about the server. \n /ping - Pong! \n\n Note: Commands start with /. \n\n Github: https://github.com/Bahcesehir-BIST-MTAL-Technical-Crew/workstation.js.git',
            de: 'Befehle: \n\n /help - Gibt Informationen über den Bot. \n /user - Gibt Informationen über den Benutzer. \n /server - Gibt Informationen über den Server. \n /ping - Pong! \n\n Hinweis: Befehle beginnen mit /. \n\n Github: https://github.com/Bahcesehir-BIST-MTAL-Technical-Crew/workstation.js.git',
            tr: 'Komutlar: \n\n /help - Bot hakkında bilgi verir. \n /user - Kullanıcı hakkında bilgi verir. \n /server - Sunucu hakkında bilgi verir. \n /ping - Pong! \n\n Not: Komutlar / ile başlar. \n\n Github: https://github.com/Bahcesehir-BIST-MTAL-Technical-Crew/workstation.js.git',
        };
		await interaction.reply(locales[interaction.locale] ?? 'Commands: \n\n /help - Provides information about the bot. \n /user - Provides information about the user. \n /server - Provides information about the server. \n /ping - Pong! \n\n Note: Commands start with /. \n\n Github: https://github.com/Bahcesehir-BIST-MTAL-Technical-Crew/workstation.js.git');
	},
};