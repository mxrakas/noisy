module.exports = {
    nazwa: [`gunban`, `odpierdol`],
    callback: async (message, args, text, bot) => {
        const uprawnienia_globalne = db.fetch(`${message.author.id}.uprawnienia_globalne`) || `Brak`
        if (!uprawnienia_globalne.includes(`Administracja bota`)) {
            const embed = new Discord.MessageEmbed()
            embed
                .setTitle(`${emotki.blad} Błąd!`)
                .setColor("RED")
                .setDescription(`Nie posiadasz uprawnień globalnych!`)
                .addField(`${emotki.klodka} Potrzebne uprawnienia globalne:`, `\`Administracja bota\``)
                .setTimestamp()
                .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
            message.channel.send(embed)
        }
        else {
            if (!args[0]) {
                const embed = new Discord.MessageEmbed()
                embed
                    .setTitle(`${emotki.blad} Błąd!`)
                    .setColor("RED")
                    .setDescription(`Nie podano id osoby!`)
                    .setTimestamp()
                    .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                message.channel.send(embed)
            }
            else {
                const id = args[0]
                const myHumanJson = {
                }
                jsonWriter({
                    path: path.join(__dirname, `../../gbany/${id}.json`),
                    state: myHumanJson
                })
                try {
                    const user = bot.users.cache.get(id)
                    const embed = new Discord.MessageEmbed()
                    embed
                        .setTitle(`${emotki.tak} Sukces!`)
                        .setColor("RANDOM")
                        .setDescription(`Pomyślnie globalnie odbanowano użytkownika!`)
                        .addField(`${emotki.developer} Developer:`, `${message.author} (${message.author.tag})`)
                        .addField(`${emotki.ludzie} Użytkownik:`, `${user} (${user.tag})`)
                        .setThumbnail(user.displayAvatarURL({ dynamic: true }))
                        .setTimestamp()
                        .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                    message.channel.send(embed)
                } catch {
                    const embed = new Discord.MessageEmbed()
                    embed
                        .setTitle(`${emotki.tak} Sukces!`)
                        .setColor("RANDOM")
                        .setDescription(`Pomyślnie globalnie odbanowano użytkownika!`)
                        .addField(`${emotki.developer} Developer:`, `${message.author} (${message.author.tag})`)
                        .addField(`${emotki.ludzie} Użytkownik:`, `\`Nie mogę uzyskać dostępu do użytkownika na tym shardzie!\``)
                        .setTimestamp()
                        .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                    message.channel.send(embed)
                }
            }
        }
    }
}