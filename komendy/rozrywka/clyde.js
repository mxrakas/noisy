module.exports = {
    nazwa: `clyde`,
    callback: async (message, args, text, bot) => {
        const clydemessage = args.splice(0).join(`%20`)
        if (!clydemessage) {
            const embed = new Discord.MessageEmbed()
            embed
                .setTitle(`${emotki.blad} Błąd!`)
                .setColor(kolor_embeda_bledu)
                .setDescription(`Nie podano tekstu!`)
                .setTimestamp()
                .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
            message.channel.send(embed)
        }
        else {
            if (!(clydemessage.includes(`ł`) || clydemessage.includes(`ó`) || clydemessage.includes(`ż`) || clydemessage.includes(`ź`) || clydemessage.includes(`ć`) || clydemessage.includes(`ń`) || clydemessage.includes(`ą`) || clydemessage.includes(`ś`) || clydemessage.includes(`ę`))) {
                const url = `https://nekobot.xyz/api/imagegen?type=clyde&text=${clydemessage}`
                let data, response
                try {
                    response = await axios.get(url)
                    data = response.data
                } catch {
                    const embed = new Discord.MessageEmbed()
                    embed
                        .setTitle(`${emotki.blad} Błąd!`)
                        .setColor(kolor_embeda_bledu)
                        .setDescription(`Wysłanie wiadomości jako clyde nie powiodło się!`)
                        .setTimestamp()
                        .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                    message.channel.send(embed)
                    return
                }
                const embed = new Discord.MessageEmbed()
                embed
                    .setTitle(`🤖 Clyde!`)
                    .setColor(kolor_embeda)
                    .setImage(data.message)
                    .setTimestamp()
                    .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                message.channel.send(embed)
            }
            else {
                const embed = new Discord.MessageEmbed()
                embed
                    .setTitle(`${emotki.blad} Błąd!`)
                    .setColor(kolor_embeda_bledu)
                    .setDescription(`Tekst nie może zawierać polskich znaków!`)
                    .setTimestamp()
                    .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                message.channel.send(embed)
            }
        }
    }
}