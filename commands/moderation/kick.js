/*
module.exports = ({
name:"kick",
code:`$kick[$findUser[$message[1]];$message[2]]
$description[$username[$authorID] kicked $username[$findUser[$message[1]] for $message[2]].]
$onlyBotPerms[kick;i need the {perms} permission to be able to do this.]
$onlyPerms[kick;You must have the {perms} permission to use this command.]
$onlyIf[$messsage[1]!=;Please mention or give an id of someone to kick]
`
})
*/


let u = "$findUser[$message[1]]"

module.exports = ({
name:"kick",
code: `
$kick[${u};$guildID;(By: $tag[]) - $replaceText[$replaceText[$checkCondition[$message[2]==];true;No Reason Provided];false;$messageSlice[>1]]
**$tag[${u}]** has been kicked by **$tag[]**
$onlyIf[$rolePosition[$highestRole]<$rolePosition[$highestRole[${u}]];You cannot kick a higher ranked user]
$onlyIf[$rolePosition[$highestRole[$client[id]]]<$rolePosition[$highestRole[${u}]];My rank isn't high enough to kick that user]
$onlyIf[$ownerID!=${u};You can't kick the owner]
$onlyIf[$authorID!=${u};You can't kick yourself]
$onlyIf[$client[id]!=${u};Rude :(]
$onlyIf[$userExists[${u}]==true;That user doesn't appear to exist]
$onlyBotPerms[kick;:x: I'm missing the \`{perms}\` permission!]
$onlyPerms[kick;:x: You're missing the \`{perms}\` permissions!]
`})
