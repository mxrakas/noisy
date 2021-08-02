module.exports = {
    nazwa: `ankieta`,
    uprawnienia: `MANAGE_CHANNELS`,
    callback: async (message, args, text, bot) => {
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
                .setTitle(`Ankieta!`)
                .setColor(kolor_embeda)
                .setDescription(args.splice(0).join(` `))
                .setTimestamp()
                .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
            message.channel.send(embed)
                .then(function (message) {
                    message.react(`:tak:833731659283169292`).then(function () {
                        message.react(`:nie:833731658774872144`)
                    })
                })
        }
    }
}