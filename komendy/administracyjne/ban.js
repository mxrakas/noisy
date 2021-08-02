module.exports = {
    nazwa: [`ban`, `b`],
    uprawnienia: `BAN_MEMBERS`,
    callback: async (message, args, text, bot) => {
        const wzmianka1 = message.mentions.members.first()
        const wzmianka2 = message.mentions.users.first()
        const powod = args.splice(1).join(` `) || `Brak powodu`
        if (!wzmianka1) {
            const embed = new Discord.MessageEmbed()
            embed
                .setTitle(`${emotki.blad} Błąd!`)
                .setColor("RED")
                .setDescription(`Nie oznaczono osoby!`)
                .setTimestamp()
                .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
            message.channel.send(embed)
        }
        else {
            wzmianka1.ban({ days: 0, reason: `${powod} - Administrator: ${message.author.tag}` }).then(() => {
                db.delete(`${message.guild.id}.${wzmianka2.id}.iloscwarnow`)
                // const randomgif = `http://patryczekktv.pl/img/ban${Math.floor(Math.random() * 5) + 1}.gif`
                const embed1 = new Discord.MessageEmbed()
                embed1
                    .setTitle(`${emotki.tak} Sukces!`)
                    .setColor("RANDOM")
                    .setDescription(`Pomyślnie zbanowano użytkownika!`)
                    .addField(`${emotki.wykrzyknik} Administrator:`, `${message.author} (${message.author.tag})`)
                    .addField(`${emotki.ludzie} Użytkownik:`, `${wzmianka2} (${wzmianka2.tag})`)
                    .addField(`${emotki.support} Powód:`, powod)
                    .addField(`${emotki.klodka} Serwer:`, message.guild.name)
                    .setThumbnail(wzmianka2.displayAvatarURL({ dynamic: true }))
                    // .setImage(randomgif)
                    .setTimestamp()
                    .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                message.channel.send(embed1)
                const embed2 = new Discord.MessageEmbed()
                embed2
                    .setTitle(`${emotki.tak} Ban!`)
                    .setColor("RANDOM")
                    .setDescription(`Zostałeś(-aś) zbanowany!`)
                    .addField(`${emotki.wykrzyknik} Administrator:`, `${message.author} (${message.author.tag})`)
                    .addField(`${emotki.ludzie} Użytkownik:`, `${wzmianka2} (${wzmianka2.tag})`)
                    .addField(`${emotki.support} Powód:`, powod)
                    .addField(`${emotki.klodka} Serwer:`, message.guild.name)
                    .setThumbnail(wzmianka2.displayAvatarURL({ dynamic: true }))
                    // .setImage(randomgif)
                    .setTimestamp()
                    .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                wzmianka2.send(embed2).catch(() => { return })
            }).catch(() => {
                const embed = new Discord.MessageEmbed()
                embed
                    .setTitle(`${emotki.blad} Błąd!`)
                    .setColor("RED")
                    .setDescription(`Nie posiadam uprawnień!`)
                    .setTimestamp()
                    .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                message.channel.send(embed)
            })
        }
    }
}