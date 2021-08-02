module.exports = {
    commands: [`odetnij`],
    callback: async (message, args, text, bot) => {
        const embed = new Discord.MessageEmbed()
        embed
            .setTitle(`Sukces!`)
            .setColor(kolor_embeda)
            .setDescription(`:scissors: Odcinam czat!`)
            .setImage(`http://patryczekktv.pl/img/Linia.gif`)
            .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
        message.channel.send(embed)
    }
}