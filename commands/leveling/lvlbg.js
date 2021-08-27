module.exports = ({
name:"set-bg",
code:`$setUserVar[lvlbg;$message[1];$authorID]
$onlyIf[$isValidImageURL[$message[1]]!=false;You must provide a valid image url]`  
})
