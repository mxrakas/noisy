module.exports = {
    nazwa: [`info`, `staty`, `botinfo`, `bot`],
    callback: async (message, args, text, bot,) => {
        const prefix = db.fetch(`${message.guild.id}.prefix`) || gprefix
        // const wersjadiscordjs = package.dependencies[`discord.js`].replace(/\^/gi, `v`)
        let totalSeconds = (bot.uptime / 1000)
        let days = Math.floor(totalSeconds / 86400)
        totalSeconds %= 86400
        let hours = Math.floor(totalSeconds / 3600)
        totalSeconds %= 3600
        let minutes = Math.floor(totalSeconds / 60)
        let seconds = Math.floor(totalSeconds % 60)
        let uptime = (days > 0 ? days + `d, ` : ``) + (hours > 0 ? hours + `h, ` : ``) + (minutes > 0 ? minutes + `m, ` : ``) + (seconds > 0 ? seconds + `s` : ``)
        let botuptime = uptime || `0s`
        const embed = new Discord.MessageEmbed()
        embed
            .setTitle(`ℹ️ Informacje`)
            .setColor("RANDOM")
            // .setDescription(`Ten serwer działa na shardzie o id **0**, korzysta z niego **${bot.guilds.cache.size}** serwerów!\nAby uzyskać więcej informacji o shardach wpisz **${prefix}shardy**`)
            .addField(`${emotki.pamiecram} Zużycie ramu:`, `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB`, true)
            .addField(`🕒 Uptime:`, botuptime, true)
            .addField(`🗄️ Serwery:`, bot.guilds.cache.size, true)
            .addField(`${emotki.ludzie} Użytkownicy:`, client.guilds.cache.reduce((a, g) => a + g.memberCount, 0), true)
            .addField(`📁 Kanały:`, bot.channels.cache.size, true)
            .addField(`${emotki.nodejs} Wersja node.js:`, `v${process.versions.node}`, true)
            .addField(`${emotki.discordjs} Wersja discord.js:`, `v${Discord.version}`, true)
            // .addField(`💠 Shardy:`, `1`, true)
            .addField(`${emotki.krysztalki1} OS maszyny:`, `Arch`, true)
            .addField(`🏓 Ping bota:`, `${bot.ws.ping}ms`, true)
            .setTimestamp()
            .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
        message.channel.send(embed)
    }
}