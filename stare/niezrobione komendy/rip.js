module.exports = {
    nazwa: [`rip`],
    callback: async (message, args, text, bot) => {
        const target1 = message.mentions.members.first() || message.member
        const target2 = message.mentions.users.first() || message.author
        const dateObj = new Date();
        const month = dateObj.getMonth() + 1;
        const day = dateObj.getDate();
        const year = dateObj.getFullYear();
        const output = day + `.` + month + `.` + year
        const nazwauzytkownika1 = target1.nickname || target2.username
        const nazwauzytkownika2 = nazwauzytkownika1.replace(/\ /gi, `%20`)
        const embed = new Discord.MessageEmbed()
        embed
            .setTitle(`R.I.P`)
            .setColor(kolor_embeda)
            .setDescription(`${message.author} uśmiercił ${target2} :(`)
            .setImage(`http://www.tombstonebuilder.com/generate.php?top1=R.I.P&top2=&top3=${nazwauzytkownika2}&top4=${output}&sp=`)
            .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
        message.channel.send(embed)
    }
}