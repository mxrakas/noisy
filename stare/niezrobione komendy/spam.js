module.exports = {
    commands: [`spam`],
    callback: async (message, args, text, bot) => {
        const embed = new Discord.MessageEmbed()
        embed
            .setTitle(`Spam!`)
            .setColor(kolor_embeda)
            .setDescription(`😋`)
            .setImage(`https://4.bp.blogspot.com/-dRBZcRothP0/WbkGZzd4H3I/AAAAAAAADio/67vVCCMKGbsa3FCFUNLVjQsH4t3IfiI1QCLcBGAs/s320/Spam_can.png`)
            .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
        message.channel.send(embed)
    }
}