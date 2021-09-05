module.exports = ({
  name:"bwork",
  code:`
  $If[$message[1]==youtuber; 
  $setUserVar[cash;$sum[$getUserVar[cash;$authorID];$random[20;45]];$authorID] You worked as a youtuber and earned $$random[20;45]
  $onlyIf[$getVar[job;$authorID]==youtuber;
  $replaceText[$replaceText[$checkCondition[$getVar[job;$authorID]==N/A];true;You don't have a job];false;You're already working as a **$getVar[job;$authorID]**!]]
  $onlyIf[$getVar[youtuber;$authorID]!=false;You need to sign up as a youtuber] 
  $onlyIf[$getVar[diploma;$authorID]!=false;You need a highschool diploma to work here.]]
  
  $If[$message[1]==cashier;
  $setUserVar[cash;$sum[$getUserVar[cash;$authorID];$random[45;70]];$authorID] You worked as a cashier and earned $$random[45;75]
  $onlyIf[$getVar[job;$authorID]==cashier;
  $replaceText[$replaceText[$checkCondition[$getVar[job;$authorID]==N/A];true;You don't have a job];false;You're already working as a **$getVar[job;$authorID]**!]]
  $onlyIf[$getVar[cashier;$authorID]!=false;You need to sign up as a cashier]
  $onlyIf[$getVar[diploma;$authorID]!=false;You need a highschool diploma to work here.]]
  
  $If[$message[1]==electrician;
  $setUserVar[cash;$sum[$getUserVar[cash;$authorID];$random[75;105]];$authorID] You worked as a electrician and earned $$random[75;105]
  $onlyIf[$getVar[job;$authorID]==electrician;
  $replaceText[$replaceText[$checkCondition[$getVar[job;$authorID]==N/A];true;You don't have a job];false;You're already working as a **$getVar[job;$authorID]**!]]
  $onlyIf[$getVar[electrician;$authorID]!=false;You need to sign up as an electrician]
  $onlyIf[$getVar[diploma;$authorID]!=false;You need a highschool diploma to work here.]]
  
  $If[$message[1]==quit;
  You just quit your job as a **$get[job]**.
  $setVar[$getVar[job];N/A;$authorID]]
  $let[job;$getVar[job;$authorID]]
  $onlyIf[$checkCondition[$getVar[job;$authorID]==N/A]!=true;You don't have a job so you can't quit]
'`})
// baker, teacher, professor, plumber, 
