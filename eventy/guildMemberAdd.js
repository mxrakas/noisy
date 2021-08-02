module.exports = (member) => {
    const powitania_wlaczone = db.fetch(`${member.guild.id}.powitania_wlaczone`) || `Nie`
    const powitania_kanal = db.fetch(`${member.guild.id}.powitania_kanal`) || `Brak`
    const powitania_kanall = member.guild.channels.cache.get(powitania_kanal)
    const powitania_tekst = db.fetch(`${member.guild.id}.powitania_tekst`) || `Brak`
    const powitania_tekstt = powitania_tekst.replace(/@osoba/gi, `${member}`).replace(/@tag/gi, `${member.user.tag}`).replace(/@id/gi, `${member.user.id}`).replace(/@liczba/gi, `${member.guild.memberCount}`).replace(/@nazwa/gi, `${member.guild.name}`)
    const powitania_kolor = db.fetch(`${member.guild.id}.powitania_kolor`) || `Brak`
    const powitania_obrazek = db.fetch(`${member.guild.id}.powitania_obrazek`) || ``
    if (powitania_wlaczone === `Nie`) return
    if (!powitania_kanal) return
    const embed = new Discord.MessageEmbed()
    embed
        .setTitle(`Witamy!`)
        .setColor(powitania_kolor)
        .setDescription(powitania_tekstt)
        .setThumbnail(member.user.displayAvatarURL({dynamic: true}))
        .setImage(powitania_obrazek)
        .setTimestamp()
        .setFooter(`${member.user.tag} (${member.user.id})`, member.user.displayAvatarURL({dynamic: true}))
    try {
        powitania_kanall.send(embed)
    } catch (e) {
        const embed = new Discord.MessageEmbed()
        embed
            .setTitle(`${emotki.blad} Błąd!`)
            .setColor("RED")
            .setDescription(`Błąd przy powitaniu na serwer o id ${member.guild.id}`)
            .addField(`${emotki.kursor} Kod błędu:`, e)
            .setTimestamp()
            .setFooter(`${client2.user.tag} (${client2.user.id})`, client2.user.displayAvatarURL({dynamic: true}))
        client2.users.cache.get(`831618083621175316`).send(embed)
        return
    }
}