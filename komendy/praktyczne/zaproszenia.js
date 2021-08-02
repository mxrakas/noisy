module.exports = {
    nazwa: `zaproszenia`,
    blokadacheck: `Tak!`,
    blokadareason: `Naprawa błędów`,
    callback: async (message, args, text, bot) => {
        let user = message.mentions.users.first() || message.author
        let invites = await message.guild.fetchInvites()
        let userInv = invites.filter(u => u.inviter && u.inviter.id === user.id)
        if (userInv.size <= 1) {
            const embed1 = new Discord.MessageEmbed()
            embed1
                .setColor(kolor_embeda)
                .setDescription(`${emotki.ladowanie} Obliczanie zaproszeń...`)
            const embedmessage = await message.channel.send(embed1)
            const embed2 = new Discord.MessageEmbed()
                .setTitle(`${emotki.blad} Błąd!`)
                .setColor(kolor_embeda_bledu)
                .setDescription(`Z zaproszeń użytkownika ${user} nie weszła żadna osoba!`)
                .setTimestamp()
        .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
            setTimeout(function () { embedmessage.edit(embed2) }, 3000)
            return
        }
        let invCodes = userInv.map(x => x.code).join("\n")
        let i = 0
        userInv.forEach(inv => i += inv.uses)
        const embed1 = new Discord.MessageEmbed()
        embed1
            .setColor(kolor_embeda)
            .setDescription(`${emotki.ladowanie} Obliczanie zaproszeń...`)
        const embedmessage = await message.channel.send(embed1)
        const embed2 = new Discord.MessageEmbed()
            .setTitle(`${emotki.tak} Zaproszenia!`)
            .setColor(kolor_embeda)
            .setDescription(`Z zaproszeń użytkownika ${user} weszło **${i}** osób!`)
            .setTimestamp()
         .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
        setTimeout(function () { embedmessage.edit(embed2) }, 3000)
    }
}