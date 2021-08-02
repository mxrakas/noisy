module.exports = (guild, bot) => {
    const dbmembersfiles = fs.readdirSync(`gbany`).join(`, `).replace(/\.json/gi, ``)
    if (dbmembersfiles.includes(guild.owner.user.id)) {
        const dbmembers = require(`.././gbany/${guild.owner.user.id}.json`)
        const gbancheck = dbmembers.gbancheck || `Nie!`
        if (gbancheck === `Tak!`) {
            guild.leave()
            return
        }
    }
     const prefix = db.fetch(`${guild.id}.prefix`) || gprefix
     const channel = guild.channels.cache.find(channel => channel.type === `text`)
     const embed1 = new Discord.MessageEmbed()
     embed1
         .setTitle(`Hejka!`)
         .setColor("RANDOM")
         .setDescription(`**Hejka! Jestem ${client.user.username}, wielofunkcyjnym botem do discorda! Zaufało mi aż ${client.guilds.cache.size} serwerów! Dzięki, że dodałeś mnie na serwer! Komendy znajdziesz po wpisaniu __${prefix}pomoc__! Miłego użytkowania!**`)
         .setTimestamp()
         .setFooter(`${client.user.tag} (${client.user.id})`, client.user.displayAvatarURL({ dynamic: true }))
     channel.send(embed1).catch(() => { return })
     client.user.setPresence({
         activity: {type: `WATCHING`, name: `${client.guilds.cache.size} serwerów`},
         status: `online`
     })
    if (guild.memberCount < 5) {
        const channel = guild.channels.cache.find(channel => channel.type === `text`)
        const embed = new Discord.MessageEmbed()
        embed
            .setTitle(`${emotki.blad} Błąd!`)
            .setColor("RED")
            .setDescription(`Serwer nie zawiera minimalnej liczby członków, wymaganej do dodania mnie, przez co muszę opuścić ten serwer!\nStanie się to w ciągu 3 sekund.\n(Wymagane minimum **5** członków)`)
            .setTimestamp()
            .setFooter(`${guild.owner.user.tag} (${guild.owner.user.id})`, guild.owner.user.displayAvatarURL({dynamic: true}))
        channel.send(embed)
        setTimeout(async function () {
            guild.leave()
        }, 3000)
    } else {
        const embed2 = new Discord.MessageEmbed()
        embed2
            .setTitle(`${emotki.wykrzyknik} Dodano mnie na ${client.guilds.cache.size} serwer!`)
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
        // logi_serwery.send(`<@&859896973138198538>`, embed2)
        bot.channels.cache.get("861663835706753067").send(embed2)
    }
}