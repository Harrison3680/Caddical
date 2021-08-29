module.exports = ({
name: "twitter",
code: `
$title[Twitter Search]
$color[$random[00000;99999]]
$description[{hyper:Here are the results for your search!:https://twitter.com/search?q=$replaceText[$message[]; ;+]}]
$footer[Twitter Search | $getServerVar[prefix]twitter;$authorAvatar[webp]]
$onlyIf[$message[]!=;**You must type something to search it.**]`
})
