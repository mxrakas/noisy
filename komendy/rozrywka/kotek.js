module.exports = {
    nazwa: `kotek`,
    callback: async (message, args, text, bot) => {
        const url = `https://some-random-api.ml/img/cat`
        let data, response
        try {
            response = await axios.get(url)
            data = response.data
        } catch {
            const embed = new Discord.MessageEmbed()
            embed
                .setTitle(`${emotki.blad} Błąd!`)
                .setColor(kolor_embeda_bledu)
                .setDescription(`Wygenerowanie zdjęcia kotka nie powiodło się!`)
                .setTimestamp()
                .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
            message.channel.send(embed)
        }
        const embed = new Discord.MessageEmbed()
        embed
            .setTitle(`🐈 Kotek!`)
            .setColor(kolor_embeda)
            .setDescription(`Oto kotek dla Ciebie!`)
            .setImage(data.link)
            .setTimestamp()
            .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
        message.channel.send(embed)
    }
}