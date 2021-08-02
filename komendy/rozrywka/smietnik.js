module.exports = {
    nazwa: `smietnik`,
    callback: async (message, args, text, bot) => {
        const target1 = message.mentions.members.first() || message.member
        const target2 = message.mentions.users.first() || message.author
        if (target2.id === bot.user.id) {
            const nazwauzytkownika1 = message.member.nickname || message.author.username
            const nazwauzytkownika2 = nazwauzytkownika1.replace(/\ /gi, `%20`)
            const embed = new Discord.MessageEmbed()
            embed
                .setTitle(`🗑️ Śmietnik!`)
                .setColor(kolor_embeda)
                .setDescription(`No chyba ty!`)
                .setImage(`https://braslerl-api.herokuapp.com/trash?name=${nazwauzytkownika2}`)
                .setTimestamp()
                .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
            message.channel.send(embed)
        }
        else {
            const nazwauzytkownika1 = target1.nickname || target2.username
            const nazwauzytkownika2 = nazwauzytkownika1.replace(/\ /gi, `%20`)
            const embed = new Discord.MessageEmbed()
            embed
                .setTitle(`🗑️ Śmietnik!`)
                .setColor(kolor_embeda)
                .setDescription(`${target2} w śmietniku`)
                .setImage(`https://braslerl-api.herokuapp.com/trash?name=${nazwauzytkownika2}`)
                .setTimestamp()
                .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
            message.channel.send(embed)
        }
    }
}