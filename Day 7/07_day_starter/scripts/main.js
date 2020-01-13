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

// Question 14a - version 1
let checkMonth = () =>{
    let months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    let now = new Date();
    let month = months[(now.getMonth())];
    console.log('The current month is:', month);
}
// checkMonth();
// Question 14b - question solution
let checkSeason = (month)=>{

    switch(true){
        case(month == 'December' || month == 'January' || month == 'February'):
        console.log('The season is Autumn');
        break;
        case(month == 'March' || month == 'April' || month == 'May'):
        console.log('The season is Winter');
        break;
        case(month == 'June' || month == 'July' || month == 'August'):
        console.log('The season is Spring');
        break;
        case(month == 'September' || month == 'October' || month == 'November'):
        console.log('The season is Summer');
        break;

        default:
            console.log('Invalid month inputted; Try again')
    }
}
// checkSeason('July');

// Question 15
let findMax = (a,b,c)=>{
    let maxArray = [a,b,c];
    let sortedArray = maxArray.sort((a,b)=>{
        return a - b;
    })
    console.log(`The maximum number in the list is: ${sortedArray[sortedArray.length-1]}`);
}
// findMax(-3,-4,-1)

// Exercise Level 2

// Question 1
let solveLinEquation = (x, y)=>{
    // linear eqn = ax + by + c;

}
// solveLinEquation(x, y)
// Question 2
let solveQuadEquation = (a,b,c)=>{
    // eqn = ax2 + bx + c;
    let root1 = ((-b) + (Math.sqrt(b**2 - 4*a*c)))/(2*a);
    let root2 = ((-b) - (Math.sqrt(b**2 - 4*a*c)))/(2*a);
    console.log(`The roots of the equation are: ${root1} and ${root2}`);  
}
// solveQuadEquation(1, 0, -9)

// Question 3
let printArray = (items)=>{
    for(index of items){
        console.log(index)
    }
}
// printArray([1,3,5,7, 'tope', 'swift']);

// Question 4
let showDateTime = ()=>{
    let now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth();
    let date = now.getDate();
    let hour = now.getHours();
    let minute = now.getMinutes();

    console.log(`The current date and time is: ${date}/${month+1}/${year}  ${hour}:${minute}`)
}
// showDateTime()

// Question 5
let swapValues = (x,y)=>{
    let a = x;
     let b = y;
     x = b;
     y = a;
    console.log(x,y);
}
// swapValues(4,5)

// Question 6
let reverseArray = (arr)=>{
    let newArray = [];
    arr.map(item=>{
        newArray.unshift(item)
    })
    console.log(newArray);
}
// reverseArray([1,2,3,4,5])

// Question 7
let capitalizedArray = (arr)=>{
    let result = [];
    arr.map(items=>{
        result.push(items.toUpperCase());
    })
    console.log(result)
}
// capitalizedArray(['tolu', 'tope', 'tayo'])

// Question 8, 9, 10, 11, 12, 13
// already done in previous lessons

// Question 14
let sumUnlimited =(...argument)=>{
    let result = argument.reduce((arr, acc)=>{
        return arr+acc;
    },0);
    console.log(result);
}
// sumUnlimited(1,2,3,4,5,6);

// Question 15
let randomUserIp = ()=>{
    // ip address format: 192.168.0.1 (0-255)
    let user = [];
    for(x=0; x<4; x++){
        let rand = Math.floor(Math.random()*255 + 1);
        user.push(rand);
    }
    let result = user.join('.')
    console.log(result)
}
// randomUserIp();

// Question 16
let randomMacAddress = ()=>{
    // ip address format: 00:1A:C2:7B:00:47 or 1cea:334d:2341 (hexadecimal a-f, 0-9)
    let mac = [];
    let regex = 'ABCDEFabcdef0123456789';
    // method 1
        for(y=0; y<12; y++){
            let rand = Math.floor(Math.random()*regex.length);
            let res = regex.charAt(rand);
            mac.push(res);
        }    
    let output = mac.join('')
    let result = (output.match(/[a-fA-F0-9]{2}/g)).join(':');
        console.log(result)      
}
// randomMacAddress();

// Question 17
let randomHexaNumberGenerator = ()=>{
    let result = '#';
    let hexReg = 'ABCDEFabcdef0123456789';

    for(x=0; x<6; x++){
        let rand = Math.floor(Math.random()*hexReg.length);
        let output = hexReg.charAt(rand);
        result = result + output;
    }
    console.log(result);
}
// randomHexaNumberGenerator();

// Question 18
let userIdGenerator = ()=>{
    let idReg = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let id = "";
    for (x=0; x<7; x++){
        let rand = Math.floor(Math.random()*idReg.length);
        let result = idReg.charAt(rand);
        id += result;
    }
    console.log(id);
}
// userIdGenerator()

// Exercise: Level 3

// Question 1
let userIdGeneratedByUser = ()=>{
    let numOfChar = parseInt(prompt("what is the length of the id to be generated?"));
    let numOfID = parseInt(prompt('How many ID\'s do you want generated'));

    let idReg = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let id = [];
    for(y=0; y<numOfID; y++){
        let preId = "";
        for (x=0; x<numOfChar; x++){
            let rand = Math.floor(Math.random()*idReg.length);
            let result = idReg.charAt(rand);
            preId = preId + result;
        }
        id.push(preId);
    }
    id.forEach((item)=>{
        console.log(item)
    });
}
// userIdGeneratedByUser()

// Question 2
let randomNum=()=>{
let alphaNumeric = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let alphaNumericLength = alphaNumeric.length;
    let result = '';
    let result2 = '';
    let result3 = "#";
    let result4 = [];
    let hexReg = /[a-fA-F0-9]{6}/g;
    let hexChar = "ABCDEFabcdef0123456789";

    let randChar = Math.floor(Math.random()*100);

    for(x=0; x<6; x++){
        let randomChar = alphaNumeric.charAt(Math.floor(Math.random()*alphaNumericLength));
        result = result + randomChar;
    }

    for(x=0; x < randChar; x++){
        let randomChar = alphaNumeric.charAt(Math.floor(Math.random()*alphaNumericLength));
        result2 = result2 + randomChar;
    }

    for(x=0; x<6; x++){
        let randomChar = hexChar.charAt(Math.floor(Math.random()*hexChar.length));
        result3 = result3 + randomChar;
    }

    for(x=0; x<3; x++){
        let randomChar = (Math.floor(Math.random()*255)+1);
        result4.push(randomChar);
    }
    console.log('6 random characters: ', result);
    console.log('variable random characters: ', result2);
    console.log('Hexadecimal number is: ', result3);
    console.log(`RGB Code generated is: rgb(${result4.join(',')})`);
 }
 // randomNum();

 //Question 3
 let arrayOfHexaColours = (...num)=>{
     let hexColor = [];
     let hexChar = "ABCDEFabcdef0123456789"

     for (x=0; x<num; x++){
         let color = '#';
         for(y=0; y < 6; y++){
            let rand = Math.floor(Math.random()*hexChar.length);
            let char = hexChar.charAt(rand);
            color = color + char;
         }
         hexColor.push(color);
     }
     console.log(hexColor);
 }
 // arrayOfHexaColours(8);

 // Question 4
 let arrayOfRGBColors = (...num)=>{
     let result = [];
    for (y=0; y<num; y++){
        let array = [];
     for (x=0; x<3; x++){
         let rand = Math.floor(Math.random()*255 + 1);
         array.push(rand);
     }
        let preArray = `rgb(${array.join(',')})`;
         result.push(preArray)
    }
     console.log(result);
 }
 // arrayOfRGBColors(4);

 // Question 5
 let convertRGBToHexa = (color)=>{
    let result = '#';
    for (x=0; x<color.length; x++){
        let hexString = color[x].toString(16);
        result = result + hexString;
    }
    console.log(result);
    return result;
 }
 // convertRGBToHexa([255,0,255]);

 // Question 6
 let generateColors = (type, number)=>{
     
    if(type === 'rgb'){
            let result = [];
           for (y=0; y<number; y++){
               let array = [];
            for (x=0; x<3; x++){
                let rand = Math.floor(Math.random()*255 + 1);
                array.push(rand);
            }
               let preArray = `rgb(${array.join(',')})`;
                result.push(preArray)
           }
            console.log(result);
            return result;
        }    
    else {
        let hexColor = [];
        let hexChar = "ABCDEFabcdef0123456789"
   
        for (x=0; x<number; x++){
            let color = '#';
            for(y=0; y < 6; y++){
               let rand = Math.floor(Math.random()*hexChar.length);
               let char = hexChar.charAt(rand);
               color = color + char;
            }
            hexColor.push(color);
        }
        console.log(hexColor);
    }

 }
 // generateColors('rgb', 5);
 // generateColors('hexa', 15);

 // Question 7
 let shuffledArray = (array)=>{

 }
 shuffledArray([4,5,1,2,7]);






