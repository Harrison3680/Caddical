module.exports = {
name:"help",
code:`
$onlyIf[$message[1]!=util;{execute:util}]
$onlyIf[$message[1]!=fun;{execute:fun}]
$onlyIf[$message[1]!=mod;{execute:mod}]
$onlyIf[$message[1]!=dev;{execute:dev}]`
}
