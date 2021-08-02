module.exports = {
    nazwa: `ogloszenie`,
    uprawnienia: `MANAGE_CHANNELS`,
    callback: async (message, args, text, bot,) => {
        if (!args[0]) {
            const embed = new Discord.MessageEmbed()
            embed
                .setTitle(`${emotki.blad} Błąd!`)
                .setColor(kolor_embeda_bledu)
                .setDescription(`Nie podano treści!`)
                .setTimestamp()
                .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
            message.channel.send(embed)
        }
        else {
            message.delete()
            const embed = new Discord.MessageEmbed()
            embed
                .setTitle(`Ogłoszenie!`)
                .setColor(kolor_embeda)
                .setDescription(args.splice(0).join(` `))
                .setTimestamp()
                .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
            message.channel.send(embed)
        }
    }
}