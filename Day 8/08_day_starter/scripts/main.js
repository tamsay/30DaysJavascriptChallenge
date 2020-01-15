console.log(countries)
// alert('Open the console and check if the countries has been loaded')

// Exercise: Level 1

// Question 1
let dog = {};

// Question 2
// console.log(dog)

// Question 3
dog.name = 'lucky';
dog.legs = 4;
dog.color = 'black';
dog.age = 40;
dog.bark = ()=>{
    return 'woof woof';
} ;

// console.log(dog);

// Question 4
// 1. Get name, legs, color, age and bark value from the dog object
// 1. Set new properties the dog object: breed, getDogInfo
let dogInfo = ()=>{
    console.log(dog.name)
    console.log(dog.legs)
    console.log(dog.color)
    console.log(dog.age)
    console.log(dog.bark())
}
// dogInfo()

// Question 5
dog.breed = 'bull dog'
dog.getDogInfo = ()=>{
    console.log('Dog Full Info')
}
// console.log(dog);


// Exercise: Level 2
const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
}

// Question 1
let highestSkills = (obj)=>{
    // console.log(obj)
    let skillsLength = [];
    let objArray = Object.entries(obj)
    // let skills = objArray[6][1].skills.length;
    // console.log(skills)
    for(x=0; x<7; x++){
        let result = objArray[x][1].skills.length;
        skillsLength.push(result);
    }
    let maxSkill = skillsLength.indexOf(Math.max(...skillsLength));
    let answer = objArray[maxSkill][0]
    console.log('The person with the highest skills is: ', answer)
}
 // highestSkills(users)

 // Question 2
 let loggedIn = (obj)=>{
     let userArray = Object.entries(obj);
    let logStatus = [];
    let logPoint = [];

    for(x=0; x<userArray.length; x++){
        let status = userArray[x][1].isLoggedIn;
        logStatus.push(status)
        let point = userArray[x][1].points;
        point >=50 ? logPoint.push(point) : false;
    }
    let loggedIn = [];
        logStatus.map(item=>{
        let result = item.toString().match(/true/g);
        result? loggedIn.push(result) : false;
        
    })
    // console.log(logStatus)
    console.log('the amount of people logged in is: ', loggedIn.length)
    console.log('the amount of people with 50 point or more is: ', logPoint.length)
 }
 // loggedIn(users)

 // Question 3
 let mernStack = (obj)=>{
    // console.log(obj)
    let mernSkill = [];
    let objArray = Object.entries(obj)
    for(x=0; x<7; x++){
        let result = objArray[x][1].skills;
        let valid=[];
        let answer = result.filter((item)=>{
            if(item == 'MongoDB' || item == 'Express' || item == 'React' || item == 'Node'){
                valid.push(item);
            }
        })
        if (valid.length == 4){
            mernSkill.push(objArray[x][0])
        }
        // mernSkill.push(result);
    }
    console.log('The MERN developers are: ', mernSkill)
}
  mernStack(users)

