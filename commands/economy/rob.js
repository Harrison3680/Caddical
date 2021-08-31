module.exports = ({
name:"pickpocket",
code:`$title[Rob Successful]
$description[Succefully Robbed $username[$findUser[$message[1]]]]
$setVar[cash;$sum[$getVar[cash;$authorID];$random[100;350]];$authorID]
$setVar[cash;$sub[$getVar[cash;$findUser[$message[1]];$random[150;350]];$findUser[$message[1]]]
$onlyIf[$getVar[cash;$findUser[$message[1]]]>=$random[150;350];You cannot rob that person as they are poor]
$onlyIf[$findUser[$message[1]]==$authorID;Why... would you rob yourself?..]` 
})
