       module.exports = ({
        name:"remove-cash",
        code:`$title[Cash removed]
        $description[Successfully removed $$message[1] from $username[$mentioned[1]]]
        $setUserVar[cash;$sub[$getUserVar[cash;$mentioned[1]];$message[1]];$mentioned[1]]
        $onlyPerms[manageserver; You must have the {perms} permission to use this command!]`
        })

