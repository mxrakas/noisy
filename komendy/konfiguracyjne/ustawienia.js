module.exports = {
    nazwa: `ustawienia`,
    uprawnienia: `MANAGE_GUILD`,
    callback: async (message, args, text, bot,) => {
        const kategoria = args[0]
        if (!kategoria) {
            const embed = new Discord.MessageEmbed()
            embed
                .setTitle(`${emotki.blad} Błąd!`)
                .setColor("RED")
                .setDescription(`Nie podano kategorii!`)
                .addField(`Dostępne kategorie:`, `\`reklamowe\`, \`powitania\`, \`pozegnania\``)
                .setTimestamp()
                .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
            message.channel.send(embed)
        } else {
            if (kategoria.toLowerCase() === `powitania`) {
                if (!args[1]) {
                    const prefix = db.fetch(`${message.guild.id}.prefix`) || gprefix
                    const powitania_wlaczone = db.fetch(`${message.guild.id}.powitania_wlaczone`) || `Nie`
                    const powitania_kanal = db.fetch(`${message.guild.id}.powitania_kanal`) || `Brak`
                    const powitania_tekst = db.fetch(`${message.guild.id}.powitania_tekst`) || `Brak`
                    const powitania_kolor = db.fetch(`${message.guild.id}.powitania_kolor`) || `Brak`
                    const powitania_obrazek = db.fetch(`${message.guild.id}.powitania_obrazek`) || `Brak`
                    if (powitania_wlaczone === `Tak`) powitania_wlaczone_emotka = emotki.online
                    if (powitania_wlaczone === `Nie`) powitania_wlaczone_emotka = emotki.offline
                    const embed = new Discord.MessageEmbed()
                    embed
                        .setTitle(`${emotki.zebatki} Ustawienia`)
                        .setColor("RANDOM")
                        .setDescription(`Ustawienia serwera dotyczące powitań!\n\nZmienne, których możesz użyć:\n\`@osoba\` - Osoba, która dołączyła\n\`@tag\` - Tag osoby, która dołączyła\n\`@id\` - ID osoby, która dołączyła\n\`@liczba\` - Liczba osób na serwerze\n\`@nazwa\` - Nazwa serwera`)
                        .addField(`${powitania_wlaczone_emotka} x!ustawienia powitania wlaczone <Tak/Nie>`, `\`${powitania_wlaczone}\``)
                        .addField(`${emotki.staty} x!ustawienia powitania kanal <#kanal>`, `<#${powitania_kanal}>`)
                        .addField(`${emotki.kursor} x!ustawienia powitania tekst <tekst>`, `\`${powitania_tekst}\``)
                        .addField(`🎨 x!}ustawienia powitania kolor <#kolor>`, `\`${powitania_kolor}\``)
                        .addField(`🖼️ x!ustawienia powitania obrazek <link>`, `\`${powitania_obrazek}\``)
                        .setTimestamp()
                        .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                    message.channel.send(embed)
                }
                else {
                    const podkategoria = args[1]
                    if (podkategoria.toLowerCase() === `wlaczone`) {
                        if (args[2] === `tak`) {
                            db.set(`${message.guild.id}.powitania_wlaczone`, args[2])
                            const embed = new Discord.MessageEmbed()
                            embed
                                .setTitle(`${emotki.tak} Sukces!`)
                                .setColor("RANDOM")
                                .setDescription(`Pomyślnie **włączono** powitania!`)
                                .setTimestamp()
                                .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                            message.channel.send(embed)
                            return
                        }
                        if (args[2] === `nie`) {
                            db.set(`${message.guild.id}.powitania_wlaczone`, args[2])
                            db.delete(`${message.guild.id}.powitania_kanal`)
                            db.delete(`${message.guild.id}.powitania_tekst`)
                            db.delete(`${message.guild.id}.powitania_kolor`)
                            const embed = new Discord.MessageEmbed()
                            embed
                                .setTitle(`${emotki.tak} Sukces!`)
                                .setColor("RANDOM")
                                .setDescription(`Pomyślnie **wyłączono** powitania!`)
                                .setTimestamp()
                                .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                            message.channel.send(embed)
                            return
                        }
                        const embed = new Discord.MessageEmbed()
                        embed
                            .setTitle(`${emotki.blad} Błąd!`)
                            .setColor("RED")
                            .setDescription(`Nie podano czy powitania mają być włączone lub wyłączone!`)
                            .setTimestamp()
                            .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                        message.channel.send(embed)
                    }
                    if (podkategoria.toLowerCase() === `kanal`) {
                        const powitania_wlaczone = db.fetch(`${message.guild.id}.powitania_wlaczone`) || `Nie`
                        if (powitania_wlaczone === `Nie`) {
                            const embed = new Discord.MessageEmbed()
                            embed
                                .setTitle(`${emotki.blad} Błąd!`)
                                .setColor("RED")
                                .setDescription(`Powitania są wyłączone!`)
                                .setTimestamp()
                                .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                            message.channel.send(embed)
                        }
                        else {
                            const kanal = message.mentions.channels.first()
                            if (!kanal) {
                                const embed = new Discord.MessageEmbed()
                                embed
                                    .setTitle(`${emotki.blad} Błąd!`)
                                    .setColor("RED")
                                    .setDescription(`Nie oznaczono kanału!`)
                                    .setTimestamp()
                                    .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                                message.channel.send(embed)
                            }
                            else {
                                if (kanal.type !== `text`) {
                                    const embed = new Discord.MessageEmbed()
                                    embed
                                        .setTitle(`${emotki.blad} Błąd!`)
                                        .setColor("RED")
                                        .setDescription(`Nie oznaczono kanału tekstowego!`)
                                        .setTimestamp()
                                        .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                                    message.channel.send(embed)
                                }
                                else {
                                    db.set(`${message.guild.id}.powitania_kanal`, kanal.id)
                                    const embed = new Discord.MessageEmbed()
                                    embed
                                        .setTitle(`${emotki.tak} Sukces!`)
                                        .setColor("RANDOM")
                                        .setDescription(`Pomyślnie ustawiono kanał z powitaniami na **${kanal}**!`)
                                        .setTimestamp()
                                        .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                                    message.channel.send(embed)
                                }
                            }
                        }
                    }
                    if (podkategoria.toLowerCase() === `tekst`) {
                        const powitania_wlaczone = db.fetch(`${message.guild.id}.powitania_wlaczone`) || `Nie`
                        if (powitania_wlaczone === `Nie`) {
                            const embed = new Discord.MessageEmbed()
                            embed
                                .setTitle(`${emotki.blad} Błąd!`)
                                .setColor("RED")
                                .setDescription(`Powitania są wyłączone!`)
                                .setTimestamp()
                                .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                            message.channel.send(embed)
                        }
                        else {
                            if (!args[2]) {
                                const embed = new Discord.MessageEmbed()
                                embed
                                    .setTitle(`${emotki.blad} Błąd!`)
                                    .setColor("RED")
                                    .setDescription(`Nie podano tekstu!`)
                                    .setTimestamp()
                                    .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                                message.channel.send(embed)
                            }
                            else {
                                const tekst = args.splice(2).join(` `)
                                db.set(`${message.guild.id}.powitania_tekst`, tekst)
                                const embed = new Discord.MessageEmbed()
                                embed
                                    .setTitle(`${emotki.tak} Sukces!`)
                                    .setColor("RANDOM")
                                    .setDescription(`Pomyślnie ustawiono tekst powitań na **${tekst}**!`)
                                    .setTimestamp()
                                    .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                                message.channel.send(embed)
                            }
                        }
                    }
                    if (podkategoria.toLowerCase() === `kolor`) {
                        const powitania_wlaczone = db.fetch(`${message.guild.id}.powitania_wlaczone`) || `Nie`
                        if (powitania_wlaczone === `Nie`) {
                            const embed = new Discord.MessageEmbed()
                            embed
                                .setTitle(`${emotki.blad} Błąd!`)
                                .setColor("RED")
                                .setDescription(`Powitania są wyłączone!`)
                                .setTimestamp()
                                .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                            message.channel.send(embed)
                        }
                        else {
                            if (!args[2]) {
                                const embed = new Discord.MessageEmbed()
                                embed
                                    .setTitle(`${emotki.blad} Błąd!`)
                                    .setColor("RED")
                                    .setDescription(`Nie podano koloru!`)
                                    .setTimestamp()
                                    .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                                message.channel.send(embed)
                            }
                            else {
                                const kolor = args.splice(2).join(` `)
                                db.set(`${message.guild.id}.powitania_kolor`, kolor)
                                const embed = new Discord.MessageEmbed()
                                embed
                                    .setTitle(`${emotki.tak} Sukces!`)
                                    .setColor("RANDOM")
                                    .setDescription(`Pomyślnie ustawiono kolor powitań na **${kolor}**!`)
                                    .setTimestamp()
                                    .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                                message.channel.send(embed)
                            }
                        }
                    }
                    if (podkategoria.toLowerCase() === `obrazek`) {
                        const powitania_wlaczone = db.fetch(`${message.guild.id}.powitania_wlaczone`) || `Nie`
                        if (powitania_wlaczone === `Nie`) {
                            const embed = new Discord.MessageEmbed()
                            embed
                                .setTitle(`${emotki.blad} Błąd!`)
                                .setColor("RED")
                                .setDescription(`Powitania są wyłączone!`)
                                .setTimestamp()
                                .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                            message.channel.send(embed)
                        }
                        else {
                            if (!args[2]) {
                                const embed = new Discord.MessageEmbed()
                                embed
                                    .setTitle(`${emotki.blad} Błąd!`)
                                    .setColor("RED")
                                    .setDescription(`Nie podano linku!`)
                                    .setTimestamp()
                                    .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                                message.channel.send(embed)
                            }
                            else {
                                const link = args.splice(2).join(` `)
                                const embed1 = new Discord.MessageEmbed()
                                embed1
                                    .setTitle(`${emotki.tak} Sukces!`)
                                    .setColor("RANDOM")
                                    .setDescription(`Pomyślnie wysłano obrazek do weryfikacji!`)
                                    .setTimestamp()
                                    .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                                message.channel.send(embed1)
                                const embed2 = new Discord.MessageEmbed()
                                embed2
                                    .setTitle(`${emotki.wykrzyknik} Napisano podanie!`)
                                    .setColor("RANDOM")
                                    .addField(`${emotki.ludzie} Użytkownik:`, `${message.author} (${message.author.tag})`)
                                    .addField(`${emotki.kursor} Serwer:`, `${message.guild.name} (${message.guild.id})`)
                                    .addField(`${emotki.discordpartner} Typ podania:`, `Obrazki / powitania`)
                                    .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
                                    .setTimestamp()
                                    .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                                   bot.channels.cache.get("861663835340406791").send(embed2)
                                const embed3 = new Discord.MessageEmbed()
                                embed3
                                    .setTitle(`${emotki.wykrzyknik} Napisano podanie!`)
                                    .setColor("RANDOM")
                                    .addField(`${emotki.ludzie} Użytkownik:`, `${message.author} (${message.author.tag})`)
                                    .addField(`${emotki.kursor} Serwer:`, `${message.guild.name} (${message.guild.id})`)
                                    .addField(`🔗 Link:`, link)
                                    .addField(`${emotki.discordpartner} Typ podania:`, `Obrazki / powitania`)
                                    .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
                                    .setTimestamp()
                                    .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                                    bot.channels.cache.get("861663835706753066").send(embed3)
                            }
                        }
                    }
                }
                return
            }
            if (kategoria.toLowerCase() === `pozegnania`) {
                if (!args[1]) {
                    const prefix = db.fetch(`${message.guild.id}.prefix`) || gprefix
                    const pozegnania_wlaczone = db.fetch(`${message.guild.id}.pozegnania_wlaczone`) || `Nie`
                    const pozegnania_kanal = db.fetch(`${message.guild.id}.pozegnania_kanal`) || `Brak`
                    const pozegnania_tekst = db.fetch(`${message.guild.id}.pozegnania_tekst`) || `Brak`
                    const pozegnania_kolor = db.fetch(`${message.guild.id}.pozegnania_kolor`) || `Brak`
                    const pozegnania_obrazek = db.fetch(`${message.guild.id}.pozegnania_obrazek`) || `Brak`
                    if (pozegnania_wlaczone === `Tak`) pozegnania_wlaczone_emotka = emotki.online
                    if (pozegnania_wlaczone === `Nie`) pozegnania_wlaczone_emotka = emotki.offline
                    const embed = new Discord.MessageEmbed()
                    embed
                        .setTitle(`${emotki.zebatki} Ustawienia`)
                        .setColor("RANDOM")
                        .setDescription(`Ustawienia serwera dotyczące pożegnań!\n\nZmienne, których możesz użyć:\n\`@osoba\` - Osoba, która opuściła\n\`@tag\` - Tag osoby, która opuściła\n\`@id\` - ID osoby, która opuściła\n\`@liczba\` - Liczba osób na serwerze\n\`@nazwa\` - Nazwa serwera`)
                        .addField(`${pozegnania_wlaczone_emotka} ${prefix}ustawienia pozegnania wlaczone <Tak/Nie>`, `\`${pozegnania_wlaczone}\``)
                        .addField(`${emotki.staty} ${prefix}ustawienia pozegnania kanal <#kanal>`, `<#${pozegnania_kanal}>`)
                        .addField(`${emotki.kursor} ${prefix}ustawienia pozegnania tekst <tekst>`, `\`${pozegnania_tekst}\``)
                        .addField(`🎨 ${prefix}ustawienia pozegnania kolor <#kolor>`, `\`${pozegnania_kolor}\``)
                        .addField(`🖼️ ${prefix}ustawienia pozegnania obrazek <link>`, `\`${pozegnania_obrazek}\``)
                        .setTimestamp()
                        .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                    message.channel.send(embed)
                }
                else {
                    const podkategoria = args[1]
                    if (podkategoria.toLowerCase() === `wlaczone`) {
                        if (args[2] === `Tak`) {
                            db.set(`${message.guild.id}.pozegnania_wlaczone`, args[2])
                            const embed = new Discord.MessageEmbed()
                            embed
                                .setTitle(`${emotki.tak} Sukces!`)
                                .setColor("RANDOM")
                                .setDescription(`Pomyślnie **włączono** pożegnania!`)
                                .setTimestamp()
                                .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                            message.channel.send(embed)
                            return
                        }
                        if (args[2] === `Nie`) {
                            db.set(`${message.guild.id}.pozegnania_wlaczone`, args[2])
                            db.delete(`${message.guild.id}.pozegnania_kanal`)
                            db.delete(`${message.guild.id}.pozegnania_tekst`)
                            db.delete(`${message.guild.id}.pozegnania_kolor`)
                            const embed = new Discord.MessageEmbed()
                            embed
                                .setTitle(`${emotki.tak} Sukces!`)
                                .setColor("RANDOM")
                                .setDescription(`Pomyślnie **wyłączono** pożegnania!`)
                                .setTimestamp()
                                .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                            message.channel.send(embed)
                            return
                        }
                        const embed = new Discord.MessageEmbed()
                        embed
                            .setTitle(`${emotki.blad} Błąd!`)
                            .setColor("RED")
                            .setDescription(`Nie podano czy pożegnania mają być włączone lub wyłączone!`)
                            .setTimestamp()
                            .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                        message.channel.send(embed)
                    }
                    if (podkategoria.toLowerCase() === `kanal`) {
                        const pozegnania_wlaczone = db.fetch(`${message.guild.id}.pozegnania_wlaczone`) || `Nie`
                        if (pozegnania_wlaczone === `Nie`) {
                            const embed = new Discord.MessageEmbed()
                            embed
                                .setTitle(`${emotki.blad} Błąd!`)
                                .setColor("RED")
                                .setDescription(`Pożegnania są wyłączone!`)
                                .setTimestamp()
                                .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                            message.channel.send(embed)
                        }
                        else {
                            const kanal = message.mentions.channels.first()
                            if (!kanal) {
                                const embed = new Discord.MessageEmbed()
                                embed
                                    .setTitle(`${emotki.blad} Błąd!`)
                                    .setColor("RED")
                                    .setDescription(`Nie oznaczono kanału!`)
                                    .setTimestamp()
                                    .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                                message.channel.send(embed)
                            }
                            else {
                                if (kanal.type !== `text`) {
                                    const embed = new Discord.MessageEmbed()
                                    embed
                                        .setTitle(`${emotki.blad} Błąd!`)
                                        .setColor("RED")
                                        .setDescription(`Nie oznaczono kanału tekstowego!`)
                                        .setTimestamp()
                                        .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                                    message.channel.send(embed)
                                }
                                else {
                                    const kanal = message.mentions.channels.first()
                                    db.set(`${message.guild.id}.pozegnania_kanal`, kanal.id)
                                    const embed = new Discord.MessageEmbed()
                                    embed
                                        .setTitle(`${emotki.tak} Sukces!`)
                                        .setColor("RANDOM")
                                        .setDescription(`Pomyślnie ustawiono kanał z pożegnaniami na **${kanal}**!`)
                                        .setTimestamp()
                                        .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                                    message.channel.send(embed)
                                }
                            }
                        }
                    }
                    if (podkategoria.toLowerCase() === `tekst`) {
                        const pozegnania_wlaczone = db.fetch(`${message.guild.id}.pozegnania_wlaczone`) || `Nie`
                        if (pozegnania_wlaczone === `Nie`) {
                            const embed = new Discord.MessageEmbed()
                            embed
                                .setTitle(`${emotki.blad} Błąd!`)
                                .setColor("RED")
                                .setDescription(`Pożegnania są wyłączone!`)
                                .setTimestamp()
                                .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                            message.channel.send(embed)
                        }
                        else {
                            if (!args[2]) {
                                const embed = new Discord.MessageEmbed()
                                embed
                                    .setTitle(`${emotki.blad} Błąd!`)
                                    .setColor("RED")
                                    .setDescription(`Nie podano tekstu!`)
                                    .setTimestamp()
                                    .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                                message.channel.send(embed)
                            }
                            else {
                                const tekst = args.splice(2).join(` `)
                                db.set(`${message.guild.id}.pozegnania_tekst`, tekst)
                                const embed = new Discord.MessageEmbed()
                                embed
                                    .setTitle(`${emotki.tak} Sukces!`)
                                    .setColor("RANDOM")
                                    .setDescription(`Pomyślnie ustawiono tekst pożegnań na **${tekst}**!`)
                                    .setTimestamp()
                                    .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                                message.channel.send(embed)
                            }
                        }
                    }
                    if (podkategoria.toLowerCase() === `kolor`) {
                        const pozegnania_wlaczone = db.fetch(`${message.guild.id}.pozegnania_wlaczone`) || `Nie`
                        if (pozegnania_wlaczone === `Nie`) {
                            const embed = new Discord.MessageEmbed()
                            embed
                                .setTitle(`${emotki.blad} Błąd!`)
                                .setColor("RED")
                                .setDescription(`Pożegnania są wyłączone!`)
                                .setTimestamp()
                                .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                            message.channel.send(embed)
                        }
                        else {
                            if (!args[2]) {
                                const embed = new Discord.MessageEmbed()
                                embed
                                    .setTitle(`${emotki.blad} Błąd!`)
                                    .setColor("RED")
                                    .setDescription(`Nie podano koloru!`)
                                    .setTimestamp()
                                    .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                                message.channel.send(embed)
                            }
                            else {
                                const kolor = args.splice(2).join(` `)
                                db.set(`${message.guild.id}.pozegnania_kolor`, kolor)
                                const embed = new Discord.MessageEmbed()
                                embed
                                    .setTitle(`${emotki.tak} Sukces!`)
                                    .setColor("RANDOM")
                                    .setDescription(`Pomyślnie ustawiono kolor pożegnań na **${kolor}**!`)
                                    .setTimestamp()
                                    .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                                message.channel.send(embed)
                            }
                        }
                    }
                    if (podkategoria.toLowerCase() === `obrazek`) {
                        const pozegnania_wlaczone = db.fetch(`${message.guild.id}.pozegnania_wlaczone`) || `Nie`
                        if (pozegnania_wlaczone === `Nie`) {
                            const embed = new Discord.MessageEmbed()
                            embed
                                .setTitle(`${emotki.blad} Błąd!`)
                                .setColor("RED")
                                .setDescription(`Pożegnania są wyłączone!`)
                                .setTimestamp()
                                .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                            message.channel.send(embed)
                        }
                        else {
                            if (!args[2]) {
                                const embed = new Discord.MessageEmbed()
                                embed
                                    .setTitle(`${emotki.blad} Błąd!`)
                                    .setColor("RED")
                                    .setDescription(`Nie podano linku!`)
                                    .setTimestamp()
                                    .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                                message.channel.send(embed)
                            }
                            else {
                                const link = args.splice(2).join(` `)
                                const embed1 = new Discord.MessageEmbed()
                                embed1
                                    .setTitle(`${emotki.tak} Sukces!`)
                                    .setColor("RANDOM")
                                    .setDescription(`Pomyślnie wysłano obrazek do weryfikacji!`)
                                    .setTimestamp()
                                    .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                                message.channel.send(embed1)
                                const embed2 = new Discord.MessageEmbed()
                                embed2
                                    .setTitle(`${emotki.wykrzyknik} Napisano podanie!`)
                                    .setColor("RANDOM")
                                    .addField(`${emotki.ludzie} Użytkownik:`, `${message.author} (${message.author.tag})`)
                                    .addField(`${emotki.kursor} Serwer:`, `${message.guild.name} (${message.guild.id})`)
                                    .addField(`${emotki.discordpartner} Typ podania:`, `Obrazki / pożegnania`)
                                    .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
                                    .setTimestamp()
                                    .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                                    bot.channels.cache.get("861663835340406791").send(embed2)
                      
                                const embed3 = new Discord.MessageEmbed()
                                embed3
                                    .setTitle(`${emotki.wykrzyknik} Napisano podanie!`)
                                    .setColor(kolor_embeda)
                                    .addField(`${emotki.ludzie} Użytkownik:`, `${message.author} (${message.author.tag})`)
                                    .addField(`${emotki.kursor} Serwer:`, `${message.guild.name} (${message.guild.id})`)
                                    .addField(`🔗 Link:`, link)
                                    .addField(`${emotki.discordpartner} Typ podania:`, `Obrazki / pożegnania`)
                                    .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
                                    .setTimestamp()
                                    .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                                    bot.channels.cache.get("861663835706753066").send(embed3)
                            }
                        }
                    }
                }
                return
            }
            const embed = new Discord.MessageEmbed()
            embed
                .setTitle(`${emotki.blad} Błąd!`)
                .setColor("RED")
                .setDescription(`Nie podano kategorii!`)
                .addField(`${emotki.zebatki} Dostępne kategorie:`, `\`prefix\` \`powitania\` \`pozegnania\``)
                .setTimestamp()
                .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
            message.channel.send(embed)
        }
    }
}