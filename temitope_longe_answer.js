const products = [
    {product: 'banana', price:3},
    {product: 'mango', price:6},
    {product: 'potato', price:''},
    {product: 'avocado', price:8},
    {product: 'coffee', price:10},
    {product: 'tea', price:''}
]

// 1. Print the price of each product using forEach

products.forEach(element => {
    console.log(element.price)
});

// 2. Print the product items as follows using forEach

products.forEach(element => {
    if(element.price === ''){
       let price = 'unknown';
        console.log(`The price of ${element.product} is ${price}.`)
    }
    else{
        console.log(`The price of ${element.product} is ${element.price} euros.`)
    }
});

// 3. Calculate the sum of all the prices using forEach

let totalSum = 0;
products.forEach(element=>{
    totalSum += Number(element.price);
})
console.log(`The sum of all the prices using forEach is: ${totalSum}`)

// 4. Create an array of prices using map and store it in a variable prices

let prices = products.map(element=>{
    return element.price;
})
console.log(`The array of prices using map is: ${prices}`);

// 5. Filter products with prices

let filteredProducts = products.filter(element=>{
    return element.price > 0;
});
console.log('Filtered List of products with valid price include:', filteredProducts)

// 6. Use method chaining to get the sum of the prices (map, filter, reduce)

let sum = products.filter(element=> element.price > 0).map(element=> element.price).reduce((acc, arr)=> arr + acc ,0);
console.log(`The sum of the product prices with method chaining is: ${sum}`);

// 7. Calculate the sum of all the prices using reduce only

let reducedSum = products.reduce((acc,arr)=> Number(arr.price) + acc, 0);
console.log(`The sum of all the prices using reduce only is: ${reducedSum}`);

// 8. Find the first product which doesn't have a price value
let firstFind = products.find(element=>{
    return element.price === '';
});
console.log(firstFind);
console.log(`The first product without a price value is:  ${firstFind.product}`);

// 9. Find the index of the first product which does not have price value
let productIndex = products.findIndex(element=>{
    return element.price === '';
});
console.log(`The index of the first product without a price value is: ${productIndex}`);

// 10. Check if some products do not have a price value
let someProduct = products.some(element=> element.price === '');
console.log(`Check for products without price value is: ${someProduct}`)

// 11. Check if all the products have price value
let everyProduct = products.every(element=> typeof(element.price) === 'number');
console.log(`Check for products all having a price value is: ${everyProduct}`)

// 12. Explain the difference between filter, find and findindex
/**
 * 
 * filter() creates a new array with elements based on the result of the function that is executed within the method. It does not modify the existing arrary. 
 * 
 * 
 * Find returns the first occurence of an array-element/item that satisfies the condition that is passed within the method. It returns only a single element and returns undefined when the search turns out negative. 
 * 
 * 
 * FindIndex is related to the find method. The difference is that it returns the index of the first occurence of an array-item that passes the test supplied in the method. If the test result is false (i.e. element is not found) it returns -1. It does not change/modify the original array.
 * 
 */


// 13. Write a function which generate random id
let alphanum = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
let genRandomId =(num = 6)=>{
    let result = '';
    for(x=0; x < num; x++){
        let random = Math.ceil(Math.random()*alphanum.length);
        result += alphanum.charAt(random);
    }
    console.log(`Random Id generated is: ${result}`)
}
genRandomId();

// 14. Write a function called checkDataTypes. It takes an array and a data type. It returns true if the array has the same data types
const numbers = [1,3,4];
const names = ['Asab', '30DaysOfJavascript'];
const bools = [true, false, true, true, false];
const mixedData = ['Asab', 'JS', true, 2019, {name: 'Asab', lang: 'JS'}];
const obj = [{name: 'Asab', lang: 'JS'}];

let checkDataTypes =(arr, type)=>{
    let result = arr.every(element=>{
        return typeof(element) === type;
    });
    return result;
}
console.log(checkDataTypes(numbers, 'number'))
console.log(checkDataTypes(numbers, 'string'))
console.log(checkDataTypes(names, 'string'))
console.log(checkDataTypes(bools, 'boolean'))
console.log(checkDataTypes(mixedData, 'boolean'))
console.log(checkDataTypes(obj, 'object'))


// 15. In English language some words come more often than others to a sentence. Write a function called mostFrequentWords. It takes a sentence or a paragraph as a parameter and return an array of objects. The object is the word and its number of occurence in the paragraph or in the sentence.

let paragraph = 'In English language some words come more often than others to a sentence. Write a function called mostFrequentWords. It takes a sentence or a paragraph as a parameter and return, an array of objects. The object is the word and its number of occurence in the paragraph or in the sentence'

let mostFrequentWords = (input) =>{
    let wordArray = input.replace(/[,.]/g, '').split(' ');

    let wordSet = new Set(wordArray);
    let setArray = [...wordSet];

    let result = [];

    for (x = 0; x < setArray.length; x++){
        let count = 0;
        for (y = 0; y < wordArray.length; y++){
            if (setArray[x] === wordArray[y]){
                count++;
            }
        }
        let resultObject = {
            [setArray[x]]: count
        };

        result.push(resultObject)
    }
    return result;
}
console.log(mostFrequentWords(paragraph));

