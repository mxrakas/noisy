module.exports = {
    nazwa: `emotkuj`,
    callback: async (message, args, text, bot) => {
        const tekst = args.splice(0).join(` `)
        if (!tekst) {
            const embed = new Discord.MessageEmbed()
            embed
                .setTitle(`${emotki.blad} Błąd!`)
                .setColor(kolor_embeda_bledu)
                .setDescription(`Nie podano tekstu!`)
                .setTimestamp()
                .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
            message.channel.send(embed)
        }
        else {
            if (!(tekst.includes(`ł`) || tekst.includes(`ó`) || tekst.includes(`ż`) || tekst.includes(`ź`) || tekst.includes(`ć`) || tekst.includes(`ń`) || tekst.includes(`ą`) || tekst.includes(`ś`) || tekst.includes(`ę`))) {
                try {
                    const wynik = emoji.convert(tekst)
                    const embed = new Discord.MessageEmbed()
                    embed
                        .setTitle(`🔤 Emotkowanie!`)
                        .setColor(kolor_embeda)
                        .setDescription(wynik)
                        .setTimestamp()
                        .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({dynamic: true}))
                    message.channel.send(embed)
                } catch {
                    {
                        const embed = new Discord.MessageEmbed()
                        embed
                            .setTitle(`${emotki.blad} Błąd!`)
                            .setColor(kolor_embeda_bledu)
                            .setDescription(`Emotkowanie tekstu nie powiodło się!`)
                            .setTimestamp()
                            .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({dynamic: true}))
                        message.channel.send(embed)
                    }
                }
            }
            else {
                const embed = new Discord.MessageEmbed()
                embed
                    .setTitle(`${emotki.blad} Błąd!`)
                    .setColor(kolor_embeda_bledu)
                    .setDescription(`Tekst nie może zawierać polskich znaków!`)
                    .setTimestamp()
                    .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                message.channel.send(embed)
            }
        }
    }
}