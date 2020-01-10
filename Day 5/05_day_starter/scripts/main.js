console.log(countries)
// alert('Open the browser console whenever you work on JavaScript')
// alert('Open the console and check if the countries has been loaded')
// Question 1
let emptyArray = [];
// Question 2
let filledArray = [1,2,3,"tope", true, false, [], {}];
// Question 3
let filledArrayLength = filledArray.length;
// Question 4
let filledArrayItems = () =>{
    console.log(`first array item is: ${filledArray[0]}`);
    console.log(`middle array item is: ${filledArray[filledArrayLength/2]}`);
    console.log(`last array item is: ${filledArray[filledArrayLength - 1]}`);
}
// filledArrayItems();

// Question 5
let mixedDataTypes = [1,2,3,"tope", true, false, [], {}];
let secondArrayLength = mixedDataTypes.length;
// Question 6
let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
// Question 7
console.log(itCompanies);
// Question 8
console.log(itCompanies.length);
// Question 9
let companyList = () =>{
    console.log(`first company in array is: ${itCompanies[0]}`);
    console.log(`middle company in array is: ${itCompanies[Math.floor(itCompanies.length/2)]}`);
    console.log(`last company in array is: ${itCompanies[itCompanies.length - 1]}`);
}
// companyList();
// Question 10 - method 1
let companyDisplay = ()=>{
    for(x=0; x<itCompanies.length; x++){
        console.log(itCompanies[x]);
    }
}
// companyDisplay();
// method 2
itCompanies.forEach(item=>{
    // console.log(item);
})
// Question 11
itCompanies.forEach(item=>{
  //  console.log(item.toUpperCase());
})
// Question 12
console.log(`${itCompanies.join(', ')} are big IT Companies`);
// Question 13
let companyCheck = (name)=>{
    let check = itCompanies.includes(name);
    check ? console.log(name):console.log('company not found')
}
// companyCheck("Apples")
// Question 14
let paraArrayMatch = [];
let paraArrayUnmatch = [];
// method 1
let paraFilter = ()=>{
    let regexTest = /o{2}/g;
    for(x=0; x < itCompanies.length; x++){
       // let result = regexTest.test(itCompanies[x]);
         let result2 = (itCompanies[x]).match(regexTest);
           result2 ? paraArrayMatch.push(itCompanies[x]) : paraArrayUnmatch.push(itCompanies[x]);
    }
    console.log(paraArrayUnmatch);
    console.log(paraArrayMatch);
    console.log(`this is the array without oo : ${paraArrayUnmatch.join(', ')}`);

}
 // paraFilter();

 // method 2
let paraFilter2 = ()=>{
    itCompanies.map(items=>{
        let res = items.match(/o{2}/gi);
        res ? paraArrayMatch.push(items) : paraArrayUnmatch.push(items);
    })
    console.log(paraArrayUnmatch);
    console.log(paraArrayMatch);
    console.log(`this is the array without oo : ${paraArrayUnmatch.join(', ')}`); 
}
// paraFilter2();

// method 3 - using the filter method.
let companyFilter = ()=>{
    let result = itCompanies.filter(item=>{
        return item.includes("oo");
    });
    console.log(result);
}
// companyFilter();

// Exercise 15
let companySort = ()=>{
    let result = itCompanies.sort();
    console.log(result);
}
// companySort();
// Exercise 16
let companyReverse = ()=>{
    let result = itCompanies.reverse();
    console.log(result);
}
// companyReverse();
// Exercise 17
let sliceFirstThree = ()=>{
    let result = itCompanies.slice(0,3)
    console.log(result);
}
// sliceFirstThree();
// Exercise 18
let sliceLastThree = ()=>{
    let result = itCompanies.slice(-3)
    console.log(result);
}
// sliceLastThree();
// Exercise 19
let sliceMiddle = ()=>{
    let midpoint = Math.floor(itCompanies.length/2);
    let result = itCompanies.slice(midpoint, midpoint+1);
    console.log(result);
    console.log(itCompanies);
}
// sliceMiddle();
// Exercise 20
let removeFirst =()=>{
    let result = itCompanies.shift();
    console.log(result)
    console.log(itCompanies);
}
// removeFirst()
//Exercise 21
let removeMiddle = ()=>{
    let midpoint = Math.floor(itCompanies.length/2);
    let result = itCompanies.splice(midpoint, 1);
    console.log(result);
    console.log(itCompanies);
}
// removeMiddle();
// Exercise 22
let removeLast = ()=>{
    let result = itCompanies.pop();
    console.log(result);
    console.log(itCompanies);
}
// removeLast();
// Exercise 23 - method 1
let removeAll = ()=>{
    while (itCompanies.length > 0){
            let result = itCompanies.pop();
            console.log(result);
            console.log(itCompanies);
    }
    console.log(`The final result is: ${itCompanies}`);
}
// removeAll();
// method 2
let removeAll2 = ()=>{
            let result = itCompanies.splice(0);
    console.log(`The final result is: ${itCompanies}`);
}
// removeAll2();
// method 3 not efficient
let removeAll3 = ()=>{
    let result = itCompanies.filter(items=>{
        return;
    });
console.log(`The final result is: ${result}`);
}
// removeAll3();
// method 4
let removeAll4 = ()=>{
    do {
        itCompanies.pop();
    }while(itCompanies.length > 0)
console.log(`The final result is: ${itCompanies}`);
}
// removeAll4();
// Exercise 24
console.log(webTechs);
// Exercise 25
let textToArray = ()=>{
    let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';
    let regexTest = /[\.,]/g;
    let result = text.replace(regexTest, "");
    console.log(result);
    let textArray = result.split(" ");
    console.log(textArray);
}
// textToArray();
// Exercise 26
let shoppingCart = ()=>{
    const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
    shoppingCart.unshift('Meat');
    shoppingCart.push('Sugar');
    shoppingCart.splice(4,1)
    shoppingCart.splice(3,1, 'Green Tea')
    // let regexTest = /\bTea/g;
    // console.log(shoppingCart.join(' ').replace(regexTest, 'Milo'));
    console.log(shoppingCart);
}
// shoppingCart();
// Exercise 27
let countryCheck = ()=>{
    let result = countries.includes('Ethiopia');

    result ? console.log('ETHIOPIA') : countries.push('Ethiopia');
}
// countryCheck();
// Exercise 28
let webTechCheck = ()=>{
    let result = webTechs.includes('Sass');

    result ? console.log('Sass is a CSS preprocess') : webTechs.push('Sass');
    console.log(webTechs);
}
// webTechCheck();
// Exercise 29
let concatenate = ()=>{
    const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
    const backEnd = ['Node','Express', 'MongoDB']
    let fullStack = frontEnd.concat(backEnd);
    console.log(fullStack)
}
// concatenate();
// Exercise 30
let ages = ()=>{
    const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
    let result1 = ages.sort((a,b)=>{
        return a - b;
    })

    console.log(`The sorted array in ascending order is: ${result1}`);
    console.log(`The min age is: ${result1[0]} while the max age is: ${result1[ages.length-1]}`);

    if (result1.length%2 == 0){
        medianAge = ((result1[(result1.length/2) - 1]) + (result1[result1.length/2]))/2
    }
    else{
        medianAge = result1[Math.floor(result1.length/2)]/2;
    }
    console.log(`The median age is: ${medianAge}`);

    let sum = ages.reduce((arr, acc) =>{
        return arr + acc;
    },0);

    console.log(`The average age is: ${sum/ages.length}`);
    console.log(`The age range is ${(result1[ages.length-1]) - (result1[0])}`);

    console.log(`The min - average value is: ${Math.abs(((result1[0]) - (sum/ages.length)))}`);
    console.log(`The max - average value is: ${(result1[ages.length-1]) - (sum/ages.length)}`);
}
// ages();

// Exercise 31
let country = ()=>{
    let countrySlice = countries.slice(0, 10);
    console.log(countrySlice);

    if (countries.length%2 == 0){
        middleCountries = [(countries[(countries.length/2) - 1]) , (countries[countries.length/2])]
    }
    else{
        middleCountries = countries[Math.floor(countries.length/2)];
    }
    console.log(`The middle country/countries is/are: ${middleCountries}`);
    console.log(countries.indexOf(middleCountries));
    
    if (countries.length%2 == 0){
        let firstHalf = countries.slice(0, 96);
        let secondHalf = countries.slice(97, countries.length)
        console.log('The first half is: ',firstHalf);
        console.log('The second half is: ',secondHalf);
    }
    else{
        countries.push('Nigeria');
        countries.sort();
        let firstHalf = countries.slice(0, 97);
        let secondHalf = countries.slice(97, countries.length)
        console.log('The first half is: ',firstHalf);
        console.log('The second half is: ',secondHalf);
    }
}
country();








