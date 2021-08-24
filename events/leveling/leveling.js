module.exports.SpaceCommand = ({
name: "leveling",
code: `$setUserVar[xp;$sum[$getUserVar[xp;$authorID];$random[10;50]];$authorID]
$replyIn[30s]`
})
