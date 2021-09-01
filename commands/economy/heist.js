module.exports = ({
name:"heist",
code:`$setServerVar[files;$sub[$getServerVar[files];$getServerVar[files]]]
$editIn[1m;{description:You successfully robbed the vault for $multi[$getServerVar[files];10]$}]
$setVar[cash;$sum[$getVar[cash;$authorID];$multi[$getServerVar[files];10]];$authorID]
$replyIn[1m]
$description[Raiding the vault, wait for a few minutes]
$setServerVar[C4;false]
$onlyIf[$getServerVar[C4]==true;you need C4 to blow open the vault]
$guildCooldown[1h;Wait {time} to be able to raid the vault again]`  
})
