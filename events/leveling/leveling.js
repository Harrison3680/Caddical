module.exports.SpaceCommand = ({
name: "leveling",
code: `$setUserVar[exp;$sum[$getUserVar[exp;$authorID];$random[5;20]];$authorID]
$cooldown[30s;]`
})
