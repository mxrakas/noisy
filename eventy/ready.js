module.exports = (client, console) => {
    console.log(chalk.cyan(`🤖・Pomyślnie uruchomiono bota!`))
    console.log(chalk.cyan(`🤖・Tag bota: ${client.user.tag}`))
    console.log(chalk.cyan(`🤖・Prefix domyślny bota: ${prefix}`))
    console.log(chalk.cyan(`🤖・Kolor embeda: ${kolor_embeda}`))
    console.log(chalk.cyan(`🤖・Kolor embeda błędu: ${kolor_embeda_bledu}`))


    // client.user.setPresence({
    //     activity: {type: `WATCHING`, name: `${client.guilds.cache.size} serwerów`},
    //     status: `online`
    // })

    const baseFile = `command-handler.js`
    const commandBase = require(`.././handlery/${baseFile}`)

    const readCommands = (dir) => {
        const files = fs.readdirSync(path.join(__dirname, dir))
        for (const file of files) {
            const stat = fs.lstatSync(path.join(__dirname, dir, file))
            if (stat.isDirectory()) {
                readCommands(path.join(dir, file))
            } else if (file !== baseFile) {
                const option = require(path.join(__dirname, dir, file))
                commandBase(client, option)
            }
        }
    }

    readCommands(`.././komendy`)

    // client2.api.applications(client2.user.id).guilds(serwerdev.id).commands.post({
    //     data: {
    //         name: `heloł`,
    //         description: `Odpowiada Heloł Łorld!`
    //     }
    // })

    // client2.api.applications(client2.user.id).guilds(serwerdev.id).commands(``).delete()
    // client2.api.applications(client2.user.id).guilds(serwerdev.id).commands.get().then(console.log)

    // client2.api.applications(client2.user.id).guilds(serwerdev.id).commands.post({
    //     data: {
    //         name: `squishyrat`,
    //         description: `Wysyła fajny gif!`
    //     }
    // })

    // client2.api.applications(client2.user.id).guilds(serwerdev.id).commands.post({
    //     data: {
    //         name: `echo`,
    //         description: `Wysyła twój tekst jako embed!`,
    //         options: [
    //             {
    //                 name: `treść`,
    //                 description: `Treść embeda`,
    //                 type: 3,
    //                 required: true
    //             }
    //         ]
    //     }
    // })

    // client2.ws.on(`INTERACTION_CREATE`, async interaction => {
    //     const command = interaction.data.name.toLowerCase()
    //     const args = interaction.data.options

    //     if (command == `heloł`) {
    //         client2.api.interactions(interaction.id, interaction.token).callback.post({
    //             data: {
    //                 type: 5,
    //             }
    //         })
    //         client2.api.webhooks(client2.user.id, interaction.token).messages(`@original`).patch({
    //             data: {
    //                 content: `Heloł Łorld!`
    //             }
    //         })
    //     }

    //     if (command == `test`) {
    //         client2.api.interactions(interaction.id, interaction.token).callback.post({
    //             data: {
    //                 type: 5,
    //             }
    //         })
    //         client2.api.webhooks(client2.user.id, interaction.token).messages(`@original`).patch({
    //             data: {
    //                 content: `Test!`
    //             }
    //         })
    //     }

    //     if (command == `squishyrat`) {
    //         const author = client2.users.cache.get(interaction.member.user.id)
    //         const embed = new Discord.MessageEmbed()
    //         embed
    //             .setTitle(`Squishy rat!`)
    //             .setColor(kolor_embeda)
    //             .setImage(`http://patryczekktv.pl/img/Squishy%20rat.gif`)
    //             .setTimestamp()
    //             .setFooter(`${author.tag} (${author.id})`, author.displayAvatarURL({ dynamic: true }))
    //         client2.api.interactions(interaction.id, interaction.token).callback.post({
    //             data: {
    //                 type: 5,
    //             }
    //         })
    //         client2.api.webhooks(client2.user.id, interaction.token).messages(`@original`).patch({
    //             data: await createAPIMessage(interaction, embed)
    //         })
    //     }

    //     if (command == `echo`) {
    //         const treść = args.find(arg => arg.name.toLowerCase() == `treść`).value
    //         const author = client2.users.cache.get(interaction.member.user.id)
    //         const embed = new Discord.MessageEmbed()
    //         embed
    //             .setTitle(`Echo!`)
    //             .setColor(kolor_embeda)
    //             .setDescription(`${author} mówi: ${treść}`)
    //             .setTimestamp()
    //             .setFooter(`${author.tag} (${author.id})`, author.displayAvatarURL({ dynamic: true }))
    //         client2.api.interactions(interaction.id, interaction.token).callback.post({
    //             data: {
    //                 type: 5,
    //             }
    //         })
    //         client2.api.webhooks(client2.user.id, interaction.token).messages(`@original`).patch({
    //             data: await createAPIMessage(interaction, embed)
    //         })
    //     }
    // })
}