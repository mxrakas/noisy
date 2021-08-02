module.exports = {
    nazwa: `ascii`,
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
            if (tekst.length > `50`) {
                const embed = new Discord.MessageEmbed()
                embed
                    .setTitle(`${emotki.blad} Błąd!`)
                    .setColor(kolor_embeda_bledu)
                    .setDescription(`Długość tekstu nie może przekraczać 50 znaków!`)
                    .setTimestamp()
                    .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                message.channel.send(embed)
            }
            else {
                if (!(tekst.includes(`ł`) || tekst.includes(`ó`) || tekst.includes(`ż`) || tekst.includes(`ź`) || tekst.includes(`ć`) || tekst.includes(`ń`) || tekst.includes(`ą`) || tekst.includes(`ś`) || tekst.includes(`ę`))) {
                    const url = `https://artii.herokuapp.com/make?text=${tekst}`
                    let data, response
                    try {
                        response = await axios.get(url)
                        data = response.data
                    } catch {
                        const embed = new Discord.MessageEmbed()
                        embed
                            .setTitle(`${emotki.blad} Błąd!`)
                            .setColor(kolor_embeda_bledu)
                            .setDescription(`Konwertowanie tekstu na ascii nie powiodło się!`)
                            .setTimestamp()
                            .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                        message.channel.send(embed)
                        return
                    }
                    const embed = new Discord.MessageEmbed()
                    embed
                        .setTitle(`${emotki.kursor} Ascii!`)
                        .setColor(kolor_embeda)
                        .setDescription(`\`\`\`js\n\n${data}\`\`\``)
                        .setTimestamp()
                        .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                    message.channel.send(embed)
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
}