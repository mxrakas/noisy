module.exports = {
    commands: [`kratka`],
    callback: async (message, args, text, bot) => {
        if (!args[0]) {
            const embed = new Discord.MessageEmbed()
            embed
                .setTitle(`Błąd!`)
                .setColor(kolor_embeda_bledu)
                .setDescription(`${emotki.nie} Musisz coś napisać!`)
                .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
            message.channel.send(embed)
        }
        else {
            const embed = new Discord.MessageEmbed()
            embed
                .setTitle(`Kratka!`)
                .setColor(kolor_embeda)
                .setDescription(`\`\`\`${args.join(` `)}\`\`\``)
                .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
            message.channel.send(embed)
        }
    }
}