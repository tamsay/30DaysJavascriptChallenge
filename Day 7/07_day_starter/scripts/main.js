console.log(countries)
// alert('Open the console and check if the countries has been loaded')

// Exercise: Level 1

// Question 1
let name=()=>{
    console.log('My name is Temitope Longe');
}
// name();

// Question 2
let fullName=(first, last)=>{
    console.log(`My full name is ${first} ${last}`);
}
// fullName("Temitope", "Longe");

// Question 3
let sum=(first, last)=>{
    console.log(`The sum is ${first + last}`);
}
// sum(5,7);

// Question 4
let areaOfRectangle=(length, width)=>{
    console.log(`The area of a rectangle is: ${length * width}`);
}
// areaOfRectangle(5,6);

// Question 5
let perimeterOfRectangle=(length, width)=>{
    console.log(`The perimeter of a rectangle is: ${(2*(length + width))}`);
}
// perimeterOfRectangle(5,6);

// Question 6
let volumeOfRectPrism=(length, width, height)=>{
    console.log(`The volume of a rectangular prism is: ${length * width * height}`);
}
// volumeOfRectPrism(5,6,8);

// Question 7
let areaOfCircle=(radius)=>{
    console.log(`The area of a circle is: ${Math.PI * radius **2}`);
}
// areaOfCircle(7);

// Question 8
let circumOfCircle=(radius)=>{
    console.log(`The circumference of a circle is: ${Math.PI * radius *2}`);
}
// circumOfCircle(7);
 
// Question 9
let density=(mass, volume)=>{
    console.log(`The density of a substance is: ${mass/volume}`);
}
// density(50,2);

// Question 10
let speed=(distance, time)=>{
    console.log(`The speed of an object is: ${distance/time}`);
}
// speed(50,2);

// Question 11
let weight=(mass, gravity)=>{
    console.log(`The weight of an object is: ${mass* gravity}`);
}
// weight(50,10)

// Question 12
let convertCelsFah=(temp)=>{
    let Fahrenheit = 9* temp/5 + 32;
    console.log(`The temperature of the object in Fahrenheit is: ${Fahrenheit}`);
}
// convertCelsFah(100);

// Question 13
let bmi=(weight, height)=>{
    let bmiValue = weight / (height **2);
    console.log(`The bmi of an individual is: ${bmiValue}`);

    if(bmiValue < 18.5){
        console.log('You are underweight')
    }
    else if(bmiValue >= 18.5 && bmiValue <= 24.9){
        console.log('You have Normal Weight')
    }
    else if(bmiValue >= 25 && bmiValue <= 29.9){
        console.log('You are Over Weight')
    }
    else if(bmiValue >= 30){
        console.log('You are obese')
    }
}
// bmi(100, 2)

// Question 14








