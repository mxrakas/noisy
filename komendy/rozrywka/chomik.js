module.exports = {
    nazwa: `chomik`,
    callback: async (message, args, text, bot) => {
        const liczba = Math.floor(Math.random() * 15) + 1
        switch (liczba) {
            case 1: chomik = `https://media.discordapp.net/attachments/839822074049855498/839920876224512041/Z.png`; break;
            case 2: chomik = `https://media.discordapp.net/attachments/839822074049855498/839920899322544148/2Q.png`; break;
            case 3: chomik = `https://media.discordapp.net/attachments/839822074049855498/839920923959492658/chomik.png`; break;
            case 4: chomik = `https://media.discordapp.net/attachments/839822074049855498/839921018457292880/jak-oswoic-chomika-zeby-nie-gryzl-skuteczne-metody-jpg.png`; break;
            case 5: chomik = `https://media.discordapp.net/attachments/839822074049855498/839921072182919198/hamster-1772742_1920-1024x739.png?width=946&height=683`; break;
            case 6: chomik = `https://media.discordapp.net/attachments/839822074049855498/839921242488176640/jak-rozumiec-odglosy-chomika-i-co-robic-gdy-chomik-wydaje-dziwne-dzwieki-2465488.png`; break;
            case 7: chomik = `https://media.discordapp.net/attachments/839822074049855498/839921282505244672/gf-YZyq-AEb7-5zrh_chomik-664x442-nocrop.png`; break;
            case 8: chomik = `https://media.discordapp.net/attachments/839822074049855498/839921301295857694/000ATJ9JR48R7OT3-C122-F4.png`; break;
            case 9: chomik = `https://media.discordapp.net/attachments/839822074049855498/839921315800416337/9k.png`; break;
            case 10: chomik = `https://media.discordapp.net/attachments/839822074049855498/839921342258085919/chomik-dzungarski.png`; break;
            case 11: chomik = `https://media.discordapp.net/attachments/839822074049855498/839921389569966080/co-jedza-chomiki.png?width=1025&height=683`; break;
            case 12: chomik = `https://media.discordapp.net/attachments/839822074049855498/839921410947809311/gf-frZZ-Ck7b-33kt_chomik-dzungarski-syryjski-i-nie-tylko-co-warto-wiedziec-o-chomiku-1920x1080-nocro.png?width=733&height=683`; break;
            case 13: chomik = `https://media.discordapp.net/attachments/839822074049855498/839921431684972544/chomik-syryjski-wymagania-gatunku-opieka-dlugosc-zycia-2449176.png`; break;
            case 14: chomik = `https://media.discordapp.net/attachments/839822074049855498/839921450868539412/czy-chomiki-moga-jesc-ogorki-4.png`; break;
            case 15: chomik = `https://static.wikia.nocookie.net/among-us-wiki/images/1/1e/Hamster.png/revision/latest/top-crop/width/360/height/360?cb=20201003183731`; break;
        }
        const embed = new Discord.MessageEmbed()
        embed
            .setTitle(`🐹 Chomik!`)
            .setColor(kolor_embeda)
            .setDescription(`Oto chomik dla Ciebie!`)
            .setImage(chomik)
            .setTimestamp()
            .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
        message.channel.send(embed)
    }
}