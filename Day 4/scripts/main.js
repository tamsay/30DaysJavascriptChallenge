// Exercise 1
let drivingAge = ()=>{
    let age = parseInt(prompt("Enter your age:"));
    let difference = age - 18;
    difference > 0 ? alert('You are old enough to drive') : alert(`You are left with ${Math.abs(difference)} years to drive.`)
}
// drivingAge();

// Exercise 2
let compareAge = ()=>{
    let yourAge = parseInt(prompt('Enter your age:'));
    let myAge = 30;
    let difference = myAge - yourAge;
    myAge > yourAge ? console.log(`I am ${difference} older than you`) : console.log(`You are ${Math.abs(difference)} years older than me`);
}
// compareAge();

// Exercise 3a and 3b
let difference1 = (a,b)=>{
    if (a > b){
        console.log(`${a} is greater than ${b} - using if statement`)
    }
    else{
        console.log(`${a} is less than ${b} - using if statement`)
    }

    a > b ? console.log(`${a} is greater than ${b} - using ternary statement`): console.log(`${a} is less than ${b} - using ternary statement`)
}
// difference1(5,4);

// Exercise 4
let scoreGrade = (score)=>{
    switch (true) {
        case (score >= 80 && score <=100):
            console.log('You scored an A')
            break;
        case (score >= 70 && score <=89):
            console.log('You scored a B')
            break;
        case (score >= 60 && score <=69):
            console.log('You scored a C')
            break;
        case (score >= 50 && score <=59):
            console.log('You scored a D')
            break;
        case (score >= 0 && score <=49):
            console.log('You scored an F')
            break;
        default:
            console.log('Invalid Score')
            break;
    }
}
// scoreGrade(300);

// Exercise 5
// method 1
let weather = (month)=>{
    switch(true){
        case (month == "September" || month == "October" || month == "November"):
            console.log('The season is Autumn')
            break;
        case (month == "December" || month == "January" || month == "February"):
            console.log('The season is Winter')
            break;
        case (month == "March" || month == "April" || month == "May"):
            console.log('The season is Spring')
            break;
        case (month == "June" || month == "July" || month == "August"):
            console.log('The season is Summer')
            break;
        default:
            console.log('Default reached, invalid input')
            break;
    }
}
// weather("April");

// method 2
let weather2 = (month)=>{
    let monthArray = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];

    let index = monthArray.indexOf(month);
    switch(true) {
        case (index == 11 || index == 0 || index == 1):
            console.log('The season is: Autumn')
            break;
        case (index == 2 || index == 3 || index == 4):
            console.log('The season is: Winter')
            break;
        case (index == 5 || index == 6 || index == 7):
            console.log('The season is: Spring')
            break;
        case (index == 8 || index == 9 || index == 10):
            console.log('The season is: Summer')
            break;
        default:
            console.log('Invalid Input')
    }
}
// weather2("July".toLowerCase());

// method 3 - ternary operator

// Exercise 6
let evenOrOdd = (num)=>{
    let result = num%2;
    result == 0 ? alert(`${num} is an even number`) : alert (`${num} is an odd number`);
}
// evenOrOdd(90);

// Exercise 7
let dayType = (value)=>{
    let daysArray = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']
    let index = daysArray.indexOf(value);

    switch(true) {
        case (index >= 0 && index <= 4):
            console.log(`${daysArray[index]} is a work day`)
            break;
        
        default:
            console.log(`${daysArray[index]} is a weekend day`)
    }
}
// dayType("saturday");

// Exercise 8
let numOfDaysInMonth = (month, year)=>{
    let now = new Date(year, month, 0);
    let result = now.getDate();
    console.log(`The number of days in month ${month} is: ${result}`);
}
numOfDaysInMonth(2, 2000);
