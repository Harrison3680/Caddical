module.exports.SpaceCommand = ({
name: "pingForPrefix",
code: `
Prefix:  $getServerVar[prefix]
$onlyIfMessageContains[<@$client[id]>;<@!$client[id]>;]
`
})
