/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!******************!*\
  !*** ./hello.ts ***!
  \******************/

// function Greeting(options: { name: string}) {
//     $('#name').html(`Hello ${options.name}!`);
//     console.log(`Hello ${options.name}!`);
// }
// Greeting({ 
//     name: 'Harrison'
// });
var myName = "harrison bender";
console.log("Name: " + myName.toUpperCase());
console.log(" ");
var companyName = "Reverb.com";
var jobTitle = "Web Developer";
var jobDescription = "Web Development";
function displayPosition(companyName, jobTitle, jobDescription) {
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
var skill = ["Drums", "CAHOC Certified", "Bass", "Live Sound", "Wood Working"];
function displaySkill(skill, isCool) {
    if (isCool) {
        console.log("* BAM: " + skill);
    }
    else {
        console.log("* " + skill);
    }
}
displaySkill(skill[0], true);
displaySkill(skill[1], false);
displaySkill(skill[2], true);
displaySkill(skill[3], true);
displaySkill(skill[4], true);

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9QcmFjdGljaW5nLVRTLy4vaGVsbG8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWE7QUFDYiwrQkFBK0IsY0FBYztBQUM3QyxnQ0FBZ0MsYUFBYTtBQUM3Qyw0QkFBNEIsYUFBYTtBQUN6QztBQUNBLGE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG4vLyBmdW5jdGlvbiBHcmVldGluZyhvcHRpb25zOiB7IG5hbWU6IHN0cmluZ30pIHtcbi8vICAgICAkKCcjbmFtZScpLmh0bWwoYEhlbGxvICR7b3B0aW9ucy5uYW1lfSFgKTtcbi8vICAgICBjb25zb2xlLmxvZyhgSGVsbG8gJHtvcHRpb25zLm5hbWV9IWApO1xuLy8gfVxuLy8gR3JlZXRpbmcoeyBcbi8vICAgICBuYW1lOiAnSGFycmlzb24nXG4vLyB9KTtcbnZhciBteU5hbWUgPSBcImhhcnJpc29uIGJlbmRlclwiO1xuY29uc29sZS5sb2coXCJOYW1lOiBcIiArIG15TmFtZS50b1VwcGVyQ2FzZSgpKTtcbmNvbnNvbGUubG9nKFwiIFwiKTtcbnZhciBjb21wYW55TmFtZSA9IFwiUmV2ZXJiLmNvbVwiO1xudmFyIGpvYlRpdGxlID0gXCJXZWIgRGV2ZWxvcGVyXCI7XG52YXIgam9iRGVzY3JpcHRpb24gPSBcIldlYiBEZXZlbG9wbWVudFwiO1xuZnVuY3Rpb24gZGlzcGxheVBvc2l0aW9uKGNvbXBhbnlOYW1lLCBqb2JUaXRsZSwgam9iRGVzY3JpcHRpb24pIHtcbiAgICBjb25zb2xlLmxvZyhcIkNvbXBhbnk6IFwiICsgY29tcGFueU5hbWUpO1xuICAgIGNvbnNvbGUubG9nKFwiQ2FyZWVyOiBcIiArIGpvYlRpdGxlKTtcbiAgICBjb25zb2xlLmxvZyhcIkRlc2NyaXB0aW9uOiBcIiArIGpvYkRlc2NyaXB0aW9uKTtcbn1cbmRpc3BsYXlQb3NpdGlvbihjb21wYW55TmFtZSwgam9iVGl0bGUsIGpvYkRlc2NyaXB0aW9uKTtcbmNvbnNvbGUubG9nKFwiIFwiKTtcbnZhciBteUludGVyZXN0cyA9IFwiTXkgSW50ZXJlc3RzOlwiO1xudmFyIHJlcyA9IG15SW50ZXJlc3RzLnRvVXBwZXJDYXNlKCk7XG5jb25zb2xlLmxvZyhyZXMpO1xudmFyIG15SW50ZXJlc3RzMSA9IFwiTXVzaWNcIjtcbnZhciBteUludGVyZXN0czIgPSBcIlRlbGV2aXNpb25cIjtcbnZhciBteUludGVyZXN0czMgPSBcIkRpc2MgR29sZlwiO1xudmFyIG15SW50ZXJlc3RzNCA9IFwiVGhlIE91dGRvb3JzXCI7XG5kaXNwbGF5UG9zaXRpb24obXlJbnRlcmVzdHMxLCBteUludGVyZXN0czIsIG15SW50ZXJlc3RzMyk7XG5jb25zb2xlLmxvZyhcIiBcIik7XG5jb25zb2xlLmxvZyhcIiBcIik7XG52YXIgbXlQcmV2aW91c0V4cGVyaWVuY2UgPSBcIk15IFByZXZpb3VzIEV4cGVyaWVuY2U6XCI7XG52YXIgcmVzID0gbXlQcmV2aW91c0V4cGVyaWVuY2UudG9VcHBlckNhc2UoKTtcbmNvbnNvbGUubG9nKHJlcyk7XG52YXIgbXlQcmV2aW91c0V4cGVyaWVuY2UxID0gXCJPVEkgLSBDQUhPQyBDZXJ0aWZpZWQgT2NjdXBhdGFpb24gSGVhbHRoIGFuZCBTYWZldHkgU3BlY2lhbGlzdFwiO1xudmFyIG15UHJldmlvdXNFeHBlcmllbmNlMiA9IFwiQWxsc291dGggQXBwbGlhbmNlIC0gT3JkZXJpbmcgYW5kIEN1c3RvbWVyIFNlcnZpY2VcIjtcbnZhciBteVByZXZpb3VzRXhwZXJpZW5jZTMgPSBcIlRoZSBXb29sd29ydGggLSBGcm9udCBvZiBIb3VzZSBNYW5hZ2VyXCI7XG52YXIgbXlQcmV2aW91c0V4cGVyaWVuY2U0ID0gXCJQVyBQQ0EgLSBQcmljaW5nIGFuZCBTYWxlcyBDb29yZGluYXRvclwiO1xuZGlzcGxheVBvc2l0aW9uKG15UHJldmlvdXNFeHBlcmllbmNlMSwgbXlQcmV2aW91c0V4cGVyaWVuY2UyLCBteVByZXZpb3VzRXhwZXJpZW5jZTMpO1xuY29uc29sZS5sb2coXCIgXCIpO1xuY29uc29sZS5sb2coXCIgXCIpO1xuY29uc29sZS5sb2coXCJNeSBTa2lsbHM6XCIpO1xudmFyIHNraWxsID0gW1wiRHJ1bXNcIiwgXCJDQUhPQyBDZXJ0aWZpZWRcIiwgXCJCYXNzXCIsIFwiTGl2ZSBTb3VuZFwiLCBcIldvb2QgV29ya2luZ1wiXTtcbmZ1bmN0aW9uIGRpc3BsYXlTa2lsbChza2lsbCwgaXNDb29sKSB7XG4gICAgaWYgKGlzQ29vbCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIiogQkFNOiBcIiArIHNraWxsKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiKiBcIiArIHNraWxsKTtcbiAgICB9XG59XG5kaXNwbGF5U2tpbGwoc2tpbGxbMF0sIHRydWUpO1xuZGlzcGxheVNraWxsKHNraWxsWzFdLCBmYWxzZSk7XG5kaXNwbGF5U2tpbGwoc2tpbGxbMl0sIHRydWUpO1xuZGlzcGxheVNraWxsKHNraWxsWzNdLCB0cnVlKTtcbmRpc3BsYXlTa2lsbChza2lsbFs0XSwgdHJ1ZSk7XG4iXSwic291cmNlUm9vdCI6IiJ9