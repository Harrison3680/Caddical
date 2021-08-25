module.exports = ({
    name:"add-cash",
    code:`$title[Cash added]
    $description[Successfully added $$message[1] to $username[$mentioned[1]]]
    $setUserVar[cash;$sum[$getUserVar[cash;$mentioned[1]];$message[1]];$mentioned[1]]
    $onlyPerms[manageserver; You must have the {perms} permission to use this command!]`
    })
