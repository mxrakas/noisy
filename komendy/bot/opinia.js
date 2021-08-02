module.exports = {
    nazwa: `opinia`,
    cooldown: 60,
    callback: async (message, args, text, bot) => {
        const tresc = args.splice(0).join(` `)
        if (!tresc) {
            const embed = new Discord.MessageEmbed()
            embed
                .setTitle(`${emotki.blad} Błąd!`)
                .setColor("RED")
                .setDescription(`Nie podano opini!`)
                .setTimestamp()
                .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
            message.channel.send(embed)
        }
        else {
            if (message.content.includes(`discord.gg`) || message.content.includes(`http`)) {
                const embed = new Discord.MessageEmbed()
                embed
                    .setTitle(`${emotki.blad} Błąd!`)
                    .setColor("RED")
                    .setDescription(`Treść opini nie może zawierać linku!`)
                    .setTimestamp()
                    .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                message.channel.send(embed)
            }
            else {
                const embed1 = new Discord.MessageEmbed()
                embed1
                    .setTitle(`${emotki.tak} Sukces!`)
                    .setColor("RANDOM")
                    .setDescription(`Pomyślnie wysłano opinię na [serwer support](https://neavy.gq/discord)!`)
                    .setTimestamp()
                    .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                message.channel.send(embed1)
                const embed2 = new Discord.MessageEmbed()
                embed2
                    .setTitle(`${emotki.wykrzyknik} Nowa opinia!`)
                    .setColor("RANDOM")
                    .addField(`${emotki.ludzie} Osoba oceniająca:`, `${message.author} (${message.author.tag})`)
                    .addField(`${emotki.support} Treść opini:`, tresc)
                    .setTimestamp()
                    .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                    bot.channels.cache.get("861663835521941507").send(embed2)
            }
        }
    }
}