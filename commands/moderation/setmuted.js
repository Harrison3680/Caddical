module.exports = ({
name:"setmute",
code:`$setServerVar[mutedroleid;$message[1]]
$onlyIf[$roleExists[$message[1];$guildID]==false;Please provide a valid role ID]`  
})
const pi =
