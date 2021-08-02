module.exports = {
    nazwa: `iq`,
    callback: async (message, args, text, bot) => {
        const target = bot.users.cache.get(args[0]) || message.mentions.users.first() || message.author
        const liczba = Math.floor(Math.random() * 350) + 1
        const embed1 = new Discord.MessageEmbed()
        embed1
            .setColor(kolor_embeda)
            .setDescription(`${emotki.ladowanie} Obliczanie IQ...`)
        const embedmessage = await message.channel.send(embed1)
        const embed2 = new Discord.MessageEmbed()
        embed2
            .setTitle(`🔢 Licznik IQ`)
            .setColor(kolor_embeda)
            .setDescription(`${target} ma **${liczba}** IQ!`)
            .setTimestamp()
            .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
        setTimeout(function () { embedmessage.edit(embed2) }, 3000)
    }
}