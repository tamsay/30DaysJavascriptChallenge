for (items of countries){
    // console.log(items.name.length)
}


let header = document.querySelector('header')
let totalCountriesSpan = document.querySelector('#totalCountries')
let searchSummary = document.querySelector('#searchSummary')

let searchBar = document.querySelector('#searchBar')
let nameBtn = document.querySelector('#nameBtn')
let capitalBtn = document.querySelector('#capitalBtn')
let populationBtn = document.querySelector('#populationBtn')
let graphicalDisplayBtn = document.querySelector('#graphicalDisplayBtn')


let fullResultSection = document.querySelector('#fullResultSection');



let populationGraphicsBtn = document.querySelector('#populationGraphicBtn')
let languageGraphicsBtn = document.querySelector('#languageGraphicBtn')
let graphicsSummary = document.querySelector('#graphicsSummary')

let graphicsResult = document.querySelector('#graphicsResult')


let ownerInfo = document.querySelector('#ownerInfo')
let topArrow  = document.querySelector('#topArrow')

let createAllCountries =(element)=>{
    for(x=0; x < countries.length; x++){
        let countryDiv = document.createElement('div')
            countryDiv.id = `countryDiv${x}`;
            countryDiv.style.backgroundColor = 'pink'

        let flagDiv = document.createElement('div')
            flagDiv.id = `flagDiv${x}`
            flagDiv.className = `flagDiv`
            flagDiv.style.border = '1px solid red'
            flagDiv.style.backgroundImage = `url(${element[x].flag})`
            countryDiv.appendChild(flagDiv)

        let countryName = document.createElement('p')
            countryName.id = `countryName${x}`
            countryName.style.border = '1px solid blue'
            countryName.innerText = element[x].name
            countryDiv.appendChild(countryName)
        
        let countryCapital = document.createElement('p')
            countryCapital.id = `countryCapital${x}`
            countryCapital.style.border = '1px solid green'
            countryCapital.innerText = `Capital: ${element[x].capital}`
            countryDiv.appendChild(countryCapital)

        let languages = document.createElement('p')
            languages.id = `languages${x}`
            languages.style.border = '1px solid white'
            languages.innerText = `Languages: ${element[x].languages.join(' , ')}`
            countryDiv.appendChild(languages)
        
        let population = document.createElement('p')
            population.id = `population${x}`
            population.style.border = '1px solid yellow'
            population.innerText = `Population: ${element[x].population}`
            countryDiv.appendChild(population)

        // countryDiv.innerText = 
        fullResultSection.appendChild(countryDiv)
    }
}
createAllCountries(countries)

let sortCountriesByName =()=>{
    fullResultSection.innerText = ''
   // let sortedCountry = [];
    let sortedCountry = countries.reverse()//=>{
        // console.log(a.name)
        // console.log(b.name)
     //   return b.name - a.name
   // })
    console.log(sortedCountry)
    createAllCountries(sortedCountry);
}

nameBtn.addEventListener('click', sortCountriesByName)


