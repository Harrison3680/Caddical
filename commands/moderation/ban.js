module.exports = ({
name:"ban",
code:`$ban[$findUser[$message[1]];$message[2]]
$description[$username[$authorID] banned $username[$findUser[$message[1]] for $message[2]].]
$onlyBotPerms[ban;i need the {perms} permission to be able to do this.]
$onlyPerms[ban;You must have the {perms} permission to use this command.]
$onlyIf[$messsage[1]!=;Please mention or give an id of someone to ban]
`
})
