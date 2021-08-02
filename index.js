require(`dotenv`).config()
require(`discord-reply`)
global.Discord = require(`discord.js`)
global.client = new Discord.Client()
config = require("./config.json")
require(`events`).EventEmitter.defaultMaxListeners = Infinity
global.axios = require(`axios`)
global.fs = require(`fs`)
global.path = require(`path`)
global.jsonWriter = require(`fs-json-writer`)
global.ytdl = require(`ytdl-core`)
global.chalk = require(`chalk`)
global.math = require(`mathjs`)
global.emoji = require(`discord-emoji-convert`)
global.db = require(`quick.db`)
global.emotki = require(`./emotki.json`)
global.uprawnieniaa = require(`./uprawnienia.json`)
global.gprefix = config.prefix
global.kolor_embeda = config.kolor_embeda
global.kolor_embeda_bledu = config.kolor_embeda_bledu

client.on(`ready`, async () => {
    onReady = require(`./eventy/ready.js`)
    onReady(client, console)
})
// async function createAPIMessage(interaction, content) {
//     const apiMessage = await Discord.APIMessage.create(client2.channels.resolve(interaction.channel_id), content)
//         .resolveData()
//         .resolveFiles()
//     return { ...apiMessage.data, files: apiMessage.files }
// })

// client2.on(`ready`, async () => {
//     client2.user.setPresence({activity: {type: `WATCHING`, name: `Neavy.gq`}, status: `online`})
// })



client.on(`guildMemberAdd`, async member => {
    onGuildMemberAdd = require(`./eventy/guildMemberAdd.js`)
    onGuildMemberAdd(member)
})

client.on(`guildMemberRemove`, async member => {
    onGuildMemberRemove = require(`./eventy/guildMemberRemove.js`)
    onGuildMemberRemove(member)
})

client.on(`guildCreate`, async guild => {
    onGuildCreate = require(`./eventy/guildCreate.js`)
    onGuildCreate(guild)
})


client.on(`guildDelete`, async guild => {
    onGuildDelete = require(`./eventy/guildDelete.js`)
    onGuildDelete(guild)
})

client.on(`message`, async message => {
    if (message.channel.type === `dm` || message.author.bot) return
    // const embed = new Discord.MessageEmbed()
    // embed
    //     .setTitle(`${emotki.wykrzyknik} Napisano wiadomość!`)
    //     .setColor(kolor_embeda)
    //     .addField(`${emotki.ludzie} Autor wiadomości:`, message.author)
    //     .addField(`#️⃣ Tag autora wiadomości:`, message.author.tag)
    //     .addField(`🆔 ID autora wiadomości:`, message.author.id)
    //     .addField(`${emotki.support} Treść wiadomości:`, message.content)
    //     .addField(`${emotki.kursor} Nazwa serwera:`, message.guild.name)
    //     .addField(`🆔 ID serwera:`, message.guild.id)
    //     .addField(`${emotki.ludzie} Liczba osób:`, message.guild.memberCount)
    //     .addField(`${emotki.korona} Właściciel serwera:`, message.guild.owner.user)
    //     .addField(`#️⃣ Tag właściciela serwera:`, message.guild.owner.user.tag)
    //     .addField(`🆔 ID właściciela serwera:`, message.guild.owner.user.id)
    //     .setThumbnail(message.guild.iconURL({ dynamic: true }))
    //     .setTimestamp()
    //     .setFooter(`${message.guild.owner.user.tag} (${message.guild.owner.user.id})`, message.guild.owner.user.displayAvatarURL({ dynamic: true }))
    // client.channels.cache.get(`859152353402814484`).send(embed)
    if (message.content === `<@!${client.user.id}>` || message.content === `<@${client.user.id}>`) {
        const dbmembersfiles = fs.readdirSync(`gbany`).join(`, `).replace(/\.json/gi, ``)
        if (dbmembersfiles.includes(message.author.id)) {
            const dbmembers = require(`./gbany/${message.author.id}.json`)
            const gbancheck = dbmembers.gbancheck || `Nie!`
            const gbanreason = dbmembers.gbanreason || `Brak powodu`
            if (gbancheck === `Tak!`) {
                const embed = new Discord.MessageEmbed()
                embed
                    .setTitle(`${emotki.blad} Błąd!`)
                    .setColor("RED")
                    .setDescription(`Twoje konto jest globalnie zbanowane!`)
                    .addField(`${emotki.ludzie} Użytkownik:`, `${message.author} (${message.author.tag})`)
                    .addField(`${emotki.support} Powód:`, gbanreason)
                    .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
                    .setTimestamp()
                    .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({dynamic: true}))
                message.channel.send(embed)
                return
            }
        }
        // if (message.author !== wlasciciel1) {
        //     if (message.guild.id !== `857636272473767937`) {
        //         const embed = new Discord.MessageEmbed()
        //         embed
        //             .setTitle(`${emotki.blad} Błąd!`)
        //             .setColor(kolor_embeda_bledu)
        //             .setDescription(`Jestem podczas prac konserwacyjnych!`)
        //             .setTimestamp()
        //             .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
        //         message.channel.send(embed)
        //         return
        //     }
        // }
        message.react(`🏓`)
        const prefix = db.fetch(`${message.guild.id}.prefix`) || gprefix
        let totalSeconds = (client.uptime / 1000)
        let days = Math.floor(totalSeconds / 86400)
        totalSeconds %= 86400
        let hours = Math.floor(totalSeconds / 3600)
        totalSeconds %= 3600
        let minutes = Math.floor(totalSeconds / 60)
        let seconds = Math.floor(totalSeconds % 60)
        let uptime = (days > 0 ? days + `d, ` : ``) + (hours > 0 ? hours + `h, ` : ``) + (minutes > 0 ? minutes + `m, ` : ``) + (seconds > 0 ? seconds + `s` : ``)
        let botuptime = uptime || `0s`
        const embed = new Discord.MessageEmbed()
        embed
            .setColor("RANDOM")
            .setDescription(`> **Hejka! Jestem ${client.user.username}, wielofunkcyjnym botem do discorda!**\n> **Zaufało mi aż ${client.guilds.cache.size} serwerów!**\n> **Listę komend znajdziesz po wpisaniu __${prefix}pomoc__!**`)
            .addField(`${emotki.zebatki}・Prefix:`, prefix)
            .addField(`🏓・Ping:`, `${client.ws.ping}ms`)
            .addField(`${emotki.support}・Uptime:`, botuptime)
            .addField(`🔗・Linki:`, `[Zaproszenie](https://neavy.gq/zapros)・[Strona](https://neavy.gq)・[Serwer](https://neavy.gq/discord)`)
            .setTimestamp()
            .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({dynamic: true}))
        message.channel.send(embed)
    }
    // if (message.guild === serwerdev) {
    //     if (message.channel.id === `859884507095236608`) {
    //         try {
    //             message.react(`👍`).then(function () {
    //                 message.react(`👎`)
    //             })
    //         }
    //         catch { return }
    //     }
    // 



client.login(config.token).then(() => {
}).catch(() => {
    console.log(chalk.red(`============================`))
    setInterval(async function () {
        console.log(chalk.red(`Podaj prawidłowy token!`))
        console.log(chalk.red(`============================`))

