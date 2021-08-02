module.exports = {
    nazwa: [`eval`, `e`],
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
                    .setDescription(`Nie podano kodu!`)
                    .setTimestamp()
                    .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                message.channel.send(embed)
            }
            else {
                const kod = args.join(` `)
                // if (!(kod.includes(`token`) || kod.includes(`TOKEN`))) {
                try {
                    const wynik = await eval(kod)
                    const embed = new Discord.MessageEmbed()
                    embed
                        .setTitle(`${emotki.tak} Sukces!`)
                        .setColor("RANDOM")
                        .setDescription(`Pomyślnie wykonano kod!`)
                        .addField(`📥 Kod wejściowy:`, kod)
                        .addField(`📤 Kod wyjściowy:`, wynik)
                        .setTimestamp()
                        .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                    message.channel.send(embed)
                } catch (e) {
                    const embed = new Discord.MessageEmbed()
                    embed
                        .setTitle(`${emotki.blad} Błąd!`)
                        .setColor("RED")
                        .setDescription(`Wystąpił błąd podczas wykonywania kodu!\n**${e}**`)
                        .setTimestamp()
                        .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                    message.channel.send(embed)
                }
                // }
                // else {
                //     const embed1 = new Discord.MessageEmbed()
                //     embed1
                //         .setTitle(`${emotki.blad} Błąd!`)
                //         .setColor(kolor_embeda_bledu)
                //         .setDescription(`🛡️ Wykryto próbę naruszenia bezpieczeństwa bota!`)
                //         .addField(`Operacja:`, `Próba wyświetlenia tokenu bota`)
                //         .addField(`Wynik:`, `Zablokowanie operacji oraz wysłanie zgłoszenia na [serwer developerski](https://neavy.gq/discord)!`)
                //                             .setTimestamp()
                //         .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                //     message.channel.send(embed1)
                //     const embed2 = new Discord.MessageEmbed()
                //     embed2
                //         .setTitle(`${emotki.wykrzyknik} Nowe zgłoszenie!`)
                //         .setColor(kolor_embeda)
                //         .addField(`${emotki.ludzie} Osoba zgłaszająca:`, `${bot.user} (${bot.user.tag})`)
                //         .addField(`${emotki.ludzie} Osoba złoszona:`, `${message.author} (${message.author.tag})`)
                //         .addField(`${emotki.support} Powód zgłoszenia:`, `Próba wyświetlenia tokenu bota`)
                //                    .setTimestamp()
                //         .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                //     zgloszenia.send(`<@&859896969928376361>`, embed2)
                // }
            }
        }
    }
}