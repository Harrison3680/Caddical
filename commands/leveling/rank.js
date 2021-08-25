module.exports = {
name:"rank",
code: `
$title[$username[$mentioned[1;yes]]'s rank]
$color[]
$image[https://vacefron.nl/api/rankcard?username=$username[$mentioned[1;yes]]&avatar=$userAvatar[$mentioned[1;yes]]?size=4096&level=$getUserVar[lvl;$mentioned[1;yes]]&rank=&currentxp=$getUserVar[exp;$mentioned[1;yes]]&nextlevelxp=$getUserVar[rexp;$mentioned[1;yes]]&previouslevelxp=0&custombg=$getUserVar[lvlbg]&xpcolor=FF0000&isboosting=$isBoosting[$authorID]]
`}
