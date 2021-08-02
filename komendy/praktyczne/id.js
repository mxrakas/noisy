module.exports = {
    nazwa: `id`,
    callback: async (message, args, text, bot) => {
        const target = message.mentions.users.first() || message.author
        const embed = new Discord.MessageEmbed()
        embed
            .setTitle(`ID`)
            .setColor(kolor_embeda)
            .setDescription(`${emotki.ludzie}・ID ${target}: **${target.id}**\n📁・ID ${message.channel}: **${message.channel.id}**\n️️️🗄・ID serwera: **${message.guild.id}**\n${emotki.wiadomosci}・ID wiadomości: **${message.id}**`)
            .setTimestamp()
            .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
        message.channel.send(embed)
    }
}