module.exports = {
    nazwa: `ship`,
    callback: async (message, args, text, bot) => {
        const [pierwszy, drugi] = message.mentions.users.keyArray()
        if (!pierwszy || !drugi) {
            const embed = new Discord.MessageEmbed()
            embed
                .setTitle(`${emotki.blad} Błąd!`)
                .setColor(kolor_embeda_bledu)
                .setDescription(`Nie oznaczono dwóch różnych osób!`)
                .setTimestamp()
                .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
            message.channel.send(embed)
        }
        else {
            const liczba = Math.floor(Math.random() * 100) + 1
            const embed = new Discord.MessageEmbed()
            embed
                .setTitle(`❣️ Ship!`)
                .setColor(kolor_embeda)
                .setDescription(`<@${pierwszy}> + <@${drugi}> = **${liczba}%**`)
                .setThumbnail(`https://i.gifer.com/72gp.gif`)
                .setImage(`https://braslerl-api.herokuapp.com/progressbar?number=${liczba}&back_color=000000&front_color=137fd1`)
                .setTimestamp()
                .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
            message.channel.send(embed)
        }
    }
}