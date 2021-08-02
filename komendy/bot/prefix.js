module.exports = {
    nazwa: `prefix`,
    callback: async (message, args, text, bot) => {
        const prefix = db.fetch(`${message.guild.id}.prefix`) || gprefix
        const embed = new Discord.MessageEmbed()
        embed
            .setTitle(`Prefix`)
            .setColor("RANDOM")
            .setDescription(`Użycie: **${prefix}ustawienia prefix**\n\nMój prefix na tym serwerze to **${prefix}**\nMój prefix globalny to **${gprefix}**`)
            .setTimestamp()
            .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
        message.channel.send(embed)
    }
}