// console.log(countries.length)
// alert('Open the console and check if the countries has been loaded')

let body = document.createElement('body')

let h1 = document.querySelector('h1')
let h2 = document.querySelector('h2')

let header = document.querySelector('#header');
header.style.display = 'block';
header.style.textAlign = 'center'
// header.style.backgroundImage = 'url(images/globe-2.jpg)';

let btnGroup = document.querySelectorAll('.button');
btnGroup.forEach(element=>{
    element.style.width = 'fit-content'
    element.style.fontSize = '20px'
    element.style.fontFamily = 'arial'
    element.style.backgroundColor = 'pink'
})

let resultDisplay = document.querySelector('#resultDisplay')
resultDisplay.style.backgroundColor = 'green'
resultDisplay.style.height = 'auto'
resultDisplay.style.display = 'flex'
resultDisplay.style.flexWrap = 'wrap'


countries.forEach((element, index)=>{
    let countrySpan = document.createElement('span');
    countrySpan.id = `countrySpan${index}`;
    countrySpan.style.backgroundColor = 'orange'
    countrySpan.style.margin = '10px'
    countrySpan.style.padding = '5px'
    countrySpan.style.width = '6em'
    countrySpan.style.height = '6em'
    countrySpan.innerText = element.toUpperCase();
    countrySpan.style.fontFamily = 'arial'
    countrySpan.style.fontWeight = 'bold'
    resultDisplay.appendChild(countrySpan);
})

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
        console.log(filteredList);

        resultDisplay.innerText = '';
        filteredList.forEach((element, index)=>{
            let countrySpan = document.createElement('span');
            countrySpan.id = `countrySpan${index}`;
            countrySpan.style.backgroundColor = 'orange'
            countrySpan.style.margin = '10px'
            countrySpan.style.padding = '5px'
            countrySpan.style.width = '6em'
            countrySpan.style.height = '6em'
            countrySpan.innerText = element.toUpperCase();
            countrySpan.style.fontFamily = 'arial'
            countrySpan.style.fontWeight = 'bold'
            resultDisplay.appendChild(countrySpan);
        })
 
        })
    })

anyWordBtn.addEventListener('click', ()=>{
    let input = document.querySelector('#textInput')

    input.addEventListener('input', ()=>{
        let keyword = input.value.toLowerCase();
        let len = keyword.length
        let filteredList = []
        let regex = new RegExp(keyword);

        countries.map(element=>{
            if(element.toLowerCase().match(regex)){
                filteredList.push(element)
            }
        })
        resultDisplay.innerText = '';
        filteredList.forEach((element, index)=>{
            let countrySpan = document.createElement('span');
            countrySpan.id = `countrySpan${index}`;
            countrySpan.style.backgroundColor = 'orange'
            countrySpan.style.margin = '10px'
            countrySpan.style.padding = '5px'
            countrySpan.style.width = '6em'
            countrySpan.style.height = '6em'
            countrySpan.innerText = element.toUpperCase();
            countrySpan.style.fontFamily = 'arial'
            countrySpan.style.fontWeight = 'bold'
            resultDisplay.appendChild(countrySpan);
        })
        })
    })