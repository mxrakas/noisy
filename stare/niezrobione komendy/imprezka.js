module.exports = {
    nazwa: [`imprezka`],
    callback: async (message, args, text, bot) => {
        const embed = new Discord.MessageEmbed()
        embed
            .setTitle(`Imprezka!`)
            .setColor(kolor_embeda)
            .setDescription(`Oj tak! Bawimy się!`)
            .setImage(`http://patryczekktv.pl/img/Zbysiu.gif`)
            .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
        message.channel.send(embed)
    }
}