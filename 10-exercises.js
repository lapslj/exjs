//10.5 Object Enhancements

/*
Rewrite in ES2015
function createInstructor(firstName, lastName){
  return {
    firstName: firstName,
    lastName: lastName
  }
}
*/

function createInstructor(firstname,lastname){
    return {firstname,lastname}
}

/* Computed property names
var favoriteNumber = 42;

var instructor = {
  firstName: "Colt"
}

instructor[favoriteNumber] = "That is my favorite!"

*/

let favoriteNumber = 42

const instructor = {
    firstname: "Colt",
    [favoriteNumber]: "That is my favorite!"
}

/* OBJECT METHODS
var instructor = {
  firstName: "Colt",
  sayHi: function(){
    return "Hi!";
  },
  sayBye: function(){
    return this.firstName + " says bye!";
  }
}
*/

const nInstructor = {
    firstname: "Colt",
    sayHi() {return "Hi!"},
    sayBye() {return this.firstname + " says bye!";}
}

/* CREATE ANIMAL FUNCTION
Write a function which generates an animal object. The function should accepts 
3 arguments:

species: the species of animal (‘cat’, ‘dog’)
verb: a string used to name a function (‘bark’, ‘bleet’)
noise: a string to be printed when above function is called (‘woof’, ‘baaa’)
Use one or more of the object enhancements we’ve covered.
*/

function createAnimal(species,verb,noise){
    return {
        species,
        [verb](){console.log(noise+"!");}
    }
}

///////// OBJECT DESTRUCTURING

//Object Destructuring 1
let facts = {numPlanets: 8, yearNeptuneDiscovered: 1846};
let {numPlanets, yearNeptuneDiscovered} = facts;

console.log(numPlanets); // 8
console.log(yearNeptuneDiscovered); // 1846

//Object Destructuring 2

let planetFacts = {
    numPlanets: 8,
    yearNeptuneDiscovered: 1846,
    yearMarsDiscovered: 1659
  };
  
  let {numPlanets, ...discoveryYears} = planetFacts;
  
  console.log(discoveryYears); // array containing yearNeptuneDiscovered and yearMarsDiscovered

  //Object Destructuring 3

  function getUserData({firstName, favoriteColor="green"}){
    return `Your name is ${firstName} and you like ${favoriteColor}`;
  }
  
  getUserData({firstName: "Alejandro", favoriteColor: "purple"})
  //Your name is Alejandro and you like purple
  getUserData({firstName: "Melissa"})
  //Your name is Melissa and you like green
  getUserData({}) // Your name is undefined and you like green

  ////ARRAY DESTRUCTURING

  let [first, second, third] = ["Maya", "Marisa", "Chi"];

console.log(first); // Maya
console.log(second); // Marisa
console.log(third); // Chi

let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
    "Raindrops on roses",
    "whiskers on kittens",
    "Bright copper kettles",
    "warm woolen mittens",
    "Brown paper packages tied up with strings"
  ]
  
  console.log(raindrops); // "Raindrops on roses"
  console.log(whiskers); // "whiskers on kittens"
  console.log(aFewOfMyFavoriteThings); 
  // ["Bright copper kettles","warm woolen mittens","Brown paper packages tied up with string"]

let numbers = [10, 20, 30];
[numbers[1], numbers[2]] = [numbers[2], numbers[1]]

console.log(numbers) // [10, 30, 20]

//REFACTORING

/* Write an ES2015 version:

var obj = {
    numbers: {
      a: 1,
      b: 2
    }
  };
  
  var a = obj.numbers.a;
  var b = obj.numbers.b;
  */

const obj = {numbers: {a:1,b:2}}
const {a,b} = obj.numbers

/*Write an ES2015 version

var arr = [1, 2];
var temp = arr[0];
arr[0] = arr[1];
arr[1] = temp;
*/

let arr = [1,2]
[arr[0],arr[1]] = [arr[1],arr[0]]

/*
Write a function called raceResults which accepts 
a single array argument. It should return an object 
with the keys first, second, third, and rest.

first: the first element in the array
second: the second element in the array
third: the third element in the array
rest: all other elements in the array
Write a one line function to make this work using
- An arrow function
- Destructuring
- ‘Enhanced’ object assignment (same key/value shortcut)
*/

raceResults(['Tom', 'Margaret', 'Allison', 'David', 'Pierre'])

({first,second,third,...rest}) = raceResults

function raceResults(first,second,third, ...rest) {
    return {
        first,second,third,rest
    }
}

const raceResultsArrow = ([first,second,third, ...rest]) => 
({first,second,third,rest})

/*
  {
    first: "Tom",
    second: "Margaret",
    third: "Allison",
    rest: ["David", "Pierre"]
  }
*/

/*
Quick Question #1
What does the following code return?*/

new Set([1,1,2,2,3,4]) // a set containing 1,2,3,4

/*
Quick Question #2
What does the following code return? */

[...new Set("referee")].join("") //a unique array containing r,e,f,""

/*Quick Questions #3
What does the Map m look like after running the following code? */

let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false); //m containing two unique arrays (Array(3)) one value true and one value false

/*
hasDuplicate
Write a function called hasDuplicate which accepts an array 
and returns true or false if that array contains a duplicate

hasDuplicate([1,3,2,1]) // true
hasDuplicate([1,5,-1,4]) // false
*/

function hasDuplicate(arr){
    let nArr = new Set(arr);
    return nArr.size !== arr.length ? true : false
}

/*
vowelCount
Write a function called vowelCount which 
accepts a string and returns a map where 
the keys are numbers and the values are the 
count of the vowels in the string.

vowelCount('awesome') // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
vowelCount('Colt') // Map { 'o' => 1 }
*/

function vowelCount(str){
    let lrCase = str.toLowerCase()
    let letterSet = [...new Set(lrCase)]//create a unique array of letters
    let vowelSet = letterSet.filter(function(lttr){
        return "aeiou".indexOf(lttr) !== -1 ? true : false;
    })
    console.log(vowelSet)
    let vMap = new Map()
    for (let vowel of vowelSet){
        let vCount = 0
        for (let letz of lrCase){
            letz === vowel ? vCount ++ : false
        }
        //console.log(vowel,vCount)
        vMap.set(vowel,vCount)
    }
    return vMap
}
//for each vowel in the set, go through that set and count them all in the orig word


