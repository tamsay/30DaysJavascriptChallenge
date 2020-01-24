 console.log(countries)
// alert('Open the console and check if the countries has been loaded')

// Exercise LEVEL 1
// Question 1 
// console.table(countries);

// Question 2
countries.forEach(element => {
 //   console.table(element)
});

// Question 3
console.group("kizz")
console.log(countries)
console.log('baba lemi si won');
console.log('g worldwide')
console.groupEnd();

// Exercise: LEVEL 2

// Question 1
// console.assert(10 < 2, 'assert reached')

// Question 2
console.warn('scalpersticket did me bad')

// Question 3
console.error('I\'m in financial pain')

// Exercise: LEVEL 3

console.time('while loop')
let x = 0;
while (x < 10) {
    console.log(x);
    x++;
}
console.timeEnd('while loop');

console.time('for loop')
for(y=0; y<10; y++){
    console.log(y);
}
console.timeEnd('for loop')

console.time('for-of loop')
let z = [1,2,3,4,5,6,7,8,9,10]
for(y of z){
    console.log(y);
}
console.timeEnd('for-of loop')

console.time('forEach loop')
let arr = [1,2,3,4,5,6,7,8,9,10]
arr.forEach(item=>{
    console.log(item);
});
console.timeEnd('forEach loop')
