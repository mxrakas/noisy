module.exports = {
    nazwa: `kalkulator`,
    // blokadacheck: `Tak!`,
    // blokadareason: `Naprawa błędów`,
    callback: async (message, args, text, bot) => {
        const obliczenia = args.join(` `)
        if (!obliczenia) {
            const embed = new Discord.MessageEmbed()
            embed
                .setTitle(`${emotki.blad} Błąd!`)
                .setColor(kolor_embeda_bledu)
                .setDescription(`Nie podano obliczeń!`)
                .setTimestamp()
                .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
            message.channel.send(embed)
        }
        else {
            try {
                if (obliczenia.includes(`random`)) throw new Error(`O ty cwaniaczku 😜`)
                if (obliczenia.includes(`forEach`)) throw new Error(`O ty cwaniaczku 😜`)
                if (obliczenia.includes(`"h";"`)) throw new Error(`O ty cwaniaczku 😜`)
                if (obliczenia.includes(`"use strict";`)) throw new Error(`O ty cwaniaczku 😜`)
                if (obliczenia.includes(`:`)) throw new Error(`Użyj /`)
                const wynik = await math.evaluate(obliczenia)
                const embed = new Discord.MessageEmbed()
                embed
                    .setTitle(`${emotki.tak} Sukces!`)
                    .setColor(kolor_embeda)
                    .setDescription(`Pomyślnie wykonano obliczenia!`)
                    .addField(`📥 Obliczenia:`, obliczenia)
                    .addField(`📤 Wynik:`, wynik)
                    .setTimestamp()
                    .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                message.channel.send(embed)
            } catch (e) {
                const embed = new Discord.MessageEmbed()
                embed
                    .setTitle(`${emotki.blad} Błąd!`)
                    .setColor(kolor_embeda_bledu)
                    .setDescription(`Wystąpił błąd podczas wykonywania obliczeń!\n**${e}**`)
                    .setTimestamp()
                    .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                message.channel.send(embed)
            }
        }
    }
}