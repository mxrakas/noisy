module.exports = {
    nazwa: `klapouchy`,
    callback: async (message, args, text, bot) => {
        const liczba = Math.floor(Math.random() * 12) + 1
        switch (liczba) {
            case 1: klapouchy = `https://media.discordapp.net/attachments/839190058543349790/839922590982471731/2.jpg`; break;
            case 2: klapouchy = `https://media.discordapp.net/attachments/839190058543349790/839922592797687898/3.jpg`; break;
            case 3: klapouchy = `https://media.discordapp.net/attachments/839190058543349790/839922594337259580/4.jpg`; break;
            case 4: klapouchy = `https://media.discordapp.net/attachments/839190058543349790/839922596044865586/5.jpg`; break;
            case 5: klapouchy = `https://media.discordapp.net/attachments/839190058543349790/839922597801885766/6.jpg`; break;
            case 6: klapouchy = `https://media.discordapp.net/attachments/839190058543349790/839922599537541190/7.jpg`; break;
            case 7: klapouchy = `https://media.discordapp.net/attachments/839190058543349790/839922830858780702/images.jpg`; break;
            case 8: klapouchy = `https://media.discordapp.net/attachments/839190058543349790/839922921350889482/kubus-puchatek-klapouchy.jpg?width=845&height=634`; break;
            case 9: klapouchy = `https://media.discordapp.net/attachments/839190058543349790/839922996315291705/il_570xN.551443387_ag0l.jpg`; break;
            case 10: klapouchy = `https://media.discordapp.net/attachments/839190058543349790/839923050623270982/disney-kubus-puchatek-i-przyjaciele-obraz-na-plotnie-23x23-cm-b-iext67455977.jpg?width=636&height=634`; break;
            case 11: klapouchy = `https://media.discordapp.net/attachments/839190058543349790/839924702901567518/unknown.png`; break;
            case 12: klapouchy = `https://media.discordapp.net/attachments/839190058543349790/839924741090705448/unknown.png`; break;
        }
        const embed = new Discord.MessageEmbed()
        embed
            .setTitle(`Kłapouchy!`)
            .setColor(kolor_embeda)
            .setDescription(`Oto kłapouchy dla Ciebie!`)
            .setImage(klapouchy)
            .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
        message.channel.send(embed)
    }
}