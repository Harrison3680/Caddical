module.exports = ({
name:"bbwork",
  code:`$If[$message[1]==youtuber;
  $setUserVar[cash;$sum[$getUserVar[cash;$authorID];$random[20;45]];$authorID]`
})
