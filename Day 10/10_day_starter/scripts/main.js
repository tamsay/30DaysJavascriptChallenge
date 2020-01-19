// console.log(countries)

// alert('Open the console and check if the countries has been loaded')

// Exercise: LEVEL 1

const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
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



