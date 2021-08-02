module.exports = {
    nazwa: `osoby`,
    callback: async (message, args, text, bot) => {
        const embed = new Discord.MessageEmbed()
        embed
            .setTitle(`Osoby`)
            .setColor(kolor_embeda)
            .addField(`🔢 Wszyscy użytkownicy:`, message.guild.memberCount)
            .addField(`${emotki.ludzie} Osoby:`, message.guild.memberCount - message.guild.members.cache.filter(member => member.user.bot).size)
            .addField(`🤖 Boty:`, message.guild.members.cache.filter(member => member.user.bot).size)
            .addField(`${emotki.onlinegif} Aktywność`, `${emotki.online} Online: ${message.guild.members.cache.filter(member => member.presence.status === `online`).size} ${emotki.zarazwracam} Zaraz wracam: ${message.guild.members.cache.filter(member => member.presence.status === `idle`).size} ${emotki.dnd} Nie przeszkadzać: ${message.guild.members.cache.filter(member => member.presence.status === `dnd`).size} ${emotki.offline} Offline: ${message.guild.members.cache.filter(member => member.presence.status === `offline`).size}`)
            .setTimestamp()
            .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
        message.channel.send(embed)
    }
}