// Exercise 1
// Question 1
let personalDetails = ()=>{
    let firstName = "tope", lastName = "michael", country = "nigeria", city = "lagos", age = 40, isMarried = "false", year = 2020;
    // Question 2
    console.log(typeof(firstName));
    console.log(typeof(lastName));
    console.log(typeof(country));
    console.log(typeof(city));
    console.log(typeof(age));
    console.log(typeof(isMarried));
    console.log(typeof(year));
    // Question 3
    console.log(typeof ("10") === typeof (10));
    console.log(typeof (parseInt("9.8")) === typeof (10));
}
// personalDetails();

/* Exercise 2 (I will create a function for it to avoid getting prompts each time the page reloads because of the other exercises) */

// Question 1 - method 1 - self invoking function
/*
 (areaOfTriangle = () =>{
    let base = parseFloat(prompt("Input the numeric value of the triangle base"));
    let height = parseFloat(prompt("Input the numeric value of the triangle height"));
    let area = 0.5 * base * height; 
    console.log(`The area of the triangle is: ${area}`);
    return area;
})();
*/
// method 2
let areaOfTriangle1 = () =>{
    let base = parseFloat(prompt("Input the numeric value of the triangle base"));
    let height = parseFloat(prompt("Input the numeric value of the triangle height"));
    let area = 0.5 * base * height; 
    console.log(`The area of the triangle is: ${area}`);
    return area;
};
// console.log(`The area of the triangle (out of the function) is: ${areaOfTriangle1()}`);

// method 3 - using functions and validation
let inputValidation = (value)=>{    
        if(isNaN(value)){
            alert('Invalid Input, kindly enter a numeric value');
            do {
              value = parseFloat(prompt("Input a valid numeric value")); 
               if(isNaN(value)){
                   alert("Invalid, try again");
               } 
            } while (isNaN(value));
        }
            alert("valid input");    
    return value;
    }
    let areaOfTriangle2 = () =>{
        let baseInput = parseFloat(prompt("Input the numeric value of the triangle base"));
        let base = inputValidation(baseInput);
        let heightInput = parseFloat(prompt("Input the numeric value of the triangle height"));
        let height = inputValidation(heightInput);
        let area = 0.5 * base * height; 
        console.log(`The area of the triangle is: ${area}`);
        return area;
    };
    // areaOfTriangle2();

    // Question 2 - method 1 - self invoking function  

/* (perimeterOfTriangle = () =>{
    let sideA = parseFloat(prompt("Input the numeric value of side A"));
    let sideB = parseFloat(prompt("Input the numeric value of side B"));
    let sideC = parseFloat(prompt("Input the numeric value of side c"));

    let perimeter = sideA + sideB + sideC; 
    console.log(`The perimeter of the triangle is: ${perimeter}`);
    return perimeter;
})(); */

// method 2
let perimeterOfTriangle1 = () =>{
    let sideA = parseFloat(prompt("Input the numeric value of side A"));
    let sideB = parseFloat(prompt("Input the numeric value of side B"));
    let sideC = parseFloat(prompt("Input the numeric value of side C"));
    let perimeter = sideA + sideB + sideC;
    console.log(`The perimeter of the triangle is: ${perimeter}`);
    return perimeter;
};
// console.log(`The perimeter of the triangle (out of the function) is: ${perimeterOfTriangle1()}`);

// method 3 - using functions and validation

    let perimeterOfTriangle2 = () =>{
        let sideAInput = parseFloat(prompt("Input the numeric value of side A"));
        let sideA = inputValidation(sideAInput);
        let sideBInput = parseFloat(prompt("Input the numeric value of side B"));
        let sideB = inputValidation(sideBInput);
        let sideCInput = parseFloat(prompt("Input the numeric value of side C"));
        let sideC = inputValidation(sideCInput);
        let perimeter = sideA + sideB + sideC;
        console.log(`The perimeter of the triangle is: ${perimeter}`);
        return perimeter;
    };
    // perimeterOfTriangle2();

    // Question 3
    let areaOfRectangle = () =>{
        let length = parseFloat(prompt("Input the numeric value of the rectangle length"));
        let width = parseFloat(prompt("Input the numeric value of the rectangle width"));
        let area = length * width; 
        let perimeter = 2 * (length + width);
        let result = [area, perimeter];
       // console.log(`The area of the rectangle is: ${area} and perimeter is: ${perimeter}`);
        return result;
    };
    /* let display = areaOfRectangle();
    console.log(`The area of the rectangle (out of the function) is: ${display[0]} and perimeter is: ${display[1]}`); */

    // Question 4
    let areaOfCircle = () =>{
        let radius = parseFloat(prompt("Input the numeric value of the radius"));
        let area = Math.PI * radius ** 2; 
        let perimeter = Math.PI * radius * 2;
        console.log(`The area of the circle is: ${area} and the perimeter is: ${perimeter}`);
        return [area, perimeter];
    };
    /*
    let result = areaOfCircle();
     console.log(`The area of the circle (out of the function) is: ${result[0]} and the perimeter is: ${result[1]}`);
     */

    // Question 5a
    let y = '2x -2';
    let slope = parseInt((y.match(/\d(x)/g)));
    // console.log(`The slope of the equation is: ${slope}`);

    // Questions 5b and c are pending

    // Question 6
    let gradient = (x1, x2, y1, y2) =>{
        let slope = (y2 - y1)/(x2 - x1);
        return slope;
    }

    let pointA = [2, 2];
    let pointB = [6, 10]
    let answer = gradient(pointA[0], pointB[0], pointA[1], pointB[1]);
    // console.log(`The gradient of the given coordinates is: ${answer}`);

    // Question 7 - solution 1
    let quad1 = ()=>{
        let randomNum = ()=>{
            let num = Math.floor(Math.random()*10 - 5);
            return num;
        };
        let count = true;
        while (count) {
            let x = randomNum();
            let y = x**2 + 6*x + 9;
            console.log(x);
            if (y === 0){
               // alert ("equation solved: x is: " + x);
                
                console.log("equation solved: x is - ", x);
                count = false;
            }
        }
    }
    // quad1();

    // Question 7 - solution 2
    // -b+/- b2 - 4ac/2a
    // let eqn = x**2 + 6*x + 9;

    // Question 8
    let weeklyEarning = ()=>{
        let hours = parseFloat(prompt('Enter the number of hours'));
        let rate = parseFloat(prompt('Enter the rate per hour'));
        let earning = hours * rate;
        console.log('Your weekly earning is: ', earning);
        return earning;
    }
    // weeklyEarning();

    // Question 9
    let lifeSpan = () =>{
        let years = parseFloat(prompt('Enter the number of years to live'));
        let lifeSpan = 60 * 60 * 24 * 365 * years;
        console.log('life span in seconds is: ', lifeSpan);
        return lifeSpan;
    }
    // lifeSpan();

    // Exercise 3
    // Question 1 - truthy
    let isMale = true;
    let salary = 1000;
    let school = 'FUTA';
    let negative = -100;

    // Question 2 - falsy
    let none = 0;
    let isFemale = false;
    let nation;
    let empty = '';
    let nullValue = null;


    // Exercise 4
    let conditionals = ()=>{
        console.log(4 > 3);
    console.log(4 >= 3);
    console.log(4 < 3);
    console.log(4 <= 3);
    console.log(4 == 4);
    console.log(4 === 4);
    console.log(4 != 4);
    console.log(4 !== 4);
    console.log(4 != "4");
    console.log(4 == '4');
    console.log(4 === '4');

    // 4 > 3    true
    // 4 >= 3    true
    // 4 < 3    false
    // 4 <= 3   false
    // 4 == 4   true
    // 4 === 4  true
    // 4 != 4   false
    // 4 !== 4  false
    // 4 != '4' false
    // 4 == '4' true
    // 4 === '4' false
    }
    // conditionals();
    
// Exercise 6 - TERNARY OPERATOR
// Question 1a
let nameLength = ()=>{
    let firstName = prompt("Input your first name");
    let lastName = prompt("Input your last name");
    let fNameLength = firstName.length;
    let LNameLength = lastName.length;

    fNameLength > LNameLength?console.log(`Your first name ${firstName} is longer than your last name`):console.log(`Your last name ${lastName} is longer than your first name`);
}
// nameLength();
// Question 1b
let ageDifference = ()=>{
    let yourAge = prompt('Input your age');
    let myAge = 30;
    let difference = myAge - yourAge;

    difference > 0 ? console.log(`I am ${difference} years older than you`) : console.log(`I am ${Math.abs(difference)} years younger than you`); 
}
// ageDifference();
// Question 1c
let ageCalc = ()=>{
    let myAge = prompt('Input your year of birth in this format YYYY');
    let date = new Date();
    let year = date.getFullYear();
    let drivingAge = year - myAge;
    let remYear = 18 - drivingAge;

    drivingAge > 18 ? console.log(`You are ${drivingAge}. You are old enough to drive`) : console.log(`You are ${drivingAge}. You will be allowed to drive after ${remYear} year(s)`);
}
// ageCalc();

// Exercise 7 - Date and Time
let dateTime = ()=>{
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth();
    let dateInMonth = date.getDate();
    let day = date.getDay();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let seconds = date.getSeconds();
    let totalSeconds = date.getTime();

    console.log(`This year is: ${year}`);
    console.log(`This current month is: ${month}`);
    console.log(`Today's date is ${dateInMonth}`);
    console.log(`Today's date (as in day of the week) is ${day}`);
    console.log(`Today's current hour is ${hour}`);
    console.log(`Today's current minute is ${minute}`);
    console.log(`Total seconds from 1970 till now is ${totalSeconds}`);
    console.log(`The current time is ${hour}:${minute}`);
    console.log(`Full date and time (YYY-MM-DD HH:mm:ss) ${year}-${month}-${dateInMonth} ${hour}:${minute}:${seconds}`);
    console.log(`Full date and time (DD-MM-YYYY HH:mm:ss) ${dateInMonth}-${month}-${year} ${hour}:${minute}:${seconds}`);
    console.log(`Full date and time (DD/MM/YYY HH:mm:ss) ${dateInMonth}/${month}/${year} ${hour}:${minute}:${seconds}`);
}
dateTime();







    
    

    


