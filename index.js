global.config = require("./config.json")
const Dlang = require('discordbot-script')
const bot = new Dlang({
  token: config.TOKEN,
  prefix: ["C!"]
})
bot.MessageEvent()

const fs = require('fs');
const folders = fs.readdirSync("./commands/")

for (const files of folders) {
    const folder = fs.readdirSync(`./commands/${files}/`).filter(file => file.endsWith(".js"))

    for (const commands of folder) {
        const command = require(`./commands/${files}/${commands}`)
        bot.Command(command);
        console.log(`Loaded: ${command.name} | ${files}`);
    }
}

bot.Variables({
  mutedroleid:"",
  prefix:""
})



bot.Status({
    0: {
        description:"with the developers", 
        type: "PLAYING" 
    }, 
    1: {
        description: "over $guildCount Guilds", 
        type: "WATCHING" 
    }
}, 12000)
 
bot.ReadyCommand({
name: "872559070740103269",
code: `
$client[tag] has been started at $client[readyat]!
$exec[git pull origin main]`

})

