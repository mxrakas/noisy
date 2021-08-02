module.exports = {
    nazwa: `przytul`,
    callback: async (message, args, text, bot) => {
        const target = message.mentions.users.first() || message.author
        if (!(target.id === message.author.id)) {
            const url = `https://some-random-api.ml/animu/hug`
            let data, response
            try {
                response = await axios.get(url)
                data = response.data
            } catch { }
            const embed = new Discord.MessageEmbed()
            embed
                .setTitle(`🫂 Przytulas!`)
                .setColor(kolor_embeda)
                .setDescription(`${message.author} przytulił ${target} :)`)
                .setImage(data.link)
                .setTimestamp()
                .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
            message.channel.send(embed)
        }
        else {
            const embed = new Discord.MessageEmbed()
            embed
                .setTitle(`Serio?!`)
                .setColor(kolor_embeda)
                .setDescription(`Serio chcesz przytulić sam siebie?!`)
                .setTimestamp()
                .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
            message.channel.send(embed)
        }
    }
}