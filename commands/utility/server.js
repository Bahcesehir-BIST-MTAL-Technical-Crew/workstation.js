const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('server')
		.setDescription('Provides information about the server.'),
	async execute(interaction) {
        const locales = {
            en: `This server is ${interaction.guild.name} and has ${interaction.guild.memberCount} members.`,
            de: `Dieser Server ist ${interaction.guild.name} und hat ${interaction.guild.memberCount} Mitglieder.`,
            tr: `Bu sunucu ${interaction.guild.name} ve ${interaction.guild.memberCount} üyeye sahip.`,
        };
        await interaction.reply(locales[interaction.locale] ?? `This server is ${interaction.guild.name} and has ${interaction.guild.memberCount} members.`);
	},
};