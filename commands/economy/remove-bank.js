 module.exports = ({
        name:"remove-bank",
        code:`$title[Cash removed from bank]
        $description[Successfully removed $$message[1] from $username[$mentioned[1]]'s bank']
        $setUserVar[bank;$sub[$getUserVar[bank;$mentioned[1]];$message[1]];$mentioned[1]]
         $onlyPerms[manageserver; You must have the {perms} permission to use this command!]`
        })
        
