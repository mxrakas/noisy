module.exports = {
    nazwa: [`play`, `p`],
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
                        const fraza = args[0]
                        if (!fraza) {
                            const embed = new Discord.MessageEmbed()
                            embed
                                .setTitle(`${emotki.blad} Błąd!`)
                                .setColor("RED")
                                .setDescription(`Nie podano tytułu!`)
                                .setTimestamp()
                                .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                            message.channel.send(embed)
                        }
                        else {
                            const url = `https://www.googleapis.com/youtube/v3/search?maxResults=1&part=snippet&q=${fraza}&key=AIzaSyCbOZZm-qTGgbsvmwYXI_RVpmGeE2vwpfc`
                            let data, response;
                            try {
                                response = await axios.get(url)
                                data = response.data
                            } catch {
                                const embed = new Discord.MessageEmbed()
                                embed
                                    .setTitle(`${emotki.blad} Błąd!`)
                                    .setColor("RED")
                                    .setDescription(`Nie znaleziono wyników!`)
                                    .setTimestamp()
                                    .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                                message.channel.send(embed)
                            }
                            if (!data.items[0]) {
                                const embed = new Discord.MessageEmbed()
                                embed
                                    .setTitle(`${emotki.blad} Błąd!`)
                                    .setColor("RED")
                                    .setDescription(`Nie znaleziono wyników!`)
                                    .setTimestamp()
                                    .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                                message.channel.send(embed)
                            }
                            else {
                                const kanal = message.member.voice.channel
                                const connection = await message.member.voice.channel.join()
                                connection.voice.setSelfDeaf(true)
                                const embed = new Discord.MessageEmbed()
                                embed
                                    .setTitle(`${emotki.tak} Sukces!`)
                                    .setColor("RANDOM")
                                    .setDescription(`Puszczam piosenkę!`)
                                    .addField(`Tytuł:`, data.items[0].snippet.title)
                                    .addField(`Kanał:`, `**[${data.items[0].snippet.channelTitle}](https://youtube.com/channel/${data.items[0].snippet.channelId})**`)
                                    .addField(`Miniaturka:`, `**[[kliknij]](${data.items[0].snippet.thumbnails.high.url})**`)
                                    .setImage(data.items[0].snippet.thumbnails.high.url)
                                    .setTimestamp()
                                    .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                                message.channel.send(embed)
                                connection.play(ytdl(`https://www.youtube.com/watch?v=${data.items[0].id.videoId}`, { filter: `audioonly` }))
                                    .on(`finish`, async () => {
                                        const embed = new Discord.MessageEmbed()
                                        embed
                                            .setTitle(`${emotki.wykrzyknik} Informacja!`)
                                            .setColor("RANDOM")
                                            .setDescription(`Bot opuścił kanał głosowy ze względu na brak aktywności!`)
                                            .setTimestamp()
                                            .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                                        message.channel.send(embed)
                                        kanal.leave()
                                    })
                            }
                        }
                    }
                }
            }
        }
    }
}