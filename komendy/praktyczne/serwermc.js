module.exports = {
    nazwa: `serwermc`,
    callback: async (message, args, text, bot) => {
        if (!args[0]) {
            const embed = new Discord.MessageEmbed()
            embed
                .setTitle(`${emotki.blad} Błąd!`)
                .setColor(kolor_embeda_bledu)
                .setDescription(`Nie podano hostname serwera!`)
                .setTimestamp()
                .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
            message.channel.send(embed)
        }
        else {
            const url = `https://api.minetools.eu/ping/${args[0]}`
            let data, response
            try {
                response = await axios.get(url)
                data = response.data
            } catch { }
            if (!data.description) {
                const embed = new Discord.MessageEmbed()
                embed
                    .setTitle(`${emotki.blad} Błąd!`)
                    .setColor(kolor_embeda_bledu)
                    .setDescription(`Podany hostname jest nieprawidłowy!`)
                    .setTimestamp()
                    .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                message.channel.send(embed)
            }
            else {
                motd = data.description
                const embed = new Discord.MessageEmbed()
                embed
                    .setTitle(`Informacje o serwerze minecraft`)
                    .setColor(kolor_embeda)
                    .addField(`Motd:`, motd)
                    .addField(`Wersja:`, data.version.name)
                    .addField(`Online:`, `${data.players.online}/${data.players.max}`)
                    .addField(`Hostname:`, args[0])
                    .setTimestamp()
                    .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                message.channel.send(embed)
            }
        }
    }
}