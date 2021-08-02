module.exports = {
    nazwa: `ustawprofil`,
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
                if (!args[1]) {
                    const embed = new Discord.MessageEmbed()
                    embed
                        .setTitle(`${emotki.blad} Błąd!`)
                        .setColor(kolor_embeda_bledu)
                        .setDescription(`Nie podano emaila!`)
                        .setTimestamp()
                        .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                    message.channel.send(embed)
                }
                else {
                    if (message.content.includes(`discord.gg`) || message.content.includes(`http`)) {
                        const embed = new Discord.MessageEmbed()
                        embed
                            .setTitle(`${emotki.blad} Błąd!`)
                            .setColor(kolor_embeda_bledu)
                            .setDescription(`Email nie może zawierać linku!`)
                            .setTimestamp()
                            .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                        message.channel.send(embed)
                    }
                    else {
                        db.set(`${message.author.id}.email`, args[1])
                        const embed = new Discord.MessageEmbed()
                        embed
                            .setTitle(`${emotki.tak} Sukces!`)
                            .setColor(kolor_embeda)
                            .setDescription(`Pomyślnie ustawiono email na **${args[1]}**`)
                            .setTimestamp()
                            .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                        message.channel.send(embed)
                    }
                }
                return
            }
            if (podkategoria === `imie`) {
                if (!args[1]) {
                    const embed = new Discord.MessageEmbed()
                    embed
                        .setTitle(`${emotki.blad} Błąd!`)
                        .setColor(kolor_embeda_bledu)
                        .setDescription(`Nie podano imienia!`)
                        .setTimestamp()
                        .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                    message.channel.send(embed)
                }
                else {
                    if (message.content.includes(`discord.gg`) || message.content.includes(`http`)) {
                        const embed = new Discord.MessageEmbed()
                        embed
                            .setTitle(`${emotki.blad} Błąd!`)
                            .setColor(kolor_embeda_bledu)
                            .setDescription(`Imię nie może zawierać linku!`)
                            .setTimestamp()
                            .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                        message.channel.send(embed)
                    }
                    else {
                        db.set(`${message.author.id}.imie`, args[1])
                        const embed = new Discord.MessageEmbed()
                        embed
                            .setTitle(`${emotki.tak} Sukces!`)
                            .setColor(kolor_embeda)
                            .setDescription(`Pomyślnie ustawiono imię na **${args[1]}**`)
                            .setTimestamp()
                            .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                        message.channel.send(embed)
                    }
                }
                return
            }
            if (podkategoria === `plec`) {
                if (!args[1]) {
                    const embed = new Discord.MessageEmbed()
                    embed
                        .setTitle(`${emotki.blad} Błąd!`)
                        .setColor(kolor_embeda_bledu)
                        .setDescription(`Nie podano płci!`)
                        .addField(`${emotki.ludzie} Dostępne płci:`, `\`Kobieta\` \`Mężczyzna\``)
                        .setTimestamp()
                        .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                    message.channel.send(embed)
                }
                else {
                    if (message.content.includes(`discord.gg`) || message.content.includes(`http`)) {
                        const embed = new Discord.MessageEmbed()
                        embed
                            .setTitle(`${emotki.blad} Błąd!`)
                            .setColor(kolor_embeda_bledu)
                            .setDescription(`Płeć nie może zawierać linku!`)
                            .setTimestamp()
                            .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                        message.channel.send(embed)
                    }
                    else {
                        if ((args[1] === `Mężczyzna`) || args[1] === `Kobieta`) {
                            db.set(`${message.author.id}.plec`, args[1])
                            const embed = new Discord.MessageEmbed()
                            embed
                                .setTitle(`${emotki.tak} Sukces!`)
                                .setColor(kolor_embeda)
                                .setDescription(`Pomyślnie ustawiono płeć na **${args[1]}**`)
                                .setTimestamp()
                                .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                            message.channel.send(embed)
                        }
                        else {
                            const embed = new Discord.MessageEmbed()
                            embed
                                .setTitle(`${emotki.blad} Błąd!`)
                                .setColor(kolor_embeda_bledu)
                                .setDescription(`Podana płeć jest nieprawidłowa!`)
                                .setTimestamp()
                                .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                            message.channel.send(embed)
                        }
                    }
                }
                return
            }
            if (podkategoria === `wiek`) {
                if (!args[1]) {
                    const embed = new Discord.MessageEmbed()
                    embed
                        .setTitle(`${emotki.blad} Błąd!`)
                        .setColor(kolor_embeda_bledu)
                        .setDescription(`Nie podano wieku!`)
                        .setTimestamp()
                        .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                    message.channel.send(embed)
                }
                else {
                    if (message.content.includes(`discord.gg`) || message.content.includes(`http`)) {
                        const embed = new Discord.MessageEmbed()
                        embed
                            .setTitle(`${emotki.blad} Błąd!`)
                            .setColor(kolor_embeda_bledu)
                            .setDescription(`Wiek nie może zawierać linku!`)
                            .setTimestamp()
                            .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                        message.channel.send(embed)
                    }
                    else {
                        if (Number.isNaN(+args[1])) {
                            const embed = new Discord.MessageEmbed()
                            embed
                                .setTitle(`${emotki.blad} Błąd!`)
                                .setColor(kolor_embeda_bledu)
                                .setDescription(`Podany wiek jest nieprawidłowy!`)
                                .setTimestamp()
                                .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                            message.channel.send(embed)
                        }
                        else {
                            if ((args[1]) > 100) {
                                const embed = new Discord.MessageEmbed()
                                embed
                                    .setTitle(`${emotki.blad} Błąd!`)
                                    .setColor(kolor_embeda_bledu)
                                    .setDescription(`Wiek nie może przekraczać 100!`)
                                    .setTimestamp()
                                    .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                                message.channel.send(embed)
                            }
                            else {
                                if ((args[1]) < 1) {
                                    const embed = new Discord.MessageEmbed()
                                    embed
                                        .setTitle(`${emotki.blad} Błąd!`)
                                        .setColor(kolor_embeda_bledu)
                                        .setDescription(`Wiek nie może być mniejszy niż 1!`)
                                        .setTimestamp()
                                        .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                                    message.channel.send(embed)
                                }
                                else {
                                    db.set(`${message.author.id}.wiek`, args[1])
                                    const embed = new Discord.MessageEmbed()
                                    embed
                                        .setTitle(`${emotki.tak} Sukces!`)
                                        .setColor(kolor_embeda)
                                        .setDescription(`Pomyślnie ustawiono wiek na **${args[1]}**`)
                                        .setTimestamp()
                                        .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                                    message.channel.send(embed)
                                }
                            }
                        }
                    }
                }
                return
            }
            if (podkategoria === `wojewodztwo`) {
                if (!args[1]) {
                    const embed = new Discord.MessageEmbed()
                    embed
                        .setTitle(`${emotki.blad} Błąd!`)
                        .setColor(kolor_embeda_bledu)
                        .setDescription(`Nie podano województwa!`)
                        .setTimestamp()
                        .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                    message.channel.send(embed)
                }
                else {
                    if (message.content.includes(`discord.gg`) || message.content.includes(`http`)) {
                        const embed = new Discord.MessageEmbed()
                        embed
                            .setTitle(`${emotki.blad} Błąd!`)
                            .setColor(kolor_embeda_bledu)
                            .setDescription(`Województwo nie może zawierać linku!`)
                            .setTimestamp()
                            .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                        message.channel.send(embed)
                    }
                    else {
                        db.set(`${message.author.id}.wojewodztwo`, args[1])
                        const embed = new Discord.MessageEmbed()
                        embed
                            .setTitle(`${emotki.tak} Sukces!`)
                            .setColor(kolor_embeda)
                            .setDescription(`Pomyślnie ustawiono województwo na **${args[1]}**`)
                            .setTimestamp()
                            .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                        message.channel.send(embed)
                    }
                }
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