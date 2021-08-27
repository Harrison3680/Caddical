module.exports = ({
name:"set-xpcolor",
code:`$setUserVar[xpcolor;$messsage[1]]
$onlyIf[$isValidHex[$message[1]]!=false;You must profide a valid hexadecial code]`  
})
