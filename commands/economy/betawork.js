module.exports = ({
  name:"bwork",
  code:`$If[$and[$message[1]==youtuber;$getVar[job;$authorID]==youtuber]==true;
  $setVar[cash;$random[100;250];$authorID] You worked as a youtuber and earned $$random[100;250] 
  $onlyIf[$getVar[youtuber;$authorID]!=false;You need to sign up as a youtuber] 
  $onlyIf[$getVar[diploma;$authorID]!=false;You need a highschool diploma to do this.]]`
})
