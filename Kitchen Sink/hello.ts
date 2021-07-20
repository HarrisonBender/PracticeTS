// function Greeting(options: { name: string}) {
//     $('#name').html(`Hello ${options.name}!`);
//     console.log(`Hello ${options.name}!`);
// }

// Greeting({ 
//     name: 'Harrison'
// });

let myName1 = "Harrison";
console.log(myName1);

const numberOfStates = 50;
console.log(numberOfStates);

let result = 5 + 4;
console.log(result);

function sayAloha() {
  alert("Aloha!");
}

sayAloha();

function checkDob(name: string, age: number) {
  if (age < 21) {
    alert(
      "Sorry" + " " + name + " " + "you aren't old enough to view this page!"
    );
  }
}

checkDob("Harrison", 30);
checkDob("James", 20);

let myFavoriteVeggies = [
  "Carrots",
  "Tomatoes",
  "Broccoli",
  "Corn",
  "Lima Beans",
];

for (let index = 0; index <= 4; index++){
    console.log(myFavoriteVeggies[index])
}

let myPet = {
    petName: "Marley",
    petBreed: "Huskie"
};

console.log(myPet.petName, myPet.petBreed);


let people = [
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
            age:33
        }
];

for (let index = 0; index < people.length; index++){

checkDob(people[index].name, people[index].age);
}

function getWordLenght(word: string) {
    return word.length;
}
let wordLength = getWordLenght("Hello World!");
if(wordLength % 2 == 0) {
    console.log("The world is nice and even!")
} else { 
    console.log("The world is an odd place!")
}