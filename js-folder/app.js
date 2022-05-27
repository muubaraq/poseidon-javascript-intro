/*
Create a card and Using any of the selectors we learnt, display the name of your group beside the group name: E.g Group name: Team-amadioha. Also, add some colour using javascript to your team name (your choice of colour). Design your card in the centre of your page and have a border radius. The team name should be on the card with a list of your team members below. You can design it to your taste

*/

let headerEl = document.querySelector("h1");
headerEl.innerHTML = "Poseidon";

document.getElementById("header-title").style.color = "skyblue";

/* 
Create an array that will contain the name of your team members starting with your team lead's name and that of your team members. Then console.log your name based on the position it is in the array.

*/
let teamName = 
["Mubaraq Abuahsan", 
 "Clinton Samuel", 
 "Onumajuru Divinegift",
 "Arinola Goodness",
 "Jimoh Segun",
 "Sherif Muhammed",
 "Khadijah Muhammmad",
];

  console.log(teamName[0]);
    
  

  /* 
  Create an object that has the following things
First name
Last name
Best movie
Best food
Complexion
Birth month
State
Group name
Console.log your best movie
*/

const myInfo = {firstName: "Poseidon", lastName:"Cronos", bestMovie: "The Light thief", bestFood: "Sea Urchins", complexion: "Fair", birthMonth: "January", state: "olympius", groupName: "Poseidon"};

console.log(myInfo.bestMovie);

/* Create variables for 
a noun,
a verb and an adjective.
Using concatenation, create 5 sentences using either of the three. Ensure you use at least two per sentence. 
*/

let noun = "dog";
let verb = "run";
let adjective = "big";

console.log(`My ${noun} is ${adjective}`);
console.log(`My ${noun} ${verb}s`);
console.log(`My ${noun} is ${adjective} and ${verb}s`);
console.log(`That ${noun} is ${adjective} and ${verb}s fast`);
console.log(`A ${adjective} ${noun} that ${verb}s fast`);


/*
Write a function that will print out the remainder of a division. This function will take two parameters 
 */

function poseidonFunction(a, b){
    return a % b;
}
console.log(poseidonFunction(10, 3));



/*
Write a function that will solve quadratic equations using the almighty formula. This will take three parameters 
  */

function quadFunction (a, b, c){
    var result = ((b * b) - Math.sqrt(4 * a * c)) / (2 * a);
    var result2 = ((b * b) + Math.sqrt(4 * a * c)) / (2 * a);
    return result + " and " + result2
}
console.log(quadFunction(1, 2, 1));



/*
Using the constants below, create your own sentence

 */

 const myNoun = "dog";
 const myAdjective = "big";
 const myVerb = "ran";
 const myAdverb = "quickly";

 const wordBlanks= `My ${myNoun} is ${myAdjective} and he ${myVerb} ${myAdverb} to the park`;
  console.log(wordBlanks);



  /* Write a function that will find the area of a circle. 
Use Const PI = 3.142
Also, find the area of a circle with a radius of 9cm
*/

  const pi = 3.142;
  const radius = 9;


  function circleArea(radius){
      return pi * (radius * radius);
  }
  console.log(circleArea(radius));



  /*
  How much Simple Interest can a person get on N. 8,200 at 17.5% p.a. for a period of 2 years and 6 months? Ensure you store each of them in a variable and console your answer
  */

  const principal = 8200;
  const rate = 17.5;
  const time = 2.5;
  const interest = (principal * rate * time) / 100;
  console.log(interest);


  /*
  What will be the result of 10 % 4? Console.log your answer
  */

  const ten = 10;
  const four = 4;
  console.log(ten % four);

  /*
  Merit and Nutjob are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).
Your tasks:
Store Merit and Nutjob's mass and height in variables
Calculate both their BMIs using the formula (you can even implement both
versions)
Create a Boolean variable 'meritHigherBMI' containing information about whether Merit has a higher BMI than nutjob.
Test data:
§ Data 1: Merit weights 78 kg and is 1.69 m tall. Nutjob weighs 92 kg and is 1.95m tall.
§ Data 2: Nutjob weighs 95 kg and is 1.88 m tall. Merit weights 85 kg and is 1.76m tall.
*/

  const meritMass = 78;
  const meritHeight = 1.69;
  const meritBMI = meritMass / (meritHeight * meritHeight);
  console.log(meritBMI);

  const nutjobMass = 92;
  const nutjobHeight = 1.95;
  const nutjobBMI = nutjobMass / (nutjobHeight * nutjobHeight);
  console.log(nutjobBMI);

  const meritHigherBMI = meritBMI > nutjobBMI;
  console.log(meritHigherBMI);


  // data 2
  const nutjobMass2 = 95;
  const nutjobHeight2 = 1.88;
  const nutjobBMI2 = nutjobMass2 / (nutjobHeight2 * nutjobHeight2);
  console.log(nutjobBMI2);

  const meritMass2 = 85;
  const meritHeight2 = 1.76;
  const meritBMI2 = meritMass2 / (meritHeight2 * meritHeight2);
  console.log(meritBMI2);

  const meritHigherBMI2 = meritBMI2 > nutjobBMI2;
  console.log(meritHigherBMI2);
