console.log(countries)
// alert('Open the console and check if the countries has been loaded')

const skills = ['HTML', 'CSS', 'JS', 'React','Node', 'Python']
let age = 250;
let isMarried = true
const student = {
  firstName:'Asabeneh',
  lastName:'Yetayehe',
  age:250,
  isMarried:true,
  skills:['HTML', 'CSS', 'JS', 'React','Node', 'Python', ]
}
const txt = `{
    
    "Alex": {
        "email": "alex@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 30
    },
    "Asab": {
        "email": "asab@asab.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Redux",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 25,
        "isLoggedIn": false,
        "points": 50
    },
    "Brook": {
        "email": "daniel@daniel.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux"
        ],
        "age": 30,
        "isLoggedIn": true,
        "points": 50
    },
    "Daniel": {
        "email": "daniel@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "John": {
        "email": "john@john.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux",
            "Node.js"
        ],
        "age": 20,
        "isLoggedIn": true,
        "points": 50
    },
    "Thomas": {
        "email": "thomas@thomas.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "Paul": {
        "email": "paul@paul.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    }

}`

// Exercise LEVEL 1
// Question 1
let stringifySkills = ()=>{
    let stringSkills = JSON.stringify(skills);
    console.log((stringSkills));
    let jsonSkills = JSON.parse(stringSkills);
    console.log(jsonSkills);
}
stringifySkills();

// Question 2
let ageStringify = JSON.stringify(age);
console.log((ageStringify));

// Question 3
let isMarriedStringify = JSON.stringify(isMarried);
console.log(isMarriedStringify);

// Question 4
let studentStringify = JSON.stringify(student);
console.log(studentStringify);

// Exercise LEVEL 2
// Question 1
let studentStringify2 = JSON.stringify(student,['firstName', 'lastName', 'skills']) //=>{
    // return typeof(value) === 'string' || typeof(value) === 'Array' ? {key, value} : "";
// });
console.log(studentStringify2);

// Exercise LEVEL 3

// Question 1
let txtParse = JSON.parse(txt);
// console.log(txtParse);

// Question 2
let textParse2 = ()=>{
    let txtParse2 = JSON.parse(txt);
    let objArray = Object.entries(txtParse2);
    let result = objArray.reduce((acc, arr)=>{
      return arr[1].skills.length > acc ? acc = arr[1].skills.length : acc;
    },0);
    let answer = [];
    objArray.forEach(element => {
        element[1].skills.length === result ? answer.push({name: element[0], skills: result}) : "";
    });
    console.log(answer);
}

textParse2();
