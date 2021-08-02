module.exports = {
    nazwa: `koala`,
    callback: async (message, args, text, bot) => {
        const url = `https://some-random-api.ml/img/koala`
        let data, response
        try {
            response = await axios.get(url)
            data = response.data
        } catch {
            const embed = new Discord.MessageEmbed()
            embed
                .setTitle(`${emotki.blad} Błąd!`)
                .setColor(kolor_embeda_bledu)
                .setDescription(`Wygenerowanie zdjęcia koali nie powiodło się!`)
                .setTimestamp()
                .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
            message.channel.send(embed)
        }
        const embed = new Discord.MessageEmbed()
        embed
            .setTitle(`🐨 Koala!`)
            .setColor(kolor_embeda)
            .setDescription(`Oto koala dla Ciebie!`)
            .setImage(data.link)
            .setTimestamp()
            .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
        message.channel.send(embed)
    }
}