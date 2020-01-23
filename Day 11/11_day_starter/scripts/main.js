// console.log(countries)
// alert('Open the console and check if the countries has been loaded')

// EXERCISE LEVEL 1

const constants = [2.72, 3.14, 9.81, 37, 100]
const countries2 = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60
}
const users = [
{
  name:'Brook',
  scores:75,
  skills:['HTM', 'CSS', 'JS'],
  age:16
},
{
  name:'Alex',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'David',
  scores:75,
  skills:['HTM', 'CSS'],
  age:22
},
{
  name:'John',
  scores:85,
  skills:['HTML'],
  age:25
},
{
  name:'Sara',
  scores:95,
  skills:['HTM', 'CSS', 'JS'],
  age: 26
},
{
  name:'Martha',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'Thomas',
  scores:90,
  skills:['HTM', 'CSS', 'JS'],
  age:20
}
]

// Question 1
let constantsArray = ()=>{
    let [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants;
    console.log(e, pi, gravity, humanBodyTemp, waterBoilingTemp);
}
// constantsArray();

// Question 2
let countriesArray = ()=>{
    let [fin, est, sw, den, nor] = countries2;
    console.log(fin, est, sw, den, nor);
}
// countriesArray();

// Question 3
let rectangleObject = ()=>{
    let {width, height, area, perimeter} = rectangle;
    console.log(width, height, area, perimeter)
}
// rectangleObject();

// Exercise LEVEL 2

// Question 1
let usersArray =()=>{
    for (item of users){
        let answer = Object.keys(item)
        console.log(answer);
    }
    for ({name, scores, skills, age} of users){
        console.log(name, scores, skills, age);
    }
}
// usersArray();

// Question 2
let skillsTotal =()=>{
    for({name, skills} of users){
        if(skills.length < 2){
            console.log(name)
        }
    }
}
// skillsTotal();

// Exercise LEVEL 3

// Question 1
let countriesObject = ()=>{
    for({name, capital, population, languages} of countries){
        console.log(name, capital, population, languages)
    }
}
// countriesObject()

// Question 2
const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]
let juniorDeveloper =()=>{
    let [name, skills, scores] = student;
    let [HTM, CSS, JS, React] = scores;
    console.log([name, skills, scores, jsScore = JS, reactScore = React])
}
// juniorDeveloper();

// Question 3
const students = [
    ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
    ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
  ]
let convertArrayToObject =()=>{
    let output = []
    students.map(item=>{
        let [name, skills, scores] = item;
        output.push({name: name, skills: skills, scores: scores});
    })
    console.log(output);
    return output;
}
// convertArrayToObject();

// Question 4
/*Copy the student object to newStudent without mutating the original object. In the new object add the following ?

- Add Bootstrap with level 8 to the front end skill sets
- Add Express with level 9 to the back end skill sets
- Add SQL with level 8 to the data base skill sets
- Add SQL without level to the data science skill sets

```js */
    const student2 = {
      name: 'David',
      age: 25,
      skills: {
        frontEnd: [
          { skill: 'HTML', level: 10 },
          { skill: 'CSS', level: 8 },
          { skill: 'JS', level: 8 },
          { skill: 'React', level: 9 }
        ],
        backEnd: [
          { skill: 'Node',level: 7 },
          { skill: 'GraphQL', level: 8 },
        ],
        dataBase:[
          { skill: 'MongoDB', level: 7.5 },
        ],
        dataScience:['Python', 'R', 'D3.js']
      }
    }

    let newStudent = ()=>{
        let newStudent = {...student2};
        newStudent.skills.frontEnd.push({skill: "Bootstrap", level: 8})
        newStudent.skills.backEnd.push({skill: "Express", level: 9})
        newStudent.skills.dataBase.push({skill: "SQL", level: 8})
        newStudent.skills.dataScience.push("SQL")

        console.log(newStudent)
    }
    // newStudent();