module.exports = {
    nazwa: `ustawodznaki`,
    callback: async (message, args, text, bot) => {
        if (message.author.id !== "831618083621175316")  {
            const embed = new Discord.MessageEmbed()
            embed
                .setTitle(`${emotki.blad} Błąd!`)
                .setColor("RED")
                .setDescription(`Nie posiadasz uprawnień globalnych!`)
                .addField(`${emotki.klodka} Potrzebne uprawnienia globalne:`, `\`Właściciel bota\``)
                .setTimestamp()
                .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
            message.channel.send(embed)
        }
        else {
            if (!args[0]) {
                const embed = new Discord.MessageEmbed()
                embed
                    .setTitle(`${emotki.blad} Błąd!`)
                    .setColor("RED")
                    .setDescription(`Nie podano id osoby!`)
                    .setTimestamp()
                    .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                message.channel.send(embed)
            }
            else {
                const id = args[0]
                if (!args[1]) {
                    const embed = new Discord.MessageEmbed()
                    embed
                        .setTitle(`${emotki.blad} Błąd!`)
                        .setColor("RED")
                        .setDescription(`Nie podano odznak!`)
                        .setTimestamp()
                        .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                    message.channel.send(embed)
                }
                else {
                    const user = bot.users.cache.get(id)
                    const odznaki = args.splice(1).join(` `)
                    const odznakii = odznaki.replace(/@ban/gi, `${emotki.ban}`).replace(/@blad/gi, `${emotki.blad}`).replace(/@bot/gi, `${emotki.bot}`).replace(/@developer/gi, `${emotki.developer}`).replace(/@discord/gi, `${emotki.discord}`).replace(/@discordjs/gi, `${emotki.discordjs}`).replace(/@discordpartner/gi, `${emotki.discordpartner}`).replace(/@dnd/gi, `${emotki.dnd}`).replace(/@dol/gi, `${emotki.dol}`).replace(/@globus/gi, `${emotki.globus}`).replace(/@glosowy1/gi, `${emotki.glosowy1}`).replace(/@glosowy2/gi, `${emotki.glosowy2}`).replace(/@google/gi, `${emotki.google}`).replace(/@gora/gi, `${emotki.gora}`).replace(/@haker/gi, `${emotki.haker}`).replace(/@hmm/gi, `${emotki.hmm}`).replace(/@jeb/gi, `${emotki.jeb}`).replace(/@klodka/gi, `${emotki.klodka}`).replace(/@kociokekw/gi, `${emotki.kociokekw}`).replace(/@kociolajk/gi, `${emotki.kociolajk}`).replace(/@korona/gi, `${emotki.korona}`).replace(/@krysztalki1/gi, `${emotki.krysztalki1}`).replace(/@krysztalki2/gi, `${emotki.krysztalki2}`).replace(/@krysztalki3/gi, `${emotki.krysztalki3}`).replace(/@kursor/gi, `${emotki.kursor}`).replace(/@ladowanie/gi, `${emotki.ladowanie}`).replace(/@lapka/gi, `${emotki.lapka}`).replace(/@logobota/gi, `${emotki.logobota}`).replace(/@ludek/gi, `${emotki.ludek}`).replace(/@ludzie/gi, `${emotki.ludzie}`).replace(/@minus/gi, `${emotki.minus}`).replace(/@misiaczek/gi, `${emotki.misiaczek}`).replace(/@mniam/gi, `${emotki.mniam}`).replace(/@nie/gi, `${emotki.nie}`).replace(/@nitro/gi, `${emotki.nitro}`).replace(/@nodejs/gi, `${emotki.nodejs}`).replace(/@nutka/gi, `${emotki.nutka}`).replace(/@obsydianek/gi, `${emotki.obsydianek}`).replace(/@offline/gi, `${emotki.offline}`).replace(/@offlinegif/gi, `${emotki.offlinegif}`).replace(/@ogloszeniowy/gi, `${emotki.ogloszeniowy}`).replace(/@online/gi, `${emotki.online}`).replace(/@onlinegif/gi, `${emotki.onlinegif}`).replace(/@pamiecram/gi, `${emotki.pamiecram}`).replace(/@papier/gi, `${emotki.papier}`).replace(/@papuzka/gi, `${emotki.papuzka}`).replace(/@pisanie/gi, `${emotki.pisanie}`).replace(/@plik/gi, `${emotki.plik}`).replace(/@plus/gi, `${emotki.plus}`).replace(/@plus1/gi, `${emotki.plus1}`).replace(/@plytka/gi, `${emotki.plytka}`).replace(/@pobieranie/gi, `${emotki.pobieranie}`).replace(/@portalik/gi, `${emotki.portalik}`).replace(/@riczbicz/gi, `${emotki.riczbicz}`).replace(/@saltko/gi, `${emotki.saltko}`).replace(/@serduszko/gi, `${emotki.serduszko}`).replace(/@slash/gi, `${emotki.slash}`).replace(/@sloneczko/gi, `${emotki.sloneczko}`).replace(/@smuteczek/gi, `${emotki.smuteczek}`).replace(/@squishyrat/gi, `${emotki.squishyrat}`).replace(/@staty/gi, `${emotki.staty}`).replace(/@strzalka1/gi, `${emotki.strzalka1}`).replace(/@strzalka2/gi, `${emotki.strzalka2}`).replace(/@strzalkagif/gi, `${emotki.strzalkagif}`).replace(/@support/gi, `${emotki.support}`).replace(/@swiatelko/gi, `${emotki.swiatelko}`).replace(/@tak/gi, `${emotki.tak}`).replace(/@tekstowy1/gi, `${emotki.tekstowy1}`).replace(/@tekstowy2/gi, `${emotki.tekstowy2}`).replace(/@trzymajsie/gi, `${emotki.trzymajsie}`).replace(/@usmieszek/gi, `${emotki.usmieszek}`).replace(/@wiadomosci/gi, `${emotki.wiadomosci}`).replace(/@wumpus/gi, `${emotki.wumpus}`).replace(/@wumpusgif/gi, `${emotki.wumpusgif}`).replace(/@wykrzyknik/gi, `${emotki.wykrzyknik}`).replace(/@zarazwracam/gi, `${emotki.zarazwracam}`).replace(/@zasady/gi, `${emotki.zasady}`).replace(/@zebatki/gi, `${emotki.zebatki}`)
                    db.set(`${id}.odznaki`, odznaki)
                    const embed = new Discord.MessageEmbed()
                    embed
                        .setTitle(`${emotki.tak} Sukces!`)
                        .setColor("RANDOM")
                        .setDescription(`Pomyślnie ustawiono odznaki użytkownika!`)
                        .addField(`${emotki.developer} Developer:`, `${message.author} (${message.author.tag})`)
                        .addField(`${emotki.ludzie} Użytkownik:`, `${user} (${user.tag})`)
                        .addField(`🏅 Odznaki:`, odznakii)
                        .setThumbnail(user.displayAvatarURL({ dynamic: true }))
                        .setTimestamp()
                        .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                    message.channel.send(embed)
                }
            }
        }
    }
}