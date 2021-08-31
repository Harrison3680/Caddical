module.exports = ({
name:"add-file",
code:`$description[1 file has been addded to the vault]
$setServerVar[files;$sum[$getServerVar[files];1]]
$onlyIf[$getServerVar[files]==$getServerVar[VaultCap]]`  
})
