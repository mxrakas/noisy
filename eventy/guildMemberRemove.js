module.exports = (member) => {
    const pozegnania_wlaczone = db.fetch(`${member.guild.id}.pozegnania_wlaczone`) || `Nie`
    const pozegnania_kanal = db.fetch(`${member.guild.id}.pozegnania_kanal`) || `Brak`
    const pozegnania_kanall = member.guild.channels.cache.get(pozegnania_kanal)
    const pozegnania_tekst = db.fetch(`${member.guild.id}.pozegnania_tekst`) || `Brak`
    const pozegnania_tekstt = pozegnania_tekst.replace(/@osoba/gi, `${member}`).replace(/@tag/gi, `${member.user.tag}`).replace(/@id/gi, `${member.user.id}`).replace(/@liczba/gi, `${member.guild.memberCount}`).replace(/@nazwa/gi, `${member.guild.name}`)
    const pozegnania_kolor = db.fetch(`${member.guild.id}.pozegnania_kolor`) || `Brak`
    const pozegnania_obrazek = db.fetch(`${member.guild.id}.pozegnania_obrazek`) || ``
    if (pozegnania_wlaczone === `Nie`) return
    if (!pozegnania_kanal) return
    const embed = new Discord.MessageEmbed()
    embed
        .setTitle(`Żegnamy!`)
        .setColor(pozegnania_kolor)
        .setDescription(pozegnania_tekstt)
        .setThumbnail(member.user.displayAvatarURL({dynamic: true}))
        .setImage(pozegnania_obrazek)
        .setTimestamp()
        .setFooter(`${member.user.tag} (${member.user.id})`, member.user.displayAvatarURL({dynamic: true}))
    try {
        pozegnania_kanall.send(embed)
    } catch (e) {
        const embed = new Discord.MessageEmbed()
        embed
            .setTitle(`${emotki.blad} Błąd!`)
            .setColor("RED")
            .setDescription(`Błąd przy pożegnaniu na serwer o id ${member.guild.id}`)
            .addField(`${emotki.kursor} Kod błędu:`, e)
            .setTimestamp()
            .setFooter(`${client2.user.tag} (${client2.user.id})`, client2.user.displayAvatarURL({dynamic: true}))
        client2.users.cache.get(`831618083621175316`).send(embed)
        return
    }
}