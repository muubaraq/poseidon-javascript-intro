

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
    
  console.log(teamName[1]);

  console.log(teamName[2]);

  console.log(teamName[3]);

  console.log(teamName[4]);

  console.log(teamName[5]);

  console.log(teamName[6]);

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
    return (b * b) - (4 * a * c);
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
