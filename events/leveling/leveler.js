module.exports.SpaceCommand = ({
name: "leveler",
code:`
$replaceText[$replaceText[$replaceText[$replaceText[$getServerVar[rmsg];{user.tag};$tag[];{user.mention};<@$authorID>];{level};$getUserVar[lvl]];{exp};$getUserVar[exp]]
$useChannel[$getServerVar[rch]]
$setUserVar[lvl;$sum[$getUserVar[lvl];1]]
$setUserVar[rexp;$multi[$getUserVar[rexp];$getUserVar[lvl]]]
$onlyIf[$getUserVar[exp]>=$getUserVar[rexp];]
$onlyIf[$guildID!=;] 
`})
