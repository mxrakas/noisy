module.exports = {
    nazwa: `serwerinfo`,
    callback: async (message, args, text, bot) => {
        const embed = new Discord.MessageEmbed()
        embed
            .setTitle(`Informacje o serwerze`)
            .setColor(kolor_embeda)
            .addField(`${emotki.krysztalki1} Ogólne`, `${emotki.kursor}・Nazwa serwera: **${message.guild.name}**\n🆔・ID: **${message.guild.id}**\n🖼️・Ikona serwera: [**[kliknij]**](${message.guild.iconURL({ dynamic: true })})\n🚩・Region: **${message.guild.region}**\n${emotki.korona}・Właściciel: **${message.guild.owner.user} (${message.guild.owner.user.tag})**\n${emotki.ludzie}・Osoby: **${message.guild.memberCount - message.guild.members.cache.filter(member => member.user.bot).size}**\n🤖・Boty: **${message.guild.members.cache.filter(member => member.user.bot).size}**\n📅・Serwer stworzony: **${message.guild.createdAt.toLocaleString('pl-PL', { dateStyle: 'short' })}**`)
            .addField(`📁 Kanały`, `${emotki.tekstowy1} Tekstowe: **${message.guild.channels.cache.filter(channel => channel.type === `text`).size}**\n${emotki.ogloszeniowy} Ogłoszeniowe: **${message.guild.channels.cache.filter(channel => channel.type === `news`).size}**\n${emotki.glosowy1} Głosowe: **${message.guild.channels.cache.filter(channel => channel.type === `text`).size}**`)
            .addField(`${emotki.klodka} Role`, `🔢・Ilość ról: **${message.guild.roles.cache.size}**\n⬆️・Najwyższa rola: **${message.guild.roles.highest}**`)
            .setThumbnail(message.guild.iconURL({ dynamic: true }))
            .setTimestamp()
            .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
        message.channel.send(embed)
    }
}