module.exports = {
    nazwa: [`ip`],
    callback: async (message, args, text, bot) => {
        const embed = new Discord.MessageEmbed()
        const liczba2 = Math.floor(Math.random() * 10)
        const liczba3 = Math.floor(Math.random() * 10)
        const liczba4 = Math.floor(Math.random() * 10)
        const liczba5 = Math.floor(Math.random() * 10)
        const liczba6 = Math.floor(Math.random() * 10)
        const liczba7 = Math.floor(Math.random() * 10)
        const liczba8 = Math.floor(Math.random() * 10)
        const liczba9 = Math.floor(Math.random() * 10)
        const liczba10 = Math.floor(Math.random() * 10)
        const liczba11 = Math.floor(Math.random() * 10)
        embed
            .setTitle(`Generator IP`)
            .setColor(kolor_embeda)
            .setDescription(`000.000.00.00`)
            .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
        const embedmessage = await message.channel.send(embed)
        setTimeout(function () {
            embed
                .setTitle(`Generator IP`)
                .setColor(kolor_embeda)
                .setDescription(`${liczba2}00.000.00.00`)
                .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
            embedmessage.edit(embed)
        }, 2000)
        setTimeout(function () {
            embed
                .setTitle(`Generator IP`)
                .setColor(kolor_embeda)
                .setDescription(`${liczba2}${liczba3}0.000.00.00`)
                .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
            embedmessage.edit(embed)
        }, 4000)
        setTimeout(function () {
            embed
                .setTitle(`Generator IP`)
                .setColor(kolor_embeda)
                .setDescription(`${liczba2}${liczba3}${liczba4}.000.00.00`)
                .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
            embedmessage.edit(embed)
        }, 6000)
        setTimeout(function () {
            embed
                .setTitle(`Generator IP`)
                .setColor(kolor_embeda)
                .setDescription(`${liczba2}${liczba3}${liczba4}.${liczba5}00.00.00`)
                .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
            embedmessage.edit(embed)
        }, 8000)
        setTimeout(function () {
            embed
                .setTitle(`Generator IP`)
                .setColor(kolor_embeda)
                .setDescription(`${liczba2}${liczba3}${liczba4}.${liczba5}${liczba6}0.00.00`)
                .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
            embedmessage.edit(embed)
        }, 10000)
        setTimeout(function () {
            embed
                .setTitle(`Generator IP`)
                .setColor(kolor_embeda)
                .setDescription(`${liczba2}${liczba3}${liczba4}.${liczba5}${liczba6}${liczba7}.00.00`)
                .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
            embedmessage.edit(embed)
        }, 12000)
        setTimeout(function () {
            embed
                .setTitle(`Generator IP`)
                .setColor(kolor_embeda)
                .setDescription(`${liczba2}${liczba3}${liczba4}.${liczba5}${liczba6}${liczba7}.${liczba8}0.00`)
                .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
            embedmessage.edit(embed)
        }, 14000)
        setTimeout(function () {
            embed
                .setTitle(`Generator IP`)
                .setColor(kolor_embeda)
                .setDescription(`${liczba2}${liczba3}${liczba4}.${liczba5}${liczba6}${liczba7}.${liczba8}${liczba9}.00`)
                .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
            embedmessage.edit(embed)
        }, 16000)
        setTimeout(function () {
            embed
                .setTitle(`Generator IP`)
                .setColor(kolor_embeda)
                .setDescription(`${liczba2}${liczba3}${liczba4}.${liczba5}${liczba6}${liczba7}.${liczba8}${liczba9}.${liczba10}0`)
                .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
            embedmessage.edit(embed)
        }, 18000)
        setTimeout(function () {
            embed
                .setTitle(`Generator IP`)
                .setColor(kolor_embeda)
                .setDescription(`${liczba2}${liczba3}${liczba4}.${liczba5}${liczba6}${liczba7}.${liczba8}${liczba9}.${liczba10}${liczba11}`)
                .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
            embedmessage.edit(embed)
        }, 20000)
    }
}