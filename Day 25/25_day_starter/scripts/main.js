// console.log(countries)
// alert('Open the console and check if the countries has been loaded')

let countriesArray = [];
let languages = []; 

for(element of countries){
    countriesArray.push([element.name, element.population])
    languages.push(element.languages)
}
let languageArray = languages.flat(Infinity);

let sortedCountries = countriesArray.sort((a,b)=>{
    return b[1] - a[1]
});

let languageSet = new Set(languageArray)
let languageCount = [];

[...languageSet].map(item=>{
    let count = 0;
    for(element of languageArray){
        if(item === element){
            count = count + 1;
        }
    }
    languageCount.push([item, count]);
})
let sortedLanguage = languageCount.sort((a,b)=>{
    return b[1] - a[1];
})

let populationButton = document.querySelector('.population');
let languageButton = document.querySelector('.languages')

let headerGroup = document.querySelector('#countries')
headerGroup.style.display = 'block'
headerGroup.style.textAlign = 'center'
headerGroup.style.backgroundColor = '#b8ebff'
headerGroup.style.padding = '2px'
headerGroup.style.margin = '5px'

let subtitle = document.querySelector('.subtitle');
subtitle.innerText = 'Currently, we have 250 Countries'
subtitle.style.color = 'black'
subtitle.style.margin = '5px'
subtitle.style.fontSize =  '20px'

let h2 = document.querySelector('h2');
h2.style.color = 'brown'
h2.style.fontWeight =  'bold'
h2.style.margin  = '5px'
h2.style.fontWeight = 'bold'
h2.style.fontSize  = '40px'

let mainDiv = document.querySelector('.wrapper');
mainDiv.style.display = 'block'
mainDiv.style.textAlign = 'center'
mainDiv.style.margin = '10px 5px'
mainDiv.style.padding = '1px 0px'

let script = document.querySelector('script');
let body = document.querySelector('body')

let graphButtons = document.querySelector('.graph-buttons')
graphButtons.style.textAlign = 'center'
graphButtons.style.margin = '10px 0px 0px 0px'
graphButtons.style.padding = '10px'

let graphTitle = document.querySelector('.graph-title')
graphTitle.style.backgroundColor = '#b8ebff'
graphTitle.style.margin = '0px 0px 10px 0px'
graphTitle.style.padding = '5px'

let buttons = document.querySelectorAll('button');
buttons.forEach(element=>{
    element.style.fontSize = '30px'
    element.style.fontWeight = 'bold'
    element.style.margin = '0px 10px'
    element.style.backgroundColor = 'black'
    element.style.color  = 'white'
    element.style.textTransform = 'uppercase'
})

let number = 10;

let topPopulation =(number)=>{

    graphTitle.innerText = `The ${number} most populated countries in the world`
    let chart = document.createElement('div');
    chart.style.display = 'block'
    chart.id = 'populationDiv';
    chart.style.backgroundColor = 'black'
    chart.style.color = 'white'
    chart.style.padding = '5px';
    
    let topPopulation = (sortedCountries.slice(0,number))
    let maxPopulation = topPopulation[0][1];

    for(x=0; x < topPopulation.length; x++){
        let width = (topPopulation[x][1]/maxPopulation)*100;

        let resultDiv = document.createElement('div')
        resultDiv.id = `resultDiv${x}`;
        resultDiv.style.margin = '10px'
        resultDiv.style.padding = '0px'
        resultDiv.style.display = 'grid'
        resultDiv.style.gridTemplateColumns = '2fr 5fr 1fr'
        resultDiv.style.alignItems = 'center'

        let country = document.createElement('p');
        country.id = `country${x}`
        country.style.display = 'flex'
        country.style.margin = '0px'
        country.innerText = topPopulation[x][0];
        country.style.fontFamily = 'arial'
        country.style.fontSize = '15px'
        country.style.height = '30px'
        country.style.fontWeight = 'bold'
        country.style.alignItems = 'center'
        resultDiv.appendChild(country)

        let graph = document.createElement('p')
        graph.id = `graph${x}`
        graph.style.backgroundColor = 'rgba(255,255,255,0.1)'
        graph.style.display = 'flex'
        graph.style.height = '30px'
        graph.style.margin = '0px 20px'
        graph.style.padding = '0px'

        let graphSpan = document.createElement('span')
        graphSpan.id = `graphSpan${x}`
        graphSpan.style.width = `${width}%`
        graphSpan.style.backgroundColor = '#b8ebff'
        graphSpan.style.borderRadius = '5px'
        
        graph.appendChild(graphSpan);

        resultDiv.appendChild(graph);

        let population = document.createElement('p');
        population.id = `population${x}`
        population.style.display = 'flex'
        population.innerText = topPopulation[x][1]
        population.style.fontFamily = 'arial'
        population.style.fontSize = '15px'
        population.style.fontWeight = 'bold'
        population.style.margin = '0px'
        population.style.height = '30px'
        population.style.justifyContent = 'center'
        population.style.alignItems = 'center'
        resultDiv.appendChild(population)

        chart.appendChild(resultDiv)
    }
    return (chart);
}
let graphDisplay = document.querySelector('#stat')
graphDisplay.appendChild(topPopulation(number));

let topLanguages =(number)=>{

    let chart = document.createElement('div');
    chart.style.display = 'none'
    chart.id = 'languagesDiv';
    chart.style.backgroundColor = 'black'
    chart.style.color = 'white'
    chart.style.padding = '5px';
    
    let topLanguages = (sortedLanguage.slice(0,number))
    let maxLanguage = topLanguages[0][1];

    for(x=0; x < topLanguages.length; x++){
        let width = (topLanguages[x][1]/maxLanguage)*100;

        let resultDiv = document.createElement('div')
        resultDiv.id = `resultDiv${x}`;
        resultDiv.style.margin = '10px'
        resultDiv.style.padding = '0px'
        resultDiv.style.display = 'grid'
        resultDiv.style.gridTemplateColumns = '2fr 5fr 1fr'
        resultDiv.style.alignItems = 'center'

        let language = document.createElement('p');
        language.id = `language${x}`
        language.style.display = 'flex'
        language.style.margin = '0px'
        language.innerText = topLanguages[x][0];
        language.style.fontFamily = 'arial'
        language.style.fontSize = '15px'
        language.style.height = '30px'
        language.style.fontWeight = 'bold'
        language.style.alignItems = 'center'
        resultDiv.appendChild(language)

        let graph = document.createElement('p')
        graph.id = `graph${x}`
        graph.style.backgroundColor = 'rgba(255,255,255,0.2)'
        graph.style.display = 'flex'
        graph.style.height = '30px'
        graph.style.margin = '0px 20px'
        graph.style.padding = '0px'

        let graphSpan = document.createElement('span')
        graphSpan.id = `graphSpan${x}`
        graphSpan.style.width = `${width}%`
        graphSpan.style.backgroundColor = 'brown'
        graphSpan.style.borderRadius = '5px'
        
        graph.appendChild(graphSpan);

        resultDiv.appendChild(graph);

        let count = document.createElement('p');
        count.id = `count${x}`
        count.style.display = 'flex'
        count.innerText = topLanguages[x][1]
        count.style.fontFamily = 'arial'
        count.style.fontSize = '15px'
        count.style.fontWeight = 'bold'
        count.style.margin = '0px'
        count.style.height = '30px'
        count.style.justifyContent = 'center'
        count.style.alignItems = 'center'
        resultDiv.appendChild(count)

        chart.appendChild(resultDiv)
    }
    return (chart);
}
 // topTenLanguages()
 graphDisplay.appendChild(topLanguages(number));

populationButton.addEventListener('click', ()=>{
    let selector = document.querySelector('#populationDiv')
    let languagesSelector = document.querySelector('#languagesDiv')
    graphTitle.innerText = `The ${number} most populated countries in the world`
    
    if(selector.style.display === 'none' && languagesSelector.style.display === 'block'){
        languagesSelector.style.display = 'none'
        selector.style.display = 'block'
    }
})

languageButton.addEventListener('click', ()=>{
    let selector = document.querySelector('#languagesDiv')
    let populationSelector = document.querySelector('#populationDiv')
    graphTitle.innerText = `The ${number} most spoken languages in the world`

    if(selector.style.display === 'none' && populationSelector.style.display === 'block'){
       populationSelector.style.display = 'none'
       selector.style.display = 'block'
    }
})
