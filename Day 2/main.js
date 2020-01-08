// this is your main.js script

let challenge2 = "You cannot end a sentence with because because because is a conjunction";
let challenge3 = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
let text5 = 'Love is the best thing in this world. Some found their love and some are still looking for their love.';
let text6 = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';

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
// Question 24
console.log(challenge.match(/a/g));
// Question 25
let count = challenge2.match(/because/g);
console.log(count.length)
// Question 26
console.log("30 Days of ".concat("Javascript"));
// Question 27
console.log(challenge.repeat(2));
// Question 28 - method 1
console.log(text5.match(/love/gi).length)
// Question 29 - method 1
let count2 = text6.match(/\d+/g);
let sum = 0;
for(x=0; x < count2.length; x++){
    sum = parseInt(count2[x]) + sum;
}
console.log(sum);
// Question 29 - method 2
let count3 = text6.match(/\d+/g);
let count4 = [];
for(x=0; x < count3.length; x++){
    count4.push(parseInt(count3[x]));
};
let sum2 = count4.reduce((index, acc) => {
    return index + acc;
},0);
console.log('new sum with for loop array conversion is: ', sum2);
// Question 29 - method 3
let count5 = text6.match(/\d+/g).map(Number);
let sum3 = count5.reduce((index, acc) => {
    return index + acc;
},0);
console.log('new sum with direct string array conversion to numbers is: ', sum3);

// Question 30 - regex
const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is also $the $result of &love& of tea&ching'
let newSentence = sentence.replace(/[@&&$%#]/gi, "");
// console.log(sentence.replace(/[@&&$%#]/gi, ""));
console.log(newSentence);

// Question 31
console.log(`'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help to one another.`);
// Question 32
console.log(`"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
`);
// Question 33
console.log("python".includes("on"));
console.log("jargon".includes("on"));
// Question 34
console.log("I hope this course is not full of jargon".includes("jargon"));
// Question 35
let randomNum = Math.ceil(Math.random()*100);
console.log(randomNum);
// Question 36
// use the formula Math.floor(Math.random()*(max - min + 1) + min)
let randomNum2 = Math.floor(Math.random()*(51)+50);
console.log(randomNum2);
// Question 37
let randomNum3 = Math.floor(Math.random()*256);
console.log(randomNum3);
// Question 38
let randomNum4 = Math.floor(Math.random()*"javascript".length + 1);
console.log("javascript".charAt(randomNum4));
// Question 39
console.log("1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125");
// Question 40a
console.log(typeof("10")===10);
// Question 40b
console.log(typeof(parseInt("10")) === typeof(10));
// Question 41a
console.log(Math.ceil(parseFloat("9.8")) === 10);
// console.log(parseInt("9.8"))




