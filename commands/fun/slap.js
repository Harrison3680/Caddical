let u = "$replaceText[$findUser[$message[1]];unknown;$authorID]";

module.exports = ({
name:"slap",
code: `
$title[$username[$authorID] slaps $username[${u}]]
$image[$randomText[https://media.giphy.com/media/jt38YxwGTevEkFWWoY/giphy.gif;https://media.giphy.com/media/3ohfFOrOAW9GaczHc4/giphy.gif;https://media.giphy.com/media/3XlEk2RxPS1m8/giphy.gif;https://media.giphy.com/media/uqSU9IEYEKAbS/giphy.gif;https://media.giphy.com/media/u8maN0dMhVWPS/giphy.gif;https://media.giphy.com/media/Qvwc79OfQOa4g/giphy.gif]]
`})
