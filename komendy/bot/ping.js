module.exports = {
    nazwa: `ping`,
    callback: async (message, args, text, bot) => {
        const pingbota = bot.ws.ping
        const pingbazydanych = Math.floor(Math.random() * 2)
        if ((pingbota) < 250) statuspingu = `niski`
        if ((pingbota) < 250) notkapingu = `Mój ping jest niski, więc korzystanie ze mnie być płynne!`
        if ((pingbota) < 150) statuspingu = `bardzo niski`
        if ((pingbota) < 150) notkapingu = `Mój ping jest bardzo niski, więc korzystanie ze mnie powinno być płynne!`
        if ((pingbota) > 250) statuspingu = `średni`
        if ((pingbota) > 250) notkapingu = `Mogą występować róźne opóźnienia, jestem uruchamiany lub łącze jest przeciążone!`
        if ((pingbota) > 500) statuspingu = `wysoki`
        if ((pingbota) > 500) notkapingu = `Mogą występować duże opóźnienia, łącze jest przeciążone!`
        if ((pingbota) > 750) statuspingu = `bardzo wysoki`
        if ((pingbota) > 750) notkapingu = `Mogą występować bardzo duże opóźnienia, łącze jest przeciążone!`
        const embed = new Discord.MessageEmbed()
        embed
            .setTitle(`🏓 Ping`)
            .setColor("RANDOM")
            .setDescription(`Mój ping jest __${statuspingu}__\n${notkapingu}`)
            .addField(`${emotki.logobota} Bot (Ws):`, `${pingbota}ms`, true)
            .addField(`🗄️ Baza danych:`, `${pingbazydanych}ms`, true)
            .setTimestamp()
            .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
        message.channel.send(embed)
    }
}