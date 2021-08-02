const administracyjne_ilosc = fs.readdirSync(`komendy/administracyjne`).length
const administracyjne_lista = fs.readdirSync(`komendy/administracyjne`).join(` \``).replace(/\.js/gi, `\``)
const bot_ilosc = fs.readdirSync(`komendy/bot`).length
const bot_lista = fs.readdirSync(`komendy/bot`).join(` \``).replace(/\.js/gi, `\``)
const konfiguracyjne_ilosc = fs.readdirSync(`komendy/konfiguracyjne`).length
const konfiguracyjne_lista = fs.readdirSync(`komendy/konfiguracyjne`).join(` \``).replace(/\.js/gi, `\``)
const muzyczne_ilosc = fs.readdirSync(`komendy/giveaway`).length
const muzyczne_lista = fs.readdirSync(`komendy/giveaway`).join(` \``).replace(/\.js/gi, `\``)
const praktyczne_ilosc = fs.readdirSync(`komendy/praktyczne`).length
const praktyczne_lista = fs.readdirSync(`komendy/praktyczne`).join(` \``).replace(/\.js/gi, `\``)
const rozrywka_ilosc = fs.readdirSync(`komendy/rozrywka`).length
const rozrywka_lista = fs.readdirSync(`komendy/rozrywka`).join(` \``).replace(/\.js/gi, `\``)
const wszystko_ilosc = administracyjne_ilosc + bot_ilosc + konfiguracyjne_ilosc + muzyczne_ilosc + praktyczne_ilosc + rozrywka_ilosc
module.exports = {
    nazwa: [`pomoc`, `help`],
    callback: async (message, args, text, bot) => {
        const embed = new Discord.MessageEmbed()
        embed
            .setTitle(`Lista moich komend`)
            .setColor(`RANDOM`)
            .setDescription(`> **Posiadam ${wszystko_ilosc} komend!**`)
            .addField(`${emotki.wykrzyknik}・Administracyjne`, `\`${administracyjne_lista}`)
            .addField(`${emotki.help}・Bot`, `\`${bot_lista}`)
            .addField(`${emotki.help}・Konfiguracyjne`, `\`${konfiguracyjne_lista}`)
            .addField(`${emotki.help}・Muzyka [Premium]`, `\`${muzyczne_lista}`)
            .addField(`${emotki.help}・Praktyczne`, `\`${praktyczne_lista}`)
            .addField(`${emotki.help}・Rozrywka`, `\`${rozrywka_lista}`)
            .setTimestamp()
            .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
        message.channel.send(embed)
    }
}