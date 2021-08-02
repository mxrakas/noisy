module.exports = {
    nazwa: `profil`,
    callback: async (message, args, text, bot) => {
        const target1 = message.mentions.members.first() || message.member
        const target2 = message.mentions.users.first() || message.author
        const imie = db.fetch(`${target2.id}.imie`) || `Brak`
        const wiek = db.fetch(`${target2.id}.wiek`) || `Brak`
        const plec = db.fetch(`${target2.id}.plec`) || `Brak`
        const wojewodztwo = db.fetch(`${target2.id}.wojewodztwo`) || `Brak`
        const email = db.fetch(`${target2.id}.email`) || `Brak`
        const uprawnienia_globalne = db.fetch(`${target2.id}.uprawnienia_globalne`) || `Brak`
        const odznaki = db.fetch(`${target2.id}.odznaki`) || `Brak`
        const odznakii = odznaki.replace(/@ban/gi, `${emotki.ban}`).replace(/@blad/gi, `${emotki.blad}`).replace(/@bot/gi, `${emotki.bot}`).replace(/@developer/gi, `${emotki.developer}`).replace(/@discord/gi, `${emotki.discord}`).replace(/@discordjs/gi, `${emotki.discordjs}`).replace(/@discordpartner/gi, `${emotki.discordpartner}`).replace(/@dnd/gi, `${emotki.dnd}`).replace(/@dol/gi, `${emotki.dol}`).replace(/@globus/gi, `${emotki.globus}`).replace(/@glosowy1/gi, `${emotki.glosowy1}`).replace(/@glosowy2/gi, `${emotki.glosowy2}`).replace(/@google/gi, `${emotki.google}`).replace(/@gora/gi, `${emotki.gora}`).replace(/@haker/gi, `${emotki.haker}`).replace(/@hmm/gi, `${emotki.hmm}`).replace(/@jeb/gi, `${emotki.jeb}`).replace(/@klodka/gi, `${emotki.klodka}`).replace(/@kociokekw/gi, `${emotki.kociokekw}`).replace(/@kociolajk/gi, `${emotki.kociolajk}`).replace(/@korona/gi, `${emotki.korona}`).replace(/@krysztalki1/gi, `${emotki.krysztalki1}`).replace(/@krysztalki2/gi, `${emotki.krysztalki2}`).replace(/@krysztalki3/gi, `${emotki.krysztalki3}`).replace(/@kursor/gi, `${emotki.kursor}`).replace(/@ladowanie/gi, `${emotki.ladowanie}`).replace(/@lapka/gi, `${emotki.lapka}`).replace(/@logobota/gi, `${emotki.logobota}`).replace(/@ludek/gi, `${emotki.ludek}`).replace(/@ludzie/gi, `${emotki.ludzie}`).replace(/@minus/gi, `${emotki.minus}`).replace(/@misiaczek/gi, `${emotki.misiaczek}`).replace(/@mniam/gi, `${emotki.mniam}`).replace(/@nie/gi, `${emotki.nie}`).replace(/@nitro/gi, `${emotki.nitro}`).replace(/@nodejs/gi, `${emotki.nodejs}`).replace(/@nutka/gi, `${emotki.nutka}`).replace(/@obsydianek/gi, `${emotki.obsydianek}`).replace(/@offline/gi, `${emotki.offline}`).replace(/@offlinegif/gi, `${emotki.offlinegif}`).replace(/@ogloszeniowy/gi, `${emotki.ogloszeniowy}`).replace(/@online/gi, `${emotki.online}`).replace(/@onlinegif/gi, `${emotki.onlinegif}`).replace(/@pamiecram/gi, `${emotki.pamiecram}`).replace(/@papier/gi, `${emotki.papier}`).replace(/@papuzka/gi, `${emotki.papuzka}`).replace(/@pisanie/gi, `${emotki.pisanie}`).replace(/@plik/gi, `${emotki.plik}`).replace(/@plus/gi, `${emotki.plus}`).replace(/@plus1/gi, `${emotki.plus1}`).replace(/@plytka/gi, `${emotki.plytka}`).replace(/@pobieranie/gi, `${emotki.pobieranie}`).replace(/@portalik/gi, `${emotki.portalik}`).replace(/@riczbicz/gi, `${emotki.riczbicz}`).replace(/@saltko/gi, `${emotki.saltko}`).replace(/@serduszko/gi, `${emotki.serduszko}`).replace(/@slash/gi, `${emotki.slash}`).replace(/@sloneczko/gi, `${emotki.sloneczko}`).replace(/@smuteczek/gi, `${emotki.smuteczek}`).replace(/@squishyrat/gi, `${emotki.squishyrat}`).replace(/@staty/gi, `${emotki.staty}`).replace(/@strzalka1/gi, `${emotki.strzalka1}`).replace(/@strzalka2/gi, `${emotki.strzalka2}`).replace(/@strzalkagif/gi, `${emotki.strzalkagif}`).replace(/@support/gi, `${emotki.support}`).replace(/@swiatelko/gi, `${emotki.swiatelko}`).replace(/@tak/gi, `${emotki.tak}`).replace(/@tekstowy1/gi, `${emotki.tekstowy1}`).replace(/@tekstowy2/gi, `${emotki.tekstowy2}`).replace(/@trzymajsie/gi, `${emotki.trzymajsie}`).replace(/@usmieszek/gi, `${emotki.usmieszek}`).replace(/@wiadomosci/gi, `${emotki.wiadomosci}`).replace(/@wumpus/gi, `${emotki.wumpus}`).replace(/@wumpusgif/gi, `${emotki.wumpusgif}`).replace(/@wykrzyknik/gi, `${emotki.wykrzyknik}`).replace(/@zarazwracam/gi, `${emotki.zarazwracam}`).replace(/@zasady/gi, `${emotki.zasady}`).replace(/@zebatki/gi, `${emotki.zebatki}`)
        if (odznaki.includes(`Premium`)) czymapremium = emotki.tak
        if (!odznaki.includes(`Premium`)) czymapremium = emotki.nie
        if (target2.bot === true) czyjestbotem = emotki.tak
        if (target2.bot === false) czyjestbotem = emotki.nie
        if (target2.presence.status === `online`) status = emotki.online
        if (target2.presence.status === `idle`) status = emotki.zarazwracam
        if (target2.presence.status === `dnd`) status = emotki.dnd
        if (target2.presence.status === `offline`) status = emotki.offline
        const embed = new Discord.MessageEmbed()
        embed
            .setTitle(`Profil`)
            .setColor(kolor_embeda)
            .addField(`${emotki.ludzie} Dane`, `👨・Nazwa użytkownika: **${target2.username}**\n#️⃣・Tag: **${target2.tag}**\n🆔・ID: **${target2.id}**\n🖼️・Avatar: **[[kliknij]](${target2.displayAvatarURL({ dynamic: true })})**\n📅・Konto stworzone: **${target2.createdAt.toLocaleString('pl-PL', { dateStyle: 'short' })}**`)
            .addField(`${emotki.globus} Globalne`, `💳・Imię: **${imie}**\n🛡️・Wiek: **${wiek}**\n${emotki.ludzie}・Płeć: **${plec}**\n${emotki.globus}・Województwo: **${wojewodztwo}**\n📧・Email: **${email}**\n💰・Premium: **${czymapremium}**\n${emotki.klodka}・Uprawnienia: **${uprawnienia_globalne}**\n🏅・Odznaki: **${odznakii}**`)
            .addField(`🗄️ Serwer`, `📆・Dołączono: **${target1.joinedAt.toLocaleString('pl-PL', { dateStyle: 'short' })}**\n🔢・Ilość ról: **${target1.roles.cache.size}**\n⬆️・Najwyższa rola: **${target1.roles.highest}**`)
            .addField(`${emotki.discord} Discord`, `🤖・BOT: **${czyjestbotem}**\n${emotki.onlinegif}・Status: **${status}**`)
            .setThumbnail(target2.displayAvatarURL({ dynamic: true }))
            .setTimestamp()
            .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
        message.channel.send(embed)
    }
}