let planets = ['mercury', 'venus', 'earth', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune', 'pluto', 'moon']
let planetGravity = [3.59, 8.87, 9.81, 3.77, 25.95, 11.08, 10.67, 14.07, 0.42, 1.62]

// let solarSystem = {
//     mercury : {
//         gravity = 3.59,
//         // 'image' : //source,
//     }
// }

let body = document.querySelector('body')
body.style.backgroundImage = 'url(images/galaxy.gif)'

let h1 = document.querySelector('h1');
h1.id = 'mainTitle'
h1.style.fontFamily = 'arial'
h1.style.fontSize = '40px';
h1.style.color = 'white'
h1.style.textShadow = '1px 1px 1px #0000ff'

let headerSelector = document.querySelector('header');
headerSelector.style.textAlign = 'center'
headerSelector.style.backgroundColor = 'none'
headerSelector.style.margin = '0px 0px 20px 0px'

let inputSelector = document.querySelector('#mass');
inputSelector.style.fontFamily = 'arial'
inputSelector.style.fontSize = '20px'
inputSelector.style.fontWeight = 'bold'
inputSelector.style.height = '50px'
inputSelector.style.textAlign =  'center'

let buttonSelector = document.querySelector('button');
buttonSelector.style.fontFamily = 'arial'
buttonSelector.style.backgroundColor = 'light-blue'
buttonSelector.style.fontSize = '20px'
buttonSelector.style.fontWeight = 'bold'
buttonSelector.style.height = '50px'
buttonSelector.style.borderRadius = '15px'
buttonSelector.style.textAlign = 'center'

let mainDivSelector = document.querySelector('main');
mainDivSelector.style.display = 'flex';


let optionSelector = document.querySelector('select')
optionSelector.id = 'planetSelector'
optionSelector.style.fontFamily = 'arial'
optionSelector.style.fontSize = '20px'
optionSelector.style.fontWeight = 'bold'
optionSelector.style.height = '50px'
optionSelector.style.borderRadius = '15px'
optionSelector.style.textAlign = 'center'

let createPlanetOption=()=>{
    for(x=0; x < planets.length; x++){
        let createPlanetOption = document.createElement('option');
        createPlanetOption.id = `${planets[x]}`;
        createPlanetOption.value = `${planets[x]}`
        createPlanetOption.innerText = planets[x];
        optionSelector.appendChild(createPlanetOption);
    } 
}
createPlanetOption()

let mainImageDiv = document.querySelector('.flex-container');
mainImageDiv.style.display = 'flex'
mainImageDiv.style.flexDirection = 'row'
mainImageDiv.style.backgroundColor = 'rgba(255,255,255,0.1)'
mainImageDiv.style.width = '100%'
mainImageDiv.style.justifyContent = 'center'

let createDescriptionDiv=()=>{
    let descriptionDiv = document.querySelector('.description')
    descriptionDiv.style.display = 'flex'
    descriptionDiv.style.flexDirection = 'column'
    descriptionDiv.style.justifyContent = 'center'
    descriptionDiv.style.alignItems = 'center'
    descriptionDiv.style.color = 'white'
    descriptionDiv.style.fontSize = '50px'
    descriptionDiv.style.width = '100%'

    return descriptionDiv;
}


let imageSelector = document.querySelector('.image');
imageSelector.style.backgroundColor = 'green'
imageSelector.style.width = '70%'

let planetImage = document.querySelector('.planet-image')
planetImage.style.width = '100%'



let descriptionParagraph = document.createElement('p');
descriptionParagraph.id = 'descriptionParagraph';
descriptionParagraph.innerText = 'The Weight of the object on: ';
descriptionParagraph.style.fontSize = '30px'

let planetSpan = document.createElement('span');
planetSpan.id = 'planetSpan'
descriptionParagraph.appendChild(planetSpan)


let resultDiv = document.createElement('div')
resultDiv.id = 'resultDiv'
resultDiv.style.display = 'flex'
resultDiv.style.justifyContent = 'center'
resultDiv.style.alignItems = 'center'
resultDiv.style.backgroundColor = 'red'
resultDiv.style.borderRadius = '100px'
resultDiv.style.width = '200px';
resultDiv.style.height = '200px';
resultDiv.innerText = 'red yana aiki'

resultDiv.style.fontSize = '60px'
resultDiv.style.textAlign = 'center'


let calculateWeight =()=>{

   buttonSelector.addEventListener('click', ()=>{
    let descriptionDiv = createDescriptionDiv();
    descriptionDiv.appendChild(descriptionParagraph);
    descriptionDiv.append(resultDiv);

    let mass = inputSelector.value;
    let planetType = optionSelector.value;
    let weight;
    let image = document.querySelector('.image')
    let description = document.querySelector('#descriptionParagraph')
    planetSpan.innerText = `${optionSelector.value}`;

    if(planetType === "none" || mass === ''){
        let resultDiv = document.querySelector('#resultDiv');

        image.style.display = 'none'
        description.style.display = 'none'
        resultDiv.style.display = 'none'
        resultDiv.style.display = 'flex'
        resultDiv.style.justifyContent = 'center'
        resultDiv.style.alignItems = 'center'
        resultDiv.style.backgroundColor = 'rgba(255,255,255,0.1)'
        resultDiv.style.borderRadius = '20px'
        resultDiv.style.width = '75%';
        resultDiv.style.height = '200px';
        if(mass === ''){
            resultDiv.innerText = 'Mass Is Required';
        }
        else{
            resultDiv.innerText = 'You did not select a planet';
        }
    }
    else{
        image.style.display = 'block'
        description.style.display = 'block'

        resultDiv.style.display = 'flex'
        resultDiv.style.justifyContent = 'center'
        resultDiv.style.alignItems = 'center'
        resultDiv.style.backgroundColor = 'rgba(255,255,255,0.1)'
        resultDiv.style.borderRadius = '100px'
        resultDiv.style.width = '200px';
        resultDiv.style.height = '200px';

        
        switch(true){
            case (planetType === 'mercury') : 
             weight = mass * planetGravity[0];
            console.log('mercury selected', weight)
            resultDiv.innerText = weight.toFixed(0);
            break;
            
            case (planetType === 'venus') : 
             weight = mass * planetGravity[1];
            console.log('venus selected', weight)
            resultDiv.innerText = weight.toFixed(0);
    
            break;
            
    
            default:
             weight = mass * 1000;
            console.log('others selected', weight);
            resultDiv.innerText = weight.toFixed(0);
    
        }
    }
    
   });
   
   
}
calculateWeight();


/**
weight = mg

F = G((Mm)/r2)

Where

F is the gravitational force between two objects,
G is the Gravitational Constant (6.674×10-11 Newtons x meters2 / kilograms2),
M is the planet's mass (kg),
m is your mass (kg), and
r is the distance (m) between the centers of the two masses (the planet's radius).

 */
