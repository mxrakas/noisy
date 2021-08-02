module.exports = {
    nazwa: `usunprofil`,
    callback: async (message, args, text, bot) => {
        const podkategoria = args[0]
        if (!podkategoria) {
            const embed = new Discord.MessageEmbed()
            embed
                .setTitle(`${emotki.blad} Błąd!`)
                .setColor(kolor_embeda_bledu)
                .setDescription(`Nie podano kategori!`)
                .addField(`${emotki.zebatki} Dostępne kategorie:`, `\`email\` \`imie\` \`plec\` \`wiek\` \`wojewodztwo\``)
                .setTimestamp()
                .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
            message.channel.send(embed)
        }
        else {
            if (podkategoria === `email`) {
                db.delete(`${message.author.id}.email`)
                const embed = new Discord.MessageEmbed()
                embed
                    .setTitle(`${emotki.tak} Sukces!`)
                    .setColor(kolor_embeda_bledu)
                    .setDescription(`Pomyślnie usunięto email z profilu!`)
                    .setTimestamp()
                    .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                message.channel.send(embed)
                return
            }
            if (podkategoria === `imie`) {
                db.delete(`${message.author.id}.imie`)
                const embed = new Discord.MessageEmbed()
                embed
                    .setTitle(`${emotki.tak} Sukces!`)
                    .setColor(kolor_embeda_bledu)
                    .setDescription(`Pomyślnie usunięto imię z profilu!`)
                    .setTimestamp()
                    .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                message.channel.send(embed)
                return
            }
            if (podkategoria === `plec`) {
                db.delete(`${message.author.id}.plec`)
                const embed = new Discord.MessageEmbed()
                embed
                    .setTitle(`${emotki.tak} Sukces!`)
                    .setColor(kolor_embeda_bledu)
                    .setDescription(`Pomyślnie usunięto płeć z profilu!`)
                    .setTimestamp()
                    .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                message.channel.send(embed)
                return
            }
            if (podkategoria === `wiek`) {
                db.delete(`${message.author.id}.wiek`)
                const embed = new Discord.MessageEmbed()
                embed
                    .setTitle(`${emotki.tak} Sukces!`)
                    .setColor(kolor_embeda_bledu)
                    .setDescription(`Pomyślnie usunięto wiek z profilu!`)
                    .setTimestamp()
                    .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                message.channel.send(embed)
                return
            }
            if (podkategoria === `wojewodztwo`) {
                db.delete(`${message.author.id}.wojewodztwo`)
                const embed = new Discord.MessageEmbed()
                embed
                    .setTitle(`${emotki.tak} Sukces!`)
                    .setColor(kolor_embeda_bledu)
                    .setDescription(`Pomyślnie usunięto województwo z profilu!`)
                    .setTimestamp()
                    .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                message.channel.send(embed)
                return
            }
            const embed = new Discord.MessageEmbed()
            embed
                .setTitle(`${emotki.blad} Błąd!`)
                .setColor(kolor_embeda_bledu)
                .setDescription(`Nie podano kategori!`)
                .addField(`${emotki.zebatki} Dostępne kategorie:`, `\`email\` \`imie\` \`plec\` \`wiek\` \`wojewodztwo\``)
                .setTimestamp()
                .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
            message.channel.send(embed)
        }
    }
}