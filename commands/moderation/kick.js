module.exports = ({
name:"kick",
code:`$kick[$findUser[$message[1]];$message[2]]
$description[$username[$authorID] kicked $username[$findUser[$message[1]] for $message[2]].]
$onlyBotPerms[kick;i need the {perms} permission to be able to do this.]
$onlyPerms[kick;You must have the {perms} permission to use this command.]
$onlyIf[$messsage[1]!=;Please mention or give an id of someone to kick]
`
})
