module.exports = ({
name:"bbwork",
  code:`$If[$message[1]==youtuber;
  $setUserVar[cash;$sum[$getUserVar[cash;$authorID];$random[20;45]];$authorID] You worked as a youtuber and earned $$random[20;45]
  $onlyIf[$getVar[job;$authorID]==youtuber;
  $replaceText[$replaceText[$checkCondition[$getVar[job;$authorID]==N/A];true;You don't have a job];false;You're already working as a **$getVar[job;$authorID]**!]]
  $onlyIf[$getVar[youtuber;$authorID]!=false;You need to sign up as a youtuber]
  $onlyIf[$getVar[diploma;$authorID]!=false;You need a highschool diploma to work here]]
  
  $If[$message[1]==cashier;
  $setUserVar[cash;$sum[$getUserVar[cash;$authorID];$random[20;45]];$authorID] You worked as a cashier and earned $$random[20;45]
  $onlyIf[$getVar[job;$authorID]==cashier;
  $replaceText[$replaceText[$checkCondition[$getVar[job;$authorID]==N/A];true;You don't have a job];false;You're already working as a **$getVar[job;$authorID]**!]]
  $onlyIf[$getVar[cashier;$authorID]!=false;You need to sign up as a cashier]
  $onlyIf[$getVar[diploma;$authorID]!=false;You need a highschool diploma to work here]]
  
  $If[$message[1]==electrician;
  $setUserVar[cash;$sum[$getUserVar[cash;$authorID];$random[20;45]];$authorID] You worked as a electrician and earned $$random[20;45]
  $onlyIf[$getVar[job;$authorID]==electrician;
  $replaceText[$replaceText[$checkCondition[$getVar[job;$authorID]==N/A];true;You don't have a job];false;You're already working as a **$getVar[job;$authorID]**!]]
  $onlyIf[$getVar[electrician;$authorID]!=false;You need to sign up as a electrician]
  $onlyIf[$getVar[diploma;$authorID]!=false;You need a highschool diploma to work here]]
  
  $If[$message[1]==baker;
  $setUserVar[cash;$sum[$getUserVar[cash;$authorID];$random[20;45]];$authorID] You worked as a baker and earned $$random[20;45]
  $onlyIf[$getVar[job;$authorID]==baker;
  $replaceText[$replaceText[$checkCondition[$getVar[job;$authorID]==N/A];true;You don't have a job];false;You're already working as a **$getVar[job;$authorID]**!]]
  $onlyIf[$getVar[baker;$authorID]!=false;You need to sign up as a baker]
  $onlyIf[$getVar[diploma;$authorID]!=false;You need a highschool diploma to work here]]
  `
})
