global.config = require("./config.json")
const Dlang = require('discordbot-script')
const bot = new Dlang({
  token: config.TOKEN,
  prefix: ["$getServerVar[prefix]"]
})
bot.MessageEvent()

const fs = require('fs');
const folders = fs.readdirSync("./commands/")

for (const files of folders) {
    const folder = fs.readdirSync(`./commands/${files}/`).filter(file => file.endsWith(".js"))

    for (const commands of folder) {
        const command = require(`./commands/${files}/${commands}`)
        bot.Command(command);
    }
}
const events = fs.readdirSync("./events/");
for (const Files of events) {
    const eventFile = fs.readdirSync(`./events/${Files}/`).filter(file => file.endsWith(".js"))
    for (const event of eventFile) {
        const obj = require(`./events/${Files}/${event}`);
        if (typeof(obj) != "object") {
        console.log("invalid module.exports data ...shutting down");
        process.exit();
}
        const eventName = Object.keys(obj);
        const eventData = Object.values(obj)[0];
        if (typeof(eventData) != "object") {
            if (typeof(eventData) != "number") {
                console.log("invalid event data ...shutting down");
                process.exit();
             }
        }
        bot[eventName](eventData);
        if(bot.vars){
            bot.Variables(eventData);
        } if(bot.awaitedCommands){
            bot.AwaitedCommand(eventData);
        }
    }
}

bot.Variables({
  mutedroleid:"",
  prefix:"C!",
  xp:"0",
  rxp:"500",
  level:"0"
})



bot.Status({
    0: {
        description:"with the developers", 
        type: "PLAYING" 
    }, 
    1: {
        description: "over $guildCount Guilds", 
        type: "WATCHING" 
    },
    2: {
        description:"over $uptime uptime",
        type:"WATCHING"
    }
}, 12000)
 
bot.ReadyCommand({
name: "872559070740103269",
code: `
$client[tag] has been started at $client[readyat]!
$exec[git pull origin main]`

})

