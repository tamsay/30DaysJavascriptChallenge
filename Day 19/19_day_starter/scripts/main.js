console.log(countries)
// alert('Open the console and check if the countries has been loaded')

// Exercises: Level 1
// 1. Create a closure which has one inner function
let outerFunction =()=>{
    let name = 'tope';
    let addNickName = ()=>{
        return fullname = name + "longman";
    }
    return addNickName;
}
outerFunction();
// console.log(outerFunction()())


// Exercises: Level 2
// 1. Create a closure which has three inner functions

let outerMostFunction =()=>{
    let salary = 0;
    let fullname = "";
    let savings = 0;

    addExpense=(()=>{
        console.log('yana aiki')
         savings = savings + 5000;
    })();
     addIncome=()=>{
       salary = salary + (savings*3);
    };
    addFullName=(surname, fname)=>{
       fullname += `${surname}  ${fname}`
    };
    let fulldetails = ()=>{
       return result = `${fullname} has a total of ${salary} in his account`;
    }
    addIncome();
    addFullName('longe', 'tope');
   return fulldetails();
}
outerMostFunction();
console.log(outerMostFunction());

// Exercises: Level 3
// 1. Create a personAccount out function. It has firstname, lastname, incomes, expenses  inner variables. It has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance inner functions. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.
