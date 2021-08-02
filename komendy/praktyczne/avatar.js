module.exports = {
    nazwa: [`avatar`, `av`],
    callback: async (message, args, text, bot) => {
        const target = bot.users.cache.get(args[0]) || message.mentions.users.first() || message.author
        const embed = new Discord.MessageEmbed()
        embed
            .setTitle(`🖼️ Avatar`)
            .setColor(kolor_embeda)
            .addField(`Avatar użytkownika ${target.tag}`, `[[kliknij]](${target.displayAvatarURL({ dynamic: true })}?size=4096)`)
            .setImage(`${target.displayAvatarURL({ dynamic: true })}?size=4096`)
            .setTimestamp()
            .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
        message.channel.send(embed)
    }
}