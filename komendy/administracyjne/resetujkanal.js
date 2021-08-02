module.exports = {
    nazwa: `resetujkanal`,
    uprawnienia: `MANAGE_CHANNELS`,
    callback: async (message, args, text, bot,) => {
        const channel = await message.channel.clone().then((channel) => {
            const position = message.channel.position
            channel.setPosition(position)
            message.channel.delete()
            const embed = new Discord.MessageEmbed()
            embed
                .setTitle(`${emotki.tak} Sukces!`)
                .setColor("RANDOM")
                .setDescription(`Pomyślnie zresetowano kanał!`)
                .addField(`${emotki.wykrzyknik} Administrator:`, `${message.author} (${message.author.tag})`)
                .addField(`📁 Kanał:`, channel)
                .addField(`${emotki.klodka} Serwer:`, message.guild.name)
                .setTimestamp()
                .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
            channel.send(embed)
        }).catch(() => {
            const embed = new Discord.MessageEmbed()
            embed
                .setTitle(`${emotki.blad} Błąd!`)
                .setColor("RED")
                .setDescription(`Nie posiadam uprawnień!`)
                .setTimestamp()
                .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
            message.channel.send(embed)
        })
    }
}