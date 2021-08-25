
 module.exports = ({
    name:"add-bank",
    code:`$title[Cash added to bank]
    $description[Successfully added $$message[1] to $username[$mentioned[1]]'s bank]
    $setUserVar[bank;$sum[$getUserVar[bank;$mentioned[1]];$message[1]];$mentioned[1]]
    $onlyPerms[manageserver; You must have the {perms} permission to use this command!]`
    })
    
