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
console.log(myPet.petName, myPet.petBreed);
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
