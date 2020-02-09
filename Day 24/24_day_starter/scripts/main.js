let planets = ['mercury', 'venus', 'earth', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune', 'pluto', 'moon']
let planetGravity = [3.59, 8.87, 9.81, 3.77, 25.95, 11.08, 10.67, 14.07, 0.42, 1.62]

let solarSystem = {
    mercury : {
        gravity : 3.59,
        // 'image' : //source,
    },
    venus : {
        gravity : 8.87,
        // 'image' : //source,
    },
    earth : {
        gravity : 9.81,
        // 'image' : //source,
    },
    mars : {
        gravity : 3.77,
        // 'image' : //source,
    },
    jupiter : {
        gravity : 25.95,
        // 'image' : //source,
    },
    saturn : {
        gravity : 11.08,
        // 'image' : //source,
    },
    uranus : {
        gravity : 10.67,
        // 'image' : //source,
    },
    neptune : {
        gravity : 14.07,
        // 'image' : //source,
    },
    pluto : {
        gravity : 0.42,
        // 'image' : //source,
    },
    moon : {
        gravity : 1.62,
        // 'image' : //source,
    }
}

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
    planetSpan.innerText = ` ${optionSelector.value.toUpperCase()}`;

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
             weight = mass * solarSystem.mercury.gravity;
            resultDiv.innerText = `${weight.toFixed(1)}N`;
            planetImage.src = './images/mercury.png'
            break;
            
            case (planetType === 'venus') : 
             weight = mass * planetGravity[1];
            resultDiv.innerText = `${weight.toFixed(1)}N`;
            planetImage.src = './images/venus.png'
            break;
            
            case (planetType === 'earth') : 
             weight = mass * planetGravity[2];
            resultDiv.innerText = `${weight.toFixed(1)}N`;
            planetImage.src = './images/earth.png'
            break;

            case (planetType === 'mars') : 
             weight = mass * planetGravity[3];
            resultDiv.innerText = `${weight.toFixed(1)}N`;
            planetImage.src = './images/mars.png'
            break;

            case (planetType === 'jupiter') : 
             weight = mass * planetGravity[4];
            resultDiv.innerText = `${weight.toFixed(1)}N`;
            planetImage.src = './images/jupiter.png'
            break;

            case (planetType === 'saturn') : 
             weight = mass * planetGravity[5];
            resultDiv.innerText = `${weight.toFixed(1)}N`;
            planetImage.src = './images/saturn.png'
            break;

            case (planetType === 'uranus') : 
             weight = mass * planetGravity[6];
            resultDiv.innerText = `${weight.toFixed(1)}N`;
            planetImage.src = './images/uranus.png'
            break;

            case (planetType === 'neptune') : 
             weight = mass * planetGravity[7];
            resultDiv.innerText = `${weight.toFixed(1)}N`;
            planetImage.src = './images/neptune.png'
            break;

            case (planetType === 'pluto') : 
             weight = mass * planetGravity[8];
            resultDiv.innerText = `${weight.toFixed(1)}N`;
            planetImage.src = './images/pluto.png'
            break;

            case (planetType === 'moon') : 
             weight = mass * planetGravity[9];
            resultDiv.innerText = `${weight.toFixed(1)}N`;
            planetImage.src = './images/moon.png'
            break;
    
            default:
            weight = 'Something is Wrong somewhere'
            console.log('There must be a problem to get here');
            resultDiv.innerText = weight;
        }
    }
   });
}
calculateWeight();