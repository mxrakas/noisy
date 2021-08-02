module.exports = (guild, bot) => {
    db.delete(guild.id)
    const dbmembersfiles = fs.readdirSync(`gbany`).join(`, `).replace(/\.json/gi, ``)
    if (dbmembersfiles.includes(guild.owner.user.id)) {
        const dbmembers = require(`.././gbany/${guild.owner.user.id}.json`)
        const gbancheck = dbmembers.gbancheck || `Nie!`
        if (gbancheck === `Tak!`) {
            guild.leave()
            return
        }
    }
     client.user.setPresence({
         activity: {type: `WATCHING`, name: `${client.guilds.cache.size} serwerów`},
        status: `online`
    })
    if (guild.memberCount < 3) {
        return
    } else {
        const embed = new Discord.MessageEmbed()
        embed
            .setTitle(`${emotki.wykrzyknik} Usunięto mnie z ${client.guilds.cache.size + 1} serwera!`)
            .setColor("RANDOM")
            .addField(`${emotki.kursor} Nazwa serwera:`, guild.name, true)
            .addField(`🆔 ID serwera:`, guild.id, true)
            .addField(`${emotki.ludzie} Liczba osób:`, guild.memberCount, true)
            .addField(`${emotki.korona} Właściciel serwera:`, guild.owner.user, true)
            .addField(`#️⃣ Tag właściciela serwera:`, guild.owner.user.tag, true)
            .addField(`🆔 ID właściciela serwera:`, guild.owner.user.id, true)
            .setThumbnail(guild.iconURL({dynamic: true}))
            .setTimestamp()
            .setFooter(`${guild.owner.user.tag} (${guild.owner.user.id})`, guild.owner.user.displayAvatarURL({dynamic: true}))
        // logi_serwery.send(`<@&859896973138198538>`, embed)
        bot.channels.cache.get("861663835706753067").send(embed)
    }
}