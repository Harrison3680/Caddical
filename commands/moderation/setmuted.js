module.exports = ({
name:"setmuted",
code:`$setServerVar[mutedroleid;$message[1]]
$onlyIf[$roleExists[$message[1];$guildID]==true;Please provide a valid role ID]`  
})

