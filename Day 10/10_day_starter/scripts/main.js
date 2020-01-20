// console.log(countries)

// alert('Open the console and check if the countries has been loaded')

// Exercise: LEVEL 1

let a = [1, 2, 3, 4, 5]
let b = [3, 4, 5, 6]
const countries2 = ['Finland', 'Sweden', 'Norway']

// Question 1
let emptySet = new Set();
console.log('this is an empty set', emptySet)

// Question 2
let createSetTen = ()=>{
    let setTen = new Set();
    for(x=0; x<=10; x++){
        setTen.add(x);
    }
    console.log('set of ten is:', setTen)
    return setTen;
}
// createSetTen();

// Question 3
let removeSetElement = ()=>{
    let remove = [3,4,5,6];
    let setArray = new Set(remove);
    let removeSet = setArray.delete(5);
    console.log(setArray)
}
// removeSetElement();

// Question 4
let clearSet = ()=>{
    let clear = createSetTen();
    console.log(clear);
    console.log(clear.clear(), clear);
}
// clearSet();

// Question 5
let stringSet = ()=>{
    let stringArray = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'];
    let stringSet = new Set(stringArray);
    console.log(stringSet);
}
// stringSet();

// Question 6
let countryMap = ()=>{
    let mapCountry = [
        ['Nigeria', countries2[0].length],
        ['Ghana', 5],
        ['Togo', 4]
    ]
    let countryMap = new Map(mapCountry);
    console.log(countryMap);
}
// countryMap();

// Exercise: LEVEL 2

// Question 1
let unionSet = ()=>{
    let setA = new Set(a);
    let setB = new Set(b);
    let union = new Set([...setA, ...setB]);
    console.log(union)
}
//  unionSet()

// Question 2
let intersectionSet = ()=>{
    let setA = new Set(a);
    let setB = new Set(b);
    let intersection = a.filter(item=>{
        return setB.has(item)
    })
    let result = new Set(intersection)
    console.log(result)
}
// intersectionSet();

// Question 3
    let diffSet = ()=>{

    let A = new Set(a);
    let B = new Set(b);
    let match = [];
    let unmatch = [];
    let c = a.filter(num =>{
        return !B.has(num);
        if(b.includes(num)){
           return match.push(num);
        }
        else{
           return unmatch.push(num)
        }
    })
    // console.log(c)
    let C = new Set(c)
    // let diff = new Set(unmatch);
    console.log(C)
    // console.log(diff)
}
// diffSet()

// Exercise: LEVEL 3

// Question 1
let mostSpokenLanguages=(num)=>{
    let countrySet = new Set(countries);
    console.log(countrySet);
    console.log(countries)
    let countryLanguage = [];
    for(language in countries){
        countryLanguage.push(countries[language].languages);
    }
    let allLanguageArray = (countryLanguage.join(',').split(','));
    // console.log(allLanguageArray)
    let uniqueLanguage = new Set(allLanguageArray);
    let uniqueArray = [...uniqueLanguage];
    let countIndex = uniqueArray.map(item=> uniqueArray.indexOf(item));
    // console.log(countIndex)

    // Method 1 using for method
    let resultArray = [];
    for(x=0 ; x<uniqueArray.length ; x++){
        let count = 0
        for (y=0; y < allLanguageArray.length ; y++){
            if(allLanguageArray[y] == uniqueArray[x]){
                count = count + 1;
            }
        }
        resultArray.push(count);
    }
    let langCount = [];
    for(x=0; x<resultArray.length ;x++){
        langCount.push([resultArray[x], uniqueArray[x]]);
    }
    // sort in descending
    let sortedResult = (langCount.sort((a,b)=>{
        return b[0] - a[0];
    }));
    let finalResult = sortedResult.slice(0,num);
    let finalMap = new Map(finalResult);
    let finalSet = new Set(finalResult);
    console.log(finalResult);
    console.log(finalMap);
    console.log(finalSet)

    // Method 2 - using the filter method

}
mostSpokenLanguages(3);


