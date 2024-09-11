// concatinate two strings old way
// let a = "Naveed"
// let b = "Ahmad"
// console.log(a + b);

// latest way to concatinate the two string 
// let a = "Naveed"
// let b = "Ahmad"
// console.log(`My first name is ${a} and last name is ${b} `);

// latest way to declear string instead of const gameName = "Naveedhc"
let gameName = new String("Naveed-hc")
console.log(gameName);
// check the which charcter is on 0
console.log(gameName[0]);
// check the prototype 
console.log(gameName.__proto__);
// convert it into upperCase
console.log(gameName.toUpperCase());
// check the which charecter is on index:2 (V)
console.log(gameName.charAt(2));
// check the index of the character v
console.log(gameName.indexOf("v"));

// another varibale declear
// substring
const stringOne = gameName.substring(0 , 4)
console.log(stringOne);

// Slice can also substract as a reverse number
const stringTwo = gameName.slice(-8 , 4)
console.log(stringTwo);
// Trim remove extra space in the string (alos start & End)
const chrOne = "              Hello Naveed                "
console.log(chrOne);
console.log(chrOne.trim());

//Replace (are used to repalce the text)
const url = "naveed20%ahmad.com"
console.log(url.replace("20%" , "-"));

//we can check that value is include or not
console.log(url.includes("naveed"));
console.log(url.includes("abbasi"));

//split
let splitOne = "Hello this is a split"
console.log(splitOne.split(" "));



////=============++++++++++++++++++++++==================+++++++++//
// Extra String types
const sentence = "The quick brown fox jumps over the lazy dog"
const index = 4
console.log(`This is  a index ${index} and character ${sentence.charAt(index)}`);
//last index of
const fist = "hello this is  a last index in the string";
const last = "dog";
console.log(`this is a ${last} with the index ${fist.lastIndexOf(last)}`,);

























