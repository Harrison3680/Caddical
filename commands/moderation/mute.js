module.exports = ({
name: "mute",
code: `$replyIn[$message[2]]
$giveRole[$getServerVar[mutedroleid];$findUser[$message[1]];$messageSlice[>3]]
:white_check_mark: | Gave the muted role to $username[$findUser[$message[1]]]!
Reason: *$messageSlice[>3]*
$onlyIf[$message[2]!=;You need to get a specified time example C!mute Harrison 3d Yes ]
$onlyIf[$message[1]!=;You need to mention someone or give an id]
$onlyIf[$getServerVar[mutedroleid]!=;You have to have a muted role set to set one use C!setmuted <roleID>]
`
})
