module.exports = {
    commands: [`mute`],
    callback: async (message, args, text, bot) => {
        if (!message.member.permissions.has(`MANAGE_MESSAGES`)) {
            const embed = new Discord.MessageEmbed()
            embed
                .setTitle(`Błąd!`)
                .setColor(kolor_embeda_bledu)
                .setDescription(`${emotki.nie} Nie posiadasz uprawnień!\n${emotki.klodka} Wymagane uprawnienia: **Zarządzanie wiadomościami**`)
                .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
            message.channel.send(embed)
        }
        else {
            const wzmianka1 = message.mentions.members.first()
            const wzmianka2 = message.mentions.users.first()
            const powod = args.splice(1).join(` `)
            if (!wzmianka1) {
                const embed = new Discord.MessageEmbed()
                embed
                    .setTitle(`Błąd!`)
                    .setColor(kolor_embeda_bledu)
                    .setDescription(`${emotki.nie} Musisz oznaczyć osobę!`)
                    .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                message.channel.send(embed)
            }
            else {
                if (!powod) {
                    const embed = new Discord.MessageEmbed()
                    embed
                        .setTitle(`Błąd!`)
                        .setColor(kolor_embeda_bledu)
                        .setDescription(`${emotki.nie} Musisz podać powód!`)
                        .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                    message.channel.send(embed)
                }
                else {
                    const role = message.guild.roles.cache.find(role => role.name.toLowerCase() === `muted`)
                    if (!role) {
                        try {
                            const embed = new Discord.MessageEmbed()
                            embed
                                .setTitle(`Błąd!`)
                                .setColor(kolor_embeda)
                                .setDescription(`${emotki.nie} Nie znaleziono roli **Muted**!\n${emotki.ladowanie} Tworzenie roli...`)
                                .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                            message.channel.send(embed)
                            let muterole = await message.guild.roles.create({
                                data: {
                                    name: `Muted`,
                                    permissions: []
                                }
                            });
                            message.guild.channels.cache.filter(c => c.type === `text`).forEach(async (channel, id) => {
                                await channel.createOverwrite(muterole, {
                                    SEND_MESSAGES: false,
                                    ADD_REACTIONS: false
                                })
                            });
                            embed
                                .setTitle(`Sukces!`)
                                .setColor(kolor_embeda)
                                .setDescription(`${emotki.tak} Pomyślnie stworzono rangę **Muted**!`)
                                .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                            message.channel.send(embed)
                            return
                        } catch (e) {
                            const embed = new Discord.MessageEmbed()
                            embed
                                .setTitle(`Błąd!`)
                                .setColor(kolor_embeda_bledu)
                                .setDescription(`${emotki.nie} Bot nie posiada uprawnień!`)
                                .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                            message.channel.send(embed)
                        }
                    }
                    else {
                        let role2 = message.guild.roles.cache.find(r => r.name.toLowerCase() === `muted`)
                        if (wzmianka1.roles.cache.has(role2.id)) {
                            const embed = new Discord.MessageEmbed()
                            embed
                                .setTitle(`Błąd!`)
                                .setColor(kolor_embeda_bledu)
                                .setDescription(`${emotki.nie} ${wzmianka1} jest już wyciszony!`)
                                .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                            message.channel.send(embed)
                        }
                        else {
                            wzmianka1.roles.add(role2).then(() => {
                                const embed1 = new Discord.MessageEmbed()
                                embed1
                                    .setTitle(`Sukces!`)
                                    .setColor(kolor_embeda)
                                    .setDescription(`${emotki.tak} Pomyślnie wyciszono użytkownika!`)
                                    .addField(`${emotki.wykrzyknik} Administrator:`, `${message.author} (${message.author.tag})`)
                                    .addField(`${emotki.ludzie} Użytkownik:`, `${wzmianka2} (${wzmianka2.tag})`)
                                    .addField(`${emotki.support} Powód:`, `${powod}`)
                                    .addField(`${emotki.klodka} Serwer:`, `${message.guild.name}`)
                                    .setThumbnail(wzmianka2.displayAvatarURL({ dynamic: true }))
                                    .setImage(randomgif)
                                    .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                                message.channel.send(embed1)
                                const embed2 = new Discord.MessageEmbed()
                                embed2
                                    .setTitle(`Wyciszenie!`)
                                    .setColor(kolor_embeda)
                                    .setDescription(`${emotki.tak} Zostałeś/aś wyciszony!`)
                                    .addField(`${emotki.wykrzyknik} Administrator:`, `${message.author} (${message.author.tag})`)
                                    .addField(`${emotki.ludzie} Użytkownik:`, `${wzmianka2} (${wzmianka2.tag})`)
                                    .addField(`${emotki.support} Powód:`, `${powod}`)
                                    .addField(`${emotki.klodka} Serwer:`, `${message.guild.name}`)
                                    .setThumbnail(wzmianka2.displayAvatarURL({ dynamic: true }))
                                    .setImage(randomgif)
                                    .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                                wzmianka2.send(embed2).catch(() => { return })
                            }).catch(() => {
                                const embed = new Discord.MessageEmbed()
                                embed
                                    .setTitle(`Błąd!`)
                                    .setColor(kolor_embeda_bledu)
                                    .setDescription(`${emotki.nie} Bot nie posiada uprawnień!`)
                                    .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                                message.channel.send(embed)
                            });
                        }
                    }
                }
            }
        }
    }
}