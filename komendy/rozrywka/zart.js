module.exports = {
    nazwa: `zart`,
    callback: async (message, args, text, bot) => {
        const url = `https://cenzurabot.pl/api/memes/jbzd`
        let data, response
        try {
            response = await axios.get(url)
            data = response.data
        } catch {
            const embed = new Discord.MessageEmbed()
            embed
                .setTitle(`${emotki.blad} Błąd!`)
                .setColor(kolor_embeda_bledu)
                .setDescription(`Wygenerowanie żartu nie powiodło się!`)
                .setTimestamp()
                .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
            message.channel.send(embed)
            return
        }
        const embed = new Discord.MessageEmbed()
        embed
            .setTitle(`😂 Żart!`)
            .setColor(kolor_embeda)
            .setImage(data.meme)
            .setTimestamp()
            .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
        message.channel.send(embed)
    }
}