module.exports = {
    nazwa: `emotki`,
    callback: async (message, args, text, bot) => {
        if (message.guild.emojis.cache.size === 0) {
            const embed = new Discord.MessageEmbed()
            embed
                .setTitle(`${emotki.blad} Błąd!`)
                .setColor(kolor_embeda_bledu)
                .setDescription(`Na tym serwerze nie ma żadnych emotek!`)
                .setTimestamp()
                .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
            message.channel.send(embed)
        }
        else {
            const x = []
            message.guild.emojis.cache.forEach(emotka => {
                x.push(`${emotka}`)
            })
            if (x.join(` `).length > 1900) {
                const embed = new Discord.MessageEmbed()
                embed
                    .setTitle(`${emotki.blad} Błąd!`)
                    .setColor(kolor_embeda_bledu)
                    .setDescription(`Ten serwer posiada zbyt dużo emotek by wyświetlić je w jednej wiadomości!`)
                    .setTimestamp()
                    .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                message.channel.send(embed)
            }
            else {
                const embed = new Discord.MessageEmbed()
                embed
                    .setTitle(`Emotki`)
                    .setColor(kolor_embeda)
                    .setDescription(`Liczba emotek: **${message.guild.emojis.cache.size}**\n${x.join(` `)}`)
                    .setTimestamp()
                    .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                message.channel.send(embed)
            }
        }
    }
}