// Exercise: LEVEL 1

// Question 1
class Animal {
  constructor (name, age, color, legs){
    this.name = name;
    this.age = age;
    this.color = color;
    this.legs = legs;
  }
  get makeSound(){
    return "Make some noise"
  }
  fullDetails (){
    return `color is: ${this.color}`
  }
}

// Question 2 and LEVEL 2, Question 1 
class Dog extends Animal {
  constructor (name, age, color, legs, gender){
    super(name, age, color, legs);
     this.gender = gender; 
  }

  get makeSound(){
    return `Woof woof  ${this.name}`
  };

  get getGender(){
  return `${this.gender}`;
  };

  set setGender(input){
    this.gender = input;
  }
}

let dogA = new Dog("Bull dog", 45, 'Black', 4, "female")
 console.log(dogA.makeSound);
 dogA.setGender = ('male');
 console.log(dogA.getGender);

class Cat extends Animal {
  constructor(name, age, color, legs, specie){
    super(name, age, color, legs)
    this.specie = specie;
  }
  get getSpecie (){
    return `The specie of the cat is: ${this.specie}`
  }
}
let catA = new Cat('busky', 34, "red", 5, 'olongbo osogbo');
console.log(catA.getSpecie)

// Exercise: LEVEL 3
ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26];
// ages = [1,2,3,4,]

class Statistics {
  constructor(array){
    this.array = array;
  }

  sortedArrayAscending(){
    return this.array.sort((a,b)=>{
      return a - b;
    })
  }
  count(){
    return this.array.length;
  }
  sum(){
    return this.array.reduce((acc, arr)=>{
      return acc + arr;
    },0);
  }
  min(){
    return this.sortedArrayAscending()[0];
  }
  max(){
    return this.sortedArrayAscending()[this.count()-1];
  }
  range(){
    return this.max()-this.min();
  }
  mean(){
    return Math.ceil(this.sum()/this.count());
  }
  median(){
     return this.count()%2 == 1 ?  this.sortedArrayAscending()[Math.floor(this.count()/2)] : (this.sortedArrayAscending()[Math.floor(this.count()/2)] + this.sortedArrayAscending()[Math.floor(this.count()/2 -1)])/2;
  }
  mode(){
    let arraySet = new Set (this.sortedArrayAscending());
    let preResult = [];
    [...arraySet].filter(itemSet=>{
      let count = 0;
      this.sortedArrayAscending().filter(itemArray=>{
        itemSet === itemArray ? count++ : "";
      })
      preResult.push({mode: itemSet, count})
    })
    let result =  preResult.reduce((acc, arr)=>{
      arr.count > acc ?  acc = arr.count : "";
      return acc;
    },0);
    return preResult.filter(item=>{
      return item.count === result?item:"";
    })
  }
  var(){
      let diffArray =[];
      let mean1 = this.mean();
      this.array.map(arr=>{
        diffArray.push(arr-mean1);
      });
      let summation = diffArray.reduce((arr, acc)=>{
        return acc**2 + arr;
      },0);
      return (summation/this.count());
  }
  std(){
    return (Math.sqrt(this.var())).toFixed(1);
  }
  freqDist(){
    let freqDistSet = new Set(this.array);
    let arr = [];
    [...freqDistSet].filter(item=>{
        let count = 0;
        this.array.map(x=>{
            if(item == x) count = count + 1;
        })
        arr.push([item, count]);
    })
    return arr;
  }
}

let statistics = new Statistics(ages);

console.log('Count:', statistics.count()) // 25
console.log('Sum: ', statistics.sum()) // 744
console.log('Min: ', statistics.min()) // 24
console.log('Max: ', statistics.max()) // 38
console.log('Range: ', statistics.range()) // 14
console.log('Mean: ', statistics.mean()) // 30
console.log('Median: ',statistics.median()) // 29
console.log('Mode: ', statistics.mode()) // {'mode': 26, 'count': 5}
console.log('Variance: ',statistics.var()) // 17.5
console.log('Standard Deviation: ', statistics.std()) // 4.2
console.log('Frequency Distribution: ', statistics.freqDist());

// Question 2
class PersonAccount {
  constructor(firstname, lastname, incomes, expenses){
    this.firstname = firstname;
    this.lastname = lastname;
    this.incomes = incomes;
    this.expenses = expenses;
  }
  totalIncome(){

  };
  totalExpense(){

  };
  accountInfo(){

  };
  addIncome(){

  };
  addExpense(){

  };
  accountBalance(){

  };
}
/*
class Person {
  constructor(firstName, lastName, age, country, city) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.country = country
    this.city = city
    this.score = 0
    this.skills = []
  }
  getFullName() {
    const fullName = this.firstName + ' ' + this.lastName
    return fullName
  }
  get getScore() {
    return this.score
  }
  get getSkills() {
    return this.skills
  }
  set setScore(score) {
    this.score += score
  }
  set setSkill(skill) {
    this.skills.push(skill)
  }
  getPersonInfo() {
    let fullName = this.getFullName()
    let skills =
      this.skills.length > 0 &&
      this.skills.slice(0, this.skills.length - 1).join(', ') +
        ` and ${this.skills[this.skills.length - 1]}`

    let formattedSkills = skills ? `He knows ${skills}` : ''

    let info = `${fullName} is ${this.age}. He lives ${this.city}, ${this.country}. ${formattedSkills}`
    return info
  }
  static favoriteSkill() {
    const skills = ['HTML', 'CSS', 'JS', 'React', 'Python', 'Node']
    const index = Math.floor(Math.random() * skills.length)
    return skills[index]
  }
  static showDateTime() {
    let now = new Date()
    let year = now.getFullYear()
    let month = now.getMonth() + 1
    let date = now.getDate()
    let hours = now.getHours()
    let minutes = now.getMinutes()
    if (hours < 10) {
      hours = '0' + hours
    }
    if (minutes < 10) {
      minutes = '0' + minutes
    }

    let dateMonthYear = date + '.' + month + '.' + year
    let time = hours + ':' + minutes
    let fullTime = dateMonthYear + ' ' + time
    return fullTime
  }
}

console.log(Person.favoriteSkill())
console.log(Person.showDateTime())

class Student extends Person {
  constructor(firstName, lastName, age, country, city, gender) {
    super(firstName, lastName, age, country, city)
    this.gender = gender
  }

  saySomething() {
    console.log('I am a child of the person class')
  }
  getPersonInfo() {
    let fullName = this.getFullName()
    let skills =
      this.skills.length > 0 &&
      this.skills.slice(0, this.skills.length - 1).join(', ') +
        ` and ${this.skills[this.skills.length - 1]}`

    let formattedSkills = skills ? `He knows ${skills}` : ''
    let pronoun = this.gender == 'Male' ? 'He' : 'She'

    let info = `${fullName} is ${this.age}. ${pronoun} lives in ${this.city}, ${this.country}. ${formattedSkills}`
    return info
  }
}

const s1 = new Student(
  'Asabeneh',
  'Yetayeh',
  250,
  'Finland',
  'Helsinki',
  'Male'
)
const s2 = new Student('Lidiya', 'Tekle', 28, 'Finland', 'Helsinki', 'Female')
s1.setScore = 1
s1.setSkill = 'HTML'
s1.setSkill = 'CSS'
s1.setSkill = 'JavaScript'

s2.setScore = 1
s2.setSkill = 'Planning'
s2.setSkill = 'Managing'
s2.setSkill = 'Organizing'

console.log(s1)

console.log(s1.saySomething())
console.log(s1.getFullName())
console.log(s1.getPersonInfo())

console.log(s2.saySomething())
console.log(s2.getFullName())
console.log(s2.getPersonInfo())
*/