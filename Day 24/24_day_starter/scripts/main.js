// console.log(countries)
// alert('Open the console and check if the countries has been loaded')

let body = document.querySelector('body')
body.style.backgroundImage = 'url(images/galaxy.gif)'

let h1 = document.querySelector('h1');
h1.id = 'mainTitle'

let headerSelector = document.querySelector('header');
headerSelector.style.display = 'flex'
headerSelector.style.flexDirection = 'column'
headerSelector.style.backgroundColor = 'white'

let inputSelector = document.querySelector('#mass');
let buttonSelector = document.querySelector('button');

let mainDivSelector = document.querySelector('main');
mainDivSelector.style.display = 'flex';


let optionSelector = document.querySelector('select')

let mainImageDiv = document.querySelector('.flex-container');
mainImageDiv.style.display = 'flex'
mainImageDiv.style.flexDirection = 'row'

let descriptionDiv = document.querySelector('.description')
descriptionDiv.style.color = 'white'
descriptionDiv.style.fontSize = '50px'

/**
F = G((Mm)/r2)

Where

F is the gravitational force between two objects,
G is the Gravitational Constant (6.674×10-11 Newtons x meters2 / kilograms2),
M is the planet's mass (kg),
m is your mass (kg), and
r is the distance (m) between the centers of the two masses (the planet's radius).

 */
