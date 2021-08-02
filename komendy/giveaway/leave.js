module.exports = {
    nazwa: `leave`,
    callback: async (message, args, text, bot) => {
        const odznaki = db.fetch(`${message.author.id}.odznaki`) || `Brak`
        if (!odznaki.includes(`Premium`)) {
            const embed = new Discord.MessageEmbed()
            embed
                .setTitle(`${emotki.blad} Błąd!`)
                .setColor("RED")
                .setDescription(`Nie posiadasz premium!`)
                .setTimestamp()
                .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
            message.channel.send(embed)
        }
        else {
                if (!message.guild.me.voice.channel) {
                    const embed = new Discord.MessageEmbed()
                    embed
                        .setTitle(`${emotki.blad} Błąd!`)
                        .setColor("RED")
                        .setDescription(`Nie jestem na kanale głosowym!`)
                        .setTimestamp()
                        .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                    message.channel.send(embed)
                }
                else {
                    if (!message.member.voice.channel) {
                        const embed = new Discord.MessageEmbed()
                        embed
                            .setTitle(`${emotki.blad} Błąd!`)
                            .setColor("RED")
                            .setDescription(`Nie jesteś na kanale głosowym!`)
                            .setTimestamp()
                            .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                        message.channel.send(embed)
                    }
                    else {
                    if (message.guild.me.voice.channel !== message.member.voice.channel) {
                        const embed = new Discord.MessageEmbed()
                        embed
                            .setTitle(`${emotki.blad} Błąd!`)
                            .setColor("RED")
                            .setDescription(`Nie jesteś na tym samym kanale głosowym!`)
                            .setTimestamp()
                            .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                        message.channel.send(embed)
                    }
                    else {
                        message.member.voice.channel.leave()
                        const embed = new Discord.MessageEmbed()
                        embed
                            .setTitle(`${emotki.tak} Sukces!`)
                            .setColor("RANDOM")
                            .setDescription(`Pomyślnie odłączono z ${message.member.voice.channel}!`)
                            .setTimestamp()
                            .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                        message.channel.send(embed)
                    }
                }
            }
        }
    }
}