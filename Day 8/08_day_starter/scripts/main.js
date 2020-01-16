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
    let mernSkill = [];
    let objArray = Object.entries(obj)
    for(x=0; x<7; x++){
        let result = objArray[x][1].skills;
        let valid=[];
        result.filter((item)=>{
            if(item == 'MongoDB' || item == 'Express' || item == 'React' || item == 'Node'){
                valid.push(item);
            }
        })
        if (valid.length == 4){
            mernSkill.push(objArray[x][0])
        }
    }
    console.log('The MERN developers are: ', mernSkill)
}
//  mernStack(users)

// Question 4
let setName = ()=>{
    users.Tope = {};
    users.Tope.email = "tlonge@gmail.com"
}
// setName()
// console.log(users)

// Question 5
let getKeys = (obj)=>{
    let result = Object.keys(obj);
    console.log(result)
}
// getKeys(users)

// Question 6
let getValues = (obj)=>{
    let result = Object.values(obj)
    console.log(result);
}
// getValues(users)

// Question 7
let countryDetails = (obj)=>{
    console.log('Country name is: ', countries[0].name)
    console.log('Country capital is: ', countries[0].capital)
    console.log('Country population is: ', countries[0].population)
    console.log('Country currency is: ', countries[0].currency)

}
// countryDetails(countries)

// Exercise: Level 3

// Question 1
let personAccount = ()=>{
    let personAccount = {
        firstname: 'tope',
        lastname: 'mike',
        incomes: {sideHustle: 44445454,
                    mainHustle: 4444444444444
                },
        expenses: {rent: 454,
            airtime: 444
        },
        totalIncome: ()=>{

        },
        totalExpense: ()=>{

        },
        accountInfo: ()=>{

        },
        addIncome: ()=>{

        },
        addExpense: ()=>{

        },
        accountBalance: ()=>{

        }

    }
    console.log(personAccount)
}
// personAccount();

// Question 2
const users2 = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt:'08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt:'08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt:'08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt:'08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt:'08/01/2020 10:00 AM',
        isLoggedIn: false
    }
    ];

    const products = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
      { userId: 'fg12cy', rate: 5 },
      { userId: 'zwf8md', rate: 4.5 }
    ],
    likes: []
  },
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy']
  },
  {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy']
  }
]

// Question 2a
let userValidation = (name, password)=>{
    for(x=0; x < users2.length ; x++){
        if ((users2[x].username === name) && (users2[x].password === password)){
           return true;
        }
    }
}

let signUp = (name, ...arg)=>{
    let result = userValidation(name);
    if (result){
        console.log(name, " is a registered user")
    }
    else{
        let details = {
            id: arg[0][3],
            username: arg[0][0],
            email: arg[0][1],
            password: arg[0][2],
        }
        users2.push(details);
        console.log(name, 'is not a registered user')
    }
}

// signUp('Tope', ['Tope', 'tope@gmail.com', '123321', '34ere3']);
 // console.log(users2)

// Question 2b
let signIn = (username, password)=>{
    let answer = userValidation(username, password);
    answer ? console.log('Login successful') : console.log('Login unsuccessful, wrong details.')
}
// signIn('Alex', '123123');

// Question 3a
let rateProduct = (product, rating)=>{
    let rate = {
        userId: rating[0],
        rate: rating[1]
    }
    let index;
    products.map(item=>{
        if(item.name == product){
         index = products.indexOf(item);
        }
    })
    // console.log(index)
   products[index].ratings.push(rate);
}
// rateProduct('Laptop', ['ere4343', 4.5])
// console.log(products)

// Question 3b
let averageRating = ()=>{
    for(x=0; x<products.length ; x++){
        let average;

        if (products[x].ratings.length === 0){
            average = 0;
       }

       else {
        let total = 0;
        let count = 0;
        for(y=0; y < products[x].ratings.length; y++){
            total = total + products[x].ratings[y].rate;
            count = count + 1;
        }
        average = total/count;
    }
        console.log(average);
    }
}
// averageRating()

// Question 4
let likeProduct = (userid)=>{
    for(x=0; x < products.length; x++){
        if(products[x].likes === []){
            products[x].likes.push(userid)
        }
        else if (products[x].likes.join('').includes(userid)){
            let position = products[x].likes.indexOf(userid);
            products[x].likes.splice(position, 1);
        }
        else {
            products[x].likes.push(userid)
        }
    }
}
// likeProduct('zwf8md')
// console.log(products)