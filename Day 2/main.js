// this is your main.js script

let challenge2 = "You cannot end a sentence with because because because is a conjunction";
let challenge3 = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';

// Question 1
let challenge = "30 Days Of JavaScript ";
// Question 2
console.log(challenge);
// Question 3
console.log(challenge.length);
// Question 4
let upperCase = challenge.toUpperCase();
console.log(upperCase);
// Question 5
let lowerCase = challenge.toLowerCase();
console.log(lowerCase);
// Question 6 - method 1
let slice1 = challenge.substring(0,3);
console.log(slice1);
// Question 6 - method 2
let slice2 = challenge.substr(0,2);
console.log(slice2);
// Question 6 - method 3
let slice3 = challenge.slice(0,2);
console.log(slice3);
// Question 7 - method 1
let slice4 = challenge.substring(3);
console.log(slice4);
// Question 7 - method 2
let slice5 = challenge.substr(3);
console.log(slice5);
// Question 7 - method 3
let slice6 = challenge.slice(3);
console.log(slice6);
// Question 8
let slice7 = challenge2.substr(31, 24);
console.log(slice7);
// Question 9
console.log(challenge.includes("Script"));
// Question 10
let challengeArray = challenge.split();
console.log(challengeArray);
// Question 11
let challengeArray2 = challenge.split(" ");
console.log(challengeArray2);
// Question 12
let challengeArray3 = challenge3.split(",");
console.log(challengeArray3);
// Question 13
console.log(challenge.replace("JavaScript", "Python"));
// Question 14
console.log(challenge.charAt(15));
// Question 15
console.log(challenge.charCodeAt(11));
// Question 16
console.log(challenge.indexOf("a"));
// Question 17
console.log(challenge.lastIndexOf("a"));
// Question 18
console.log(challenge2.indexOf("because"));
// Question 19
console.log(challenge2.lastIndexOf("because"));
// Question 20
console.log(challenge2.search("because"));
// Question 21
console.log(challenge.trim());
// Question 22
console.log(challenge.startsWith("30"));
// Question 23
console.log(challenge.endsWith(" "));
// Question 24 - not yet done
console.log(challenge.match("a"));
// Question 25 - same as above

// Question 26
console.log("30 Days of ".concat("Javascript"));
// Question 27
console.log(challenge.repeat(2));
// Question 28 - another regex question

// Question 29 - regex issue

// Question 30 - regex

// Question 31
console.log(`'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help to one another.`);
// Question 32
console.log(`"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
`);
// Question 33



