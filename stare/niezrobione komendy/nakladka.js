module.exports = {
    nazwa: `nakladka`,
    callback: async (message, args, text, bot) => {
        const target = message.mentions.users.first() || message.author
        const Canvas = require(`canvas`)
        const canvas = Canvas.createCanvas(1000, 1000)
        const ctx = canvas.getContext(`2d`)
        const background = await Canvas.loadImage(target.displayAvatarURL({ format: `png`, dynamic: true, size: 2048 }))
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height)
        const avatar = await Canvas.loadImage(`Nakladka_najlepszego_bota.png`)
        ctx.drawImage(avatar, 0, 0, 1000, 1000)
        const attachment = new Discord.MessageAttachment(canvas.toBuffer(), `Nakladka_najlepszego_bota.png`)
        message.channel.send(`🖼️ Pomyślnie wygenerowano nakładkę dla ${target}!`, attachment)
    }
}