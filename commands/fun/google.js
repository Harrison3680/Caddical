module.exports = ({
name: "google",
code: `
$color[$random[00000;99999]]
$title[$username[$authorID] searched "$message[]"]
$description[{hyper:Here are the results for your search:https://www.google.com/search?q=$replaceText[$message[]; ;+]}]
$footer[Google Search | $getServerVar[prefix]google;$authorAvatar[webp]]
$onlyIf[$message[]!=;Provide something to search]
`
})
