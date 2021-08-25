module.exports.SpaceCommand = ({
name: "leveler",
code:`
<@$authorID> has leveled up to $getUserVar[lvl]
$useChannel[$getServerVar[rch]]
$setUserVar[rexp;$multi[$getUserVar[rexp];$getUserVar[lvl]]]
$setUserVar[lvl;$sum[$getUserVar[lvl];1]]
$onlyIf[$getUserVar[exp]>=$getUserVar[rexp];]
`})
