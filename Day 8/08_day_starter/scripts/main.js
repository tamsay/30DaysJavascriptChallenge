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
    let objArray = [...obj]
        console.log("The element is:", objArray.length)
}
highestSkills(users)
