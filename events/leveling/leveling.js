module.exports.SpaceCommand = ({
name: "leveling",
code: `$setUserVar[xp;$sum[$getUserVar[xp;$authorID];$random[5;20]];$authorID]
$cooldown[30s]`
})
