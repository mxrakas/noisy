module.exports = {
    nazwa: `powiadomienie`,
    callback: async (message, args, text, bot) => {
        if (message.author.id !== "831618083621175316") {
            const embed = new Discord.MessageEmbed()
            embed
                .setTitle(`${emotki.blad} Błąd!`)
                .setColor(kolor_embeda_bledu)
                .setDescription(`Nie posiadasz uprawnień globalnych!`)
                .addField(`${emotki.klodka} Potrzebne uprawnienia globalne:`, `\`Właściciel bota\``)
                .setTimestamp()
                .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
            message.channel.send(embed)
        }
        else {
            const tekst = args.join(` `).split(`|`)
            const tekstpowiadomienia = tekst[0] || ``
            const powod = tekst[1] || `Brak powodu`
            message.delete()
            const embed = new Discord.MessageEmbed()
            embed
                .setTitle(`${emotki.wykrzyknik} Status Bota!`)
                .setColor(kolor_embeda)
                .setDescription(tekstpowiadomienia)
                .addField(`${emotki.kursor} Powód:`, `${powod}`)
                .setTimestamp()
                .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
            serwerdev.channels.cache.get(`861663835340406789`).send(`<@&861663835143536643>`, embed)
        }
    }
}