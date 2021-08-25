module.exports.SpaceCommand = ({
name: "leveler",
code:`
<@$authorID> has leveled up to $getUserVar[lvl]
$useChannel[$getServerVar[rch]]
$setUserVar[lvl;$sum[$getUserVar[lvl];1]]
$setUserVar[rexp;$multi[$getUserVar[rexp];$getUserVar[lvl]]]
$onlyIf[$getUserVar[exp]>=$getUserVar[rexp];]
`})
