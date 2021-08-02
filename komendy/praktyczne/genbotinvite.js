module.exports = {
    nazwa: `genbotinvite`,
    callback: async (message, args, text, bot) => {
        if (!args[0]) {
            const embed = new Discord.MessageEmbed()
            embed
                .setTitle(`${emotki.blad} Błąd!`)
                .setColor(kolor_embeda_bledu)
                .setDescription(`Nie podano id bota!`)
                .setTimestamp()
                .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
            message.channel.send(embed)
        }
        else {
            const embed = new Discord.MessageEmbed()
            embed
                .setTitle(`${emotki.tak} Sukces!`)
                .setColor(kolor_embeda)
                .setDescription(`Pomyślnie wygenerowano link zaproszenia dla bota!`)
                .addField(`🔗 Link:`, `[[kliknij]](https://discord.com/oauth2/authorize?client_id=${args[0]}&scope=bot&permissions=8)`)
                .setTimestamp()
                .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
            message.channel.send(embed)
        }
    }
}