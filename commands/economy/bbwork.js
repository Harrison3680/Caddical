module.exports = ({
name:"bbwork",
  code:`$If[$message[1]==youtuber;
  $setUserVar[cash;$sum[$getUserVar[cash;$authorID];$random[20;45]];$authorID] You worked as a youtuber and earned $$random[20;45]
  $onlyIf[$getVar[job;$authorID]==youtuber;
  $replaceText[$replaceText[$checkCondition[$getVar[job;$authorID]==N/A];true;You don't have a job];false;You're already working as a **$getVar[job;$authorID]**!]]
  $onlyIf[$getVar[youtuber;$authorID]!=false;You need to sign up as a youtuber]
  $onlyIf[$getVar[diploma;$authorID]!=false;You need a highschool diploma to work here]]
  `
})
