module.exports = {
    nazwa: `shardy`,
    callback: async (message, args, text, bot,) => {
        let totalSeconds = (bot.uptime / 1000);
        let days = Math.floor(totalSeconds / 86400);
        totalSeconds %= 86400;
        let hours = Math.floor(totalSeconds / 3600);
        totalSeconds %= 3600;
        let minutes = Math.floor(totalSeconds / 60);
        let seconds = Math.floor(totalSeconds % 60);
        let botuptime = (days > 0 ? days + `d, ` : ``) + (hours > 0 ? hours + `h, ` : ``) + (minutes > 0 ? minutes + `m, ` : ``) + (seconds > 0 ? seconds + `s` : ``)
        const embed = new Discord.MessageEmbed()
        embed
            .setTitle(`Shardy`)
            .setColor(kolor_embeda)
            .addField(`${emotki.krysztalki1} Shard id **69**:`, `• 🏓 Ping: **69ms**\n• ${emotki.pamiecram} Użycie ramu: **69.69MB**\n• 🗄️ Serwery: **69**\n• 🕒 Uptime: **69d, 69h, 69m, 69s**`, true)
            .addField(`${emotki.krysztalki1} Shard id **2137**:`, `• 🏓 Ping: **2137ms**\n• ${emotki.pamiecram} Użycie ramu: **21.37MB**\n• 🗄️ Serwery: **2137**\n• 🕒 Uptime: **21d, 37h, 21m, 37s**`, true)
            .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
        message.channel.send(embed)
    }
}