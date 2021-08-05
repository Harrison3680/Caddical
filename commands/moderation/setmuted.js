module.exports = ({
name:"setmute",
code:`$setServerVar[mutedroleid;$message[1]]
$onlyIf[$roleExists[$message[1]]==false;Please provide a valid role ID]`  
})
