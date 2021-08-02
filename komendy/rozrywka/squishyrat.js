module.exports = {
    nazwa: `squishyrat`,
    callback: async (message, args, text, bot) => {
        const embed = new Discord.MessageEmbed()
        embed
            .setTitle(`🐀 Squishy rat!`)
            .setColor(kolor_embeda)
            .setImage(`http://patryczekktv.pl/img/Squishy%20rat.gif`)
            .setTimestamp()
            .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
        message.channel.send(embed)
    }
}