module.exports = ({
 name: "userinfo",
 code: `
$title[Userinfo]
$description[** **]

$addField[User Avatar:;{hyper:User Avatar Download:$userAvatar[$mentioned[1;yes]]};yes]

$addField[Is boosting **$serverName[]**:;$replaceText[$replaceText[$isBoosting[$mentioned[1;yes]];true;yes];false;no];yes]

$addField[Platform:; $replaceText[$replaceText[$replaceText[$platform[$mentioned[1]];mobile; 📱 mobile];web; 💻 web];desktop; 🖥️ desktop];yes]

$addField[Is a Bot:;$replaceText[$replaceText[$isBot[$mentioned[1;yes]];false;No];true;Yes];yes]

$addField[User badges:;$replaceText[$replaceText[$checkCondition[$getUserBadges[$mentioned[1;yes]]==];true;None];false;$getUserBadges[$mentioned[1;yes]]]]

$addField[User roles:;$memberRoles[$mentioned[1;yes]];yes]

$addField[Account created:;$creationDate[$mentioned[1;yes]];yes]

$addField[Server nickname:;<@$mentioned[1;yes]>;yes]

$addField[Discord tag:;$tag[$mentioned[1]];yes]
$color[46FF00]
$thumbnail[$userAvatar[$mentioned[1;yes];png;true;512]]
$footer[Requested by: $username[$authorID]] 
$addTimestamp
`
});
