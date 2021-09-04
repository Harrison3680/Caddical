module.exports = ({
  name:"bwork",
  code:`$if[$message[1]==youtuber;$if[$getVar[youtuber]!=false;You worked as a youtuber and earn $random[100;250] $onlyIf[$getVar[diploma;$authorID]!=false;You do not have a highschool diploma]]`
})
