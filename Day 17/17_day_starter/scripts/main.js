
// Exercise LEVEL 1

// Question 1
localStorage.setItem('firstname','temitope');
localStorage.setItem('lastname','michael');
localStorage.setItem('age',40);
localStorage.setItem('country','Nigeria');
localStorage.setItem('city','Lagos');
console.log(sessionStorage);

// Exercise LEVEL 2

// Question 1
const Student = {
    firstname: 'Temitope', 
    lastname: 'Mike',
    age : 50,
    skills: ['badminton', 'frontend', 'backend', 'networking'], 
    country: 'Nigeria', 
    enrolled: true,  
}
let studentString = JSON.stringify(Student);
localStorage.setItem('student', studentString);

// Exercise LEVEL 3
// Question 1
let personAccount = {
    firstname: 'tope',
    lastname: 'michael',
    incomes: 500,
    expenses:90,
    totalIncome(){

    },
    totalExpense(){

    },
    accountInfo(){

    },
    addIncome(){

    },
    addExpense(){

    },
    accountBalance(){

    },
}
let personAccountString = JSON.stringify(personAccount);
localStorage.setItem('personAccount', personAccountString);
let output = localStorage.getItem('personAccount');
console.log(output);




console.log(localStorage);
console.log(sessionStorage);