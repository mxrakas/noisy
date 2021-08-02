module.exports = {
    nazwa: `odrzucpodanie`,
    callback: async (message, args, text, bot) => {
        if (message.author.id !== "831618083621175316") {
            const embed = new Discord.MessageEmbed()
            embed
                .setTitle(`${emotki.blad} Błąd!`)
                .setColor("RED")
                .setDescription(`Nie posiadasz uprawnień globalnych!`)
                .addField(`${emotki.klodka} Potrzebne uprawnienia globalne:`, `\`Właściciel bota\``)
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
                if (!args[1]) {
                    const embed = new Discord.MessageEmbed()
                    embed
                        .setTitle(`${emotki.blad} Błąd!`)
                        .setColor("RED")
                        .setDescription(`Nie podano typu podania!`)
                        .setTimestamp()
                        .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                    message.channel.send(embed)
                }
                else {
                    try {
                        const user = bot.users.cache.get(id)
                        const typ = args.splice(1).join(` `)
                        const embed1 = new Discord.MessageEmbed()
                        embed1
                            .setTitle(`${emotki.tak} Sukces!`)
                            .setColor("RANDOM")
                            .setDescription(`Pomyślnie wysłano informację o odrzuceniu podania na ${logi}!`)
                            .setTimestamp()
                            .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                        message.channel.send(embed1)
                        const embed2 = new Discord.MessageEmbed()
                        embed2
                            .setTitle(`${emotki.nie} Odrzucono podanie!`)
                            .setColor("RANDOM")
                            .addField(`${emotki.developer} Developer:`, `${message.author} (${message.author.tag})`)
                            .addField(`${emotki.ludzie} Użytkownik:`, `${user} (${user.tag})`)
                            .addField(`${emotki.discordpartner} Typ podania:`, typ)
                            .setThumbnail(user.displayAvatarURL({ dynamic: true }))
                            .setTimestamp()
                            .setFooter(`${user.tag} (${user.id})`, user.displayAvatarURL({ dynamic: true }))
                            bot.channels.cache.get("861663835340406792").send(embed2)
                    } catch {
                        const embed = new Discord.MessageEmbed()
                        embed
                            .setTitle(`${emotki.blad} Błąd!`)
                            .setColor(kolor_embeda_bledu)
                            .setDescription(`Nie mogę uzyskać dostępu do użytkownika na tym shardzie!`)
                            .setTimestamp()
                            .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                        message.channel.send(embed)
                        return
                    }
                }
            }
        }
    }
}