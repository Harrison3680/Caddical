module.exports = {
  name: "lockdown",
  code: `
  $title[Lockdown]
  $description[$username issued a lockdown]
  $modifyChannelPerms[$channelID;-sendmessages;$guildID]
  $onlyBotPerms[managechannels;:x: I'm missing the \`{perms}\` permission!]
  $onlyPerms[managechannels;:x: You're missing the \`{perms}\` permissions!]
  `
}
