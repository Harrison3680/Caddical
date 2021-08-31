module.expprts = ({
name:"hesit",
code:`$editIn[1m;{description:You successfully robbed the vault for $multi[$getServerVar[files];10]}]
$setVar[cash;$sum[$getVar[cash;$authorID];$multi[$getServerVar[files];10];$authorID]
$setServerVar[files;$sub[$getServerVar[files];$getServerVar[files]]]
$replyIn[1m]
$description[Raiding the vault wait for a few minutes]
$onlyIf[$getServerVar[C4]!=]`  
})
