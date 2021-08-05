module.exports = ({
name: "mute",  
code: `$takeRole[$getServerVar[mutedroleid];$findUser[$message[1]];Mute time is up]
$replyIn[$message[2]]
$description[:white_check_mark: | Gave the muted role to $username[$findUser[$message[1]]]!
Reason: *$messageSlice[>3]*]
$giveRole[$getServerVar[mutedroleid];$findUser[$message[1]];$messageSlice[>3]]
$onlyIf[$message[2]!=;You need to get a specified time example C!mute Harrison 3d Yes **MAX MUTE TIME IS 29 DAYS**]
$onlyIf[$message[1]!=;You need to mention someone or give an id]
$onlyIf[$getServerVar[mutedroleid]!=;You have to have a muted role set to set one use C!setmuted <roleID>]
$onlyPerms[manageroles;You must have the {perms} permission to use this command!]
$onlyPerms[managemessages;You must have the {perms} permission to use this command!]
$onlyBotPerms[manageroles;Give me the {perms} permission for me to do that]


`
})
