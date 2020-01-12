console.log(countries)
// alert('Open the console and check if the countries has been loaded')

// Question 1
let count1 = ()=>{
    // Question 1a
    for (let index = 0; index <= 10; index++) {
        console.log(index);
    }
    // Question 1b
    let x = 0;
    while (x<=10){
        console.log(x);
        x++;
    }
    // Question 1c
    let y = 0;
    do{
        console.log(y);
        y++;
    }while(y<=10);
}
// count1();

// Question 2
let count2 = ()=>{
    // Question 2a
    for (let index = 10; index >= 0; index--) {
        console.log(index);
    }
    // Question 2b
    let x = 10;
    while (x>=0){
        console.log(x);
        x--;
    }
    // Question 2c
    let y = 10;
    do{
        console.log(y);
        y--;
    }while(y>=0);
}
// count2();

// Question 3
// same as question 1

// Question 4
let pattern1 = ()=>{
    for(x=0; x < 7; x++){
        console.log("#".repeat(x+1))
    }
}
// pattern1()

// Question 5
let multiplicationTable = () =>{
    for(x=0; x <=10; x++){
        console.log(`${x} x ${x} = ${x*x}`)
    }
}
// multiplicationTable();

// Question 6
let mathTable = ()=>{    
    console.log(`i    i^2   i^3`) ;
    for(x=0; x <= 10; x++){
        console.log(`${x**1}    ${x**2}     ${x**3}`);
    }
}
// mathTable();

// Question 7,8,9,10,11,12
let evenOddPrimeSumNumbers = ()=>{
    let evenNum = [];
    let oddNum = [];
    let primeNum = [];
    let sum = 0;
    
        for(x=0; x<=100; x++){
            let prime = (x)=>{                       
                if( x === 1){
                    return false;
                }
                else if (x === 2){
                    return x;
                }
                else{
                for(var y = 2; y < x; y++){
                    if(x % y === 0){
                        return false;
                    }
                }
                return x;  
            }
            };
         
            if(x%2 == 0){
                evenNum.push(x);
            }
            else if (x%2 == 1){
            oddNum.push(x);
            }
                let res = prime(x);
                res? primeNum.push(res): false;
                sum = sum + x;

        }
            let evenSum = evenNum.reduce((arr, acc)=>{
                return arr + acc;
            },0);
            let oddSum = oddNum.reduce((arr, acc)=>{
                return arr + acc;
            },0);
            console.log(evenNum)
            console.log(oddNum)
            console.log(primeNum) 
            console.log('Total Sum is: ', sum)     
            console.log('Even Sum is: ', evenSum)     
            console.log('Odd Sum is: ', oddSum);     

        }     
 // evenOddPrimeSumNumbers();

 // Question 13, 14, 15, 16, 17, 18 
 let randomNum = ()=>{
     let num = [];
     for(x=0; x<5; x++){
         let rand = Math.floor((Math.random()*1000))+5;
         num.push(rand);
     }
     console.log(num);

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
 randomNum();

 // Question 19, 20, 21, 22, 23, 24, 25
 let countries2 = ()=>{
     let newCountry = [];
     let newCountryLength = [];
     let countryAbbr = [];
     let regexCountry = /^.{3}/gi;
     let fullDetails = [];
     let countryWithLand = [];
     let countryWithoutLand = [];
     let countryEndingWithIA = [];
     let countryEndingWithoutIA = [];  
     let countryWith5Char = [];

     myCountries.map((item)=>{
         newCountry.push(item.toUpperCase());
         newCountryLength.push(item.length);
         let result = (item.includes('land'));
         result? countryWithLand.push(item) : countryWithoutLand.push(item);
         let result2 = item.match(/\w*ia\b/gi);
         result2? countryEndingWithIA.push(item) : countryEndingWithoutIA.push(item);
         let result3 = item.match(/\b\w{5}\b/g);
         // I can also use result3 = item.match(/^.{5}$/g) - specifying start and end markers
         result3 ? countryWith5Char.push(item) : false;
     });

     for(x=0 ; x < newCountry.length ; x++){
         let result = newCountry[x].match(regexCountry).join("");
         countryAbbr.push(result);
     }
     for(x=0; x <1; x++){
         for (y=0; y < newCountry.length ; y++){
             let result = [newCountry[y], countryAbbr[y], newCountryLength[y]];
             fullDetails.push(result);
         }
     }
      let highest = newCountryLength.indexOf(Math.max(...newCountryLength));
      let highest2 = newCountryLength.reduce((a,b)=>{
          return Math.max(a,b);
      });

     console.log(newCountry);
     console.log(newCountryLength);
     console.log(countryAbbr);
     console.log('full details', fullDetails);
     console.log('countries with -land', countryWithLand);
     console.log('countries without -land', countryWithoutLand);
     console.log('countries ending with -ia', countryEndingWithIA);
     console.log('countries ending without -ia', countryEndingWithoutIA);
     console.log('country with the highest char lenght is: ', myCountries[newCountryLength.indexOf(highest2)]);
     console.log('country with 5 char lenght is: ', countryWith5Char);
 }
// countries2();

// Question 26, 27
const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
let webTechsArray = ()=>{
    let arrayLength = [];
    let fullDetails = [];

    webTechs.map((item)=>{
       arrayLength.push(item.length);
    });
    // Method 1
    // let longest = arrayLength.indexOf(Math.max(...arrayLength));
    // method two
    let longest = arrayLength.indexOf(arrayLength.reduce((a,b)=>{
         return Math.max(a,b);
}));

    for(x=0; x<1; x++){
        for (y=0; y<webTechs.length; y++){
            fullDetails.push([webTechs[y], arrayLength[y]]);
        }
    }

    console.log(webTechs[longest]);
    console.log(fullDetails);
}
// webTechsArray();

// Question 28
const mernStack = ['MongoDB', 'Express', 'React', 'Node']
let mern = ()=>{
    let mernRegex = /^.{1}/gi;
    
   let result =  mernStack.map((item)=>{
       return (item.match(mernRegex).join(","));
});
console.log(result.join(''));
}
// mern();

// Question 29
let forloop = ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"];

let forloopsVariant = ()=>{
    for(x=0; x<forloop.length; x++){
        console.log(forloop[x]);
    }

    for (item of forloop) {
        console.log('for of iterator is: ', item)
    }
}
// forloopsVariant();

// Question 30
let fruits = ['banana', 'orange', 'mango', 'lemon'];
let reverseFruits = [];
// using a loop to achieve reverse without the reverse method.
let fruitReverseLoop = ()=>{
    for(x=fruits.length-1 ; x>=0; x--){
        reverseFruits.push(fruits[x])
        console.log(fruits[x]);
    }
    console.log(reverseFruits)
}
// fruitReverseLoop();

// Question 31
let fullStack = ()=>{
    const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
  ]
  let newFullStack = [];
  for(x=0; x<fullStack.length; x++){
      for(y=0; y < fullStack[x].length; y++){
        newFullStack.push(fullStack[x][y]);
        console.log(fullStack[x][y]);
      }
  }
  console.log(newFullStack);
  console.log(newFullStack.sort());
}
// fullStack();

// Question 32, 33, 34, 35
let newCountryArray = ()=>{
    let newCountryArray = Array.from(countries);
    // you can also use newCountryArray = [...countries]
    // and also newCountryArray = countries.slice()
    // console.log(newCountryArray)

    let sortedArray = newCountryArray.sort();
    console.log(sortedArray);
    console.log(webTechs.sort());
    console.log(mernStack.sort());

    let landRegex = /land/g;
    let landCountries = [];
    let countryLength = [];
    let fourCharRegex = /^\w{4}$/g;
    let fourCharCountries = [];
    let twoOrMoreWordsCountries = [];

    newCountryArray.map((item)=>{
        let result = item.match(landRegex);
        result ? landCountries.push(item): false;
        countryLength.push(item.length);

        let result2 = item.match(fourCharRegex);
        result2 ? fourCharCountries.push(item) : false;

        let result3 = item.match(/([a-zA-Z]+\s?\b){2,}/g);
        result3 ? twoOrMoreWordsCountries.push(item) : false;

    });
    
    let highestValue = countryLength.reduce((a,b)=>{
        return Math.max(a,b);
    })
    let index = countryLength.indexOf(highestValue);

    console.log(landCountries);
    console.log('The country with the highest character is: ', newCountryArray[index]);
    console.log('The countries with only four characters are: ', fourCharCountries);
    console.log('The countries with two or more words are: ', twoOrMoreWordsCountries);
    console.log('The countries in reverse order: ', sortedArray.reverse());
}
newCountryArray();
