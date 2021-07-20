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
var myName1 = "Harrison";
console.log(myName1);
var numberOfStates = 50;
console.log(numberOfStates);
var result = 5 + 4;
console.log(result);
function sayAloha() {
    alert("Aloha!");
}
sayAloha();
function checkDob(name, age) {
    if (age < 21) {
        alert("Sorry" + " " + name + " " + "you aren't old enough to view this page!");
    }
}
checkDob("Harrison", 30);
checkDob("James", 20);
var myFavoriteVeggies = [
    "Carrots",
    "Tomatoes",
    "Broccoli",
    "Corn",
    "Lima Beans",
];
for (var index = 0; index <= 4; index++) {
    console.log(myFavoriteVeggies[index]);
}
var myPet = {
    petName: "Marley",
    petBreed: "Huskie"
};
console.log(myPet.petName, pet.petBreed);
var people = [
    {
        name: "harrison",
        age: 30
    },
    {
        name: "olivia",
        age: 30
    },
    {
        name: "michael",
        age: 33
    }
];
for (var index = 0; index < people.length; index++) {
    checkDob(people[index].name, people[index].age);
}
function getWordLenght(word) {
    return word.length;
}
var wordLength = getWordLenght("Hello World!");
if (wordLength % 2 == 0) {
    console.log("The world is nice and even!");
}
else {
    console.log("The world is an odd place!");
}

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9QcmFjdGljaW5nLVRTLy4vaGVsbG8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWE7QUFDYiwrQkFBK0IsY0FBYztBQUM3QyxnQ0FBZ0MsYUFBYTtBQUM3Qyw0QkFBNEIsYUFBYTtBQUN6QztBQUNBLGE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsWUFBWTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHVCQUF1QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG4vLyBmdW5jdGlvbiBHcmVldGluZyhvcHRpb25zOiB7IG5hbWU6IHN0cmluZ30pIHtcbi8vICAgICAkKCcjbmFtZScpLmh0bWwoYEhlbGxvICR7b3B0aW9ucy5uYW1lfSFgKTtcbi8vICAgICBjb25zb2xlLmxvZyhgSGVsbG8gJHtvcHRpb25zLm5hbWV9IWApO1xuLy8gfVxuLy8gR3JlZXRpbmcoeyBcbi8vICAgICBuYW1lOiAnSGFycmlzb24nXG4vLyB9KTtcbnZhciBteU5hbWUxID0gXCJIYXJyaXNvblwiO1xuY29uc29sZS5sb2cobXlOYW1lMSk7XG52YXIgbnVtYmVyT2ZTdGF0ZXMgPSA1MDtcbmNvbnNvbGUubG9nKG51bWJlck9mU3RhdGVzKTtcbnZhciByZXN1bHQgPSA1ICsgNDtcbmNvbnNvbGUubG9nKHJlc3VsdCk7XG5mdW5jdGlvbiBzYXlBbG9oYSgpIHtcbiAgICBhbGVydChcIkFsb2hhIVwiKTtcbn1cbnNheUFsb2hhKCk7XG5mdW5jdGlvbiBjaGVja0RvYihuYW1lLCBhZ2UpIHtcbiAgICBpZiAoYWdlIDwgMjEpIHtcbiAgICAgICAgYWxlcnQoXCJTb3JyeVwiICsgXCIgXCIgKyBuYW1lICsgXCIgXCIgKyBcInlvdSBhcmVuJ3Qgb2xkIGVub3VnaCB0byB2aWV3IHRoaXMgcGFnZSFcIik7XG4gICAgfVxufVxuY2hlY2tEb2IoXCJIYXJyaXNvblwiLCAzMCk7XG5jaGVja0RvYihcIkphbWVzXCIsIDIwKTtcbnZhciBteUZhdm9yaXRlVmVnZ2llcyA9IFtcbiAgICBcIkNhcnJvdHNcIixcbiAgICBcIlRvbWF0b2VzXCIsXG4gICAgXCJCcm9jY29saVwiLFxuICAgIFwiQ29yblwiLFxuICAgIFwiTGltYSBCZWFuc1wiLFxuXTtcbmZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPD0gNDsgaW5kZXgrKykge1xuICAgIGNvbnNvbGUubG9nKG15RmF2b3JpdGVWZWdnaWVzW2luZGV4XSk7XG59XG52YXIgbXlQZXQgPSB7XG4gICAgcGV0TmFtZTogXCJNYXJsZXlcIixcbiAgICBwZXRCcmVlZDogXCJIdXNraWVcIlxufTtcbmNvbnNvbGUubG9nKG15UGV0LnBldE5hbWUsIHBldC5wZXRCcmVlZCk7XG52YXIgcGVvcGxlID0gW1xuICAgIHtcbiAgICAgICAgbmFtZTogXCJoYXJyaXNvblwiLFxuICAgICAgICBhZ2U6IDMwXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6IFwib2xpdmlhXCIsXG4gICAgICAgIGFnZTogMzBcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogXCJtaWNoYWVsXCIsXG4gICAgICAgIGFnZTogMzNcbiAgICB9XG5dO1xuZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IHBlb3BsZS5sZW5ndGg7IGluZGV4KyspIHtcbiAgICBjaGVja0RvYihwZW9wbGVbaW5kZXhdLm5hbWUsIHBlb3BsZVtpbmRleF0uYWdlKTtcbn1cbmZ1bmN0aW9uIGdldFdvcmRMZW5naHQod29yZCkge1xuICAgIHJldHVybiB3b3JkLmxlbmd0aDtcbn1cbnZhciB3b3JkTGVuZ3RoID0gZ2V0V29yZExlbmdodChcIkhlbGxvIFdvcmxkIVwiKTtcbmlmICh3b3JkTGVuZ3RoICUgMiA9PSAwKSB7XG4gICAgY29uc29sZS5sb2coXCJUaGUgd29ybGQgaXMgbmljZSBhbmQgZXZlbiFcIik7XG59XG5lbHNlIHtcbiAgICBjb25zb2xlLmxvZyhcIlRoZSB3b3JsZCBpcyBhbiBvZGQgcGxhY2UhXCIpO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==