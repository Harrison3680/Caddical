let u = "$findUser[$message[1]]"

module.exports = ({
name:"ban",
code: `

$ban[${u};$guildID;(ByL $tag[]) - $replaceText[$replaceText[$checkCondition[$message[2]==];true;No Reason Provided];false;messageSlice[>1]]

**$tag[${u}]** has been banned by **$tag[]**

$onlyIf[$rolePosition[$highestRole]<$rolePosition[$highestRole[${u}]];You cannot ban a higher ranked user]
$onlyIf[$rolePosition[$highestRole[$client[id]]]<$rolePosition[$highestRole[${u}]];My rank isn't high enough to ban that user]
$onlyIf[$ownerID!=${u};You can't ban the owner]
$onlyIf[$authorID!=${u};You can't ban yourself]
$onlyIf[$client[id]!=${u};Rude :(]
$onlyIf[$userExists[${u}]==true;That user doesn't appear to exist]
$onlyBotPerms[ban;:x: I'm missing the `{perms}` permission!]
$onlyPerms[ban;:x: You're missing the `{perms}` permissions!]
`})
