// console.log(countries.length)
// alert('Open the console and check if the countries has been loaded')

let body = document.createElement('body')

let h1 = document.querySelector('h1')
h1.style.fontFamily = 'arial'
h1.style.fontSize = '50px'
h1.style.fontWeight = 'bold'
// h1.style.border = '1px solid red'
h1.style.color = 'white'

let h2 = document.querySelector('h2')
h2.style.fontFamily = 'arial'
h2.style.fontSize = '30px'
// h2.style.border = '1px solid green'
h2.style.color = 'white'
h2.style.margin = '0px 0px 0px 0px'

let header = document.querySelector('#header');
header.style.display = 'block';
header.style.textAlign = 'center'
header.style.border = '2px solid blue'
header.style.padding = '0px'
header.style.backgroundImage = 'url(images/globe-2.jpg)';
header.style.backgroundSize = 'cover'

let info = document.querySelector('#info');
info.style.fontWeight = 'bold'
info.style.fontSize = '20px'
info.style.color = 'white'
info.style.backgroundColor = 'rgba(0,0,0,0.3)'
info.style.margin = '0px 5px 5px 5px'
// info.style.border = '1px solid yellow'

let placeholder = document.querySelector('#placeholder');

let word = document.querySelector('#word')
word.style.color = 'red'
word.style.fontSize = '30px'
word.style.margin = '0px 5px'

let symbol = document.querySelector('#symbol')
symbol.style.fontWeight = 'bold'
symbol.style.margin = '0px 2.5px'

let countryCount = document.querySelector('#count')
countryCount.style.fontWeight = 'bold'
countryCount.style.margin = '0px 2.5px'
countryCount.style.fontSize = '30px'

let totalCountryCount = document.querySelector('#countryCount')
totalCountryCount.innerText = countries.length;
totalCountryCount.style.fontSize = '40px'
totalCountryCount.style.backgroundColor = 'rgba(30,200,12, 0.8)'
totalCountryCount.style.color = 'black'

let btnGroup = document.querySelector('#btnGroup')

let buttons = document.querySelectorAll('.button');
buttons.forEach(element=>{
    element.style.width = 'fit-content'
    element.style.fontSize = '20px'
    element.style.fontFamily = 'arial'
    element.style.backgroundColor = 'black'
    element.style.color = 'white'
    element.style.fontWeight = 'bold'
    element.style.borderRadius = '10px'
    element.style.margin = '10px'
})

let inputDiv = document.querySelector('#inputDiv')
inputDiv.style.margin = '10px 0px'
inputDiv.style.display = 'flex'
inputDiv.style.justifyContent = 'center'
inputDiv.style.alignItems = 'center'

let input = document.querySelector('#textInput')
input.style.borderRadius = '10px'
input.style.width = '50%'
input.style.height = '30px'
input.placeholder = 'Search Country'
input.style.textAlign = 'center'
input.style.margin = '5px 10px'
// input.style.backgroundColor = 'blue'

let image = document.querySelector('img')
image.style.width = '30px'
image.style.height = '30px'
image.style.margin = '5px 10px'
image.style.backgroundColor = 'red'
image.style.padding = '5px'


let resultDisplay = document.querySelector('#resultDisplay')
resultDisplay.style.backgroundColor = 'white'
resultDisplay.style.height = 'auto'
resultDisplay.style.display = 'flex'
resultDisplay.style.flexWrap = 'wrap'
resultDisplay.style.justifyContent = 'center'
resultDisplay.style.alignItems = 'center'

let inputFunction=()=>{

    input.addEventListener('input', ()=>{
        let keyword = input.value;
        let test = new RegExp(`\^${keyword.toLowerCase()}`)
        let filteredList = []

     countries.map(element=>{
            if(element.toLowerCase().match(test)){
                filteredList.push(element)
            }
        })
        placeholder.innerText = `The number of countries that begins with `
        word.innerText = keyword.toUpperCase();
        symbol.innerText = ` =>>  `
        countryCount.innerText = filteredList.length;
        
        resultDisplay.innerText = '';
        createCountries(filteredList);
        })
}
inputFunction();

let createCountries=(countriesArray)=>{
    countriesArray.forEach((element, index)=>{
        let countrySpan = document.createElement('span');
        
        countrySpan.id = `countrySpan${index}`;
        countrySpan.style.fillOpacity = '0.9'
        countrySpan.style.backgroundImage = 'url(images/map_image.jpg)'
        countrySpan.style.backgroundSize = 'cover'
        countrySpan.style.backgroundColor = 'rgba(255,255,255,0.8)'
        countrySpan.style.margin = '5px 15px'
        countrySpan.style.padding = '20px'
        countrySpan.style.width = '100px'
        countrySpan.style.height = '100px'
        countrySpan.style.display = 'flex'
        countrySpan.style.justifyContent = 'center'
        countrySpan.style.alignItems = 'center'
        countrySpan.style.textAlign = 'center'
        countrySpan.innerText = element.toUpperCase();
        countrySpan.style.fontFamily = 'arial'
        countrySpan.style.fontWeight = 'bold'
        countrySpan.style.fontSize = '15px'
        countrySpan.style.color = 'black'
        resultDisplay.appendChild(countrySpan);
    })    
}
createCountries(countries)

let startingWordBtn = document.querySelector('#startingWord')
let anyWordBtn = document.querySelector('#anyWord')
let sortBtn = document.querySelector('#sortBtn')

startingWordBtn.addEventListener('click', ()=>{
    let input = document.querySelector('#textInput')

    input.addEventListener('input', ()=>{
        let keyword = input.value;
        let test = new RegExp(`\^${keyword.toLowerCase()}`)
        let filteredList = []

     countries.map(element=>{
            if(element.toLowerCase().match(test)){
                filteredList.push(element)
            }
        })
        placeholder.innerText = `The number of countries that begins with `
        word.innerText = keyword.toUpperCase();
        symbol.innerText = ` =>>  `
        countryCount.innerText = filteredList.length;

        resultDisplay.innerText = '';
        createCountries(filteredList);
        })
    })

anyWordBtn.addEventListener('click', ()=>{
    let input = document.querySelector('#textInput')

    input.addEventListener('input', ()=>{
        let keyword = input.value.toLowerCase();
        let filteredList = []
        let regex = new RegExp(keyword);

        countries.map(element=>{
            if(element.toLowerCase().match(regex)){
                filteredList.push(element)
            }
        })

        placeholder.innerText = `The number of countries that contains `
        word.innerText = keyword.toUpperCase();
        symbol.innerText = ` =>>  `
        countryCount.innerText = filteredList.length;
        
        resultDisplay.innerText = '';
        createCountries(filteredList);
        })
    })

sortBtn.addEventListener('click', ()=>{
    let countryList = document.querySelectorAll('#resultDisplay > span')
    let sortedList = [...countryList].reverse();
    let sortedArray = sortedList.map((arr)=>{
        return  arr.textContent;
    })
    // console.log(sortedArray);
    resultDisplay.innerText = '';
     createCountries(sortedArray);
})