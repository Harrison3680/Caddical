module.exports = ({
name:"degree",
code:`$if[$message[1]==associate;A associate degree is used to work low class jobs]
$if[$message[1]==bachlor;A bachlor degree is used to work medium class jobs]
$if[$message[1]==master;A master degree is used to work high class jobs]
$if[$message[1]==docterate;A docterate degree is used to work very high class jobs]`  
}) 
