module.exports = {
    name: "docs",
    description: "Official Documentation command for functions",
    code: `
$author[Type - $help[$toLowercase[$message[1]];type];$authorAvatar]
$title[$help[$toLowercase[$message[1]];name]]
$addField[__Description:__;$help[$toLowercase[$message[1]];description]]
$addField[__Usage__;$help[$toLowercase[$message[1]];usage]]
$footer[Here ya go.]
$color[RANDOM]
$onlyIf[$checkCondition[$help[$toLowercase[$message[1]];name]==invalidFunction]!=true;:x: \`$message[]\` is invalid! Try again.]
$cooldown[3s;:x: Relax for {time}]`
}
