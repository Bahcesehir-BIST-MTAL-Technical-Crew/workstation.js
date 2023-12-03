const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('user')
        .setDescription('Provides information about the user.'),
    async execute(interaction) {
        const locales = {
            en: `This command was run by ${interaction.user.username}, who joined on ${interaction.member.joinedAt}.`,
            de: `Dieser Befehl wurde von ${interaction.user.username} ausgeführt, der am ${interaction.member.joinedAt} beigetreten ist.`,
            tr: `Bu komutu ${interaction.user.username} adlı kullanıcı tarafından, ${interaction.member.joinedAt} tarihinde kullandı.`,
        };
		await interaction.reply(locales[interaction.locale] ?? `This command was run by ${interaction.user.username}, who joined on ${interaction.member.joinedAt}.`);
    },
};