// function Greeting(options: { name: string}) {
//     $('#name').html(`Hello ${options.name}!`);
//     console.log(`Hello ${options.name}!`);
// }

// Greeting({ 
//     name: 'Harrison'
// });

let myName: string = "harrison bender";

console.log("Name: " + myName.toUpperCase());

console.log(" ");

let companyName: string = "Reverb.com";
let jobTitle: string = "Web Developer";
let jobDescription: string = "Web Development";

function displayPosition(companyName: string, jobTitle: string, jobDescription: string) {
  console.log("Company: " + companyName);
  console.log("Career: " + jobTitle);
  console.log("Description: " + jobDescription);
}

displayPosition(companyName, jobTitle, jobDescription);

console.log(" ");

var myInterests = "My Interests:";
var res = myInterests.toUpperCase();
console.log(res);

var myInterests1 = "Music";
var myInterests2 = "Television";
var myInterests3 = "Disc Golf";
var myInterests4 = "The Outdoors";

displayPosition(myInterests1, myInterests2, myInterests3);

console.log(" ");
console.log(" ");

var myPreviousExperience = "My Previous Experience:";
var res = myPreviousExperience.toUpperCase();
console.log(res);

var myPreviousExperience1 = "OTI - CAHOC Certified Occupataion Health and Safety Specialist";
var myPreviousExperience2 = "Allsouth Appliance - Ordering and Customer Service";
var myPreviousExperience3 = "The Woolworth - Front of House Manager";
var myPreviousExperience4 = "PW PCA - Pricing and Sales Coordinator";

displayPosition(myPreviousExperience1, myPreviousExperience2, myPreviousExperience3);

console.log(" ");
console.log(" ");



console.log("My Skills:");

let skill = ["Drums", "CAHOC Certified", "Bass", "Live Sound", "Wood Working"];

function displaySkill(skill: string, isCool: boolean) {
  if (isCool) {
    console.log("* BAM: " + skill);
  } else {
    console.log("* " + skill);
  }
}

displaySkill(skill[0], true);
displaySkill(skill[1], false);
displaySkill(skill[2], true);
displaySkill(skill[3], true);
displaySkill(skill[4], true);
