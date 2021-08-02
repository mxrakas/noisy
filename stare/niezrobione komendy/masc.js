module.exports = {
    nazwa: `masc`,
    callback: async (message, args, text, bot) => {
        const target = message.mentions.users.first() || message.author
        const embed = new Discord.MessageEmbed()
        embed
            .setTitle(`Maść!`)
            .setColor(kolor_embeda)
            .setDescription(`${message.author} podarował ${target} maść na ból dupki :)`)
            .setImage(`http://patryczekktv.pl/img/Masc.png`)
            .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
        message.channel.send(embed)
    }
}