let body = document.querySelector('body')
let header = document.querySelector('header')
let totalCountriesSpan = document.querySelector('#totalCountries')
    totalCountriesSpan.innerText = `${countries.length}`
let searchSummary = document.querySelector('#searchSummary')

let searchBar = document.querySelector('#searchBar')
let nameBtn = document.querySelector('#nameBtn')
let capitalBtn = document.querySelector('#capitalBtn')
let populationBtn = document.querySelector('#populationBtn')
let graphicalDisplayBtn = document.querySelector('#graphicalDisplayBtn')

let fullResultSection = document.querySelector('#fullResultSection');

let populationGraphicsBtn = document.querySelector('#populationGraphicsBtn')
let languageGraphicsBtn = document.querySelector('#languageGraphicsBtn')
let graphicsSummary = document.querySelector('#graphicsSummary')

let graphicsResult = document.querySelector('#graphicsResult')

let ownerInfo = document.querySelector('#ownerInfo')
let topArrow  = document.querySelector('#topArrow')

let displayGraph=(array)=>{
    graphicsResult.innerText = ''

    array.sort((a,b)=>{
        return b.population - a.population
    })
    let totalPopulation = countries.reduce((acc, arr)=>{
        return arr.population + acc;
    },0)
   
    let totalPopDiv = document.createElement('div')
    totalPopDiv.id = 'masterPopulation'
    totalPopDiv.className = 'graphicsValue'

    let countrySpan = document.createElement('p')
    countrySpan.innerText = 'World Population'
    totalPopDiv.appendChild(countrySpan)

    let graphSpan = document.createElement('p')
    graphSpan.style.width = '100%'
    graphSpan.style.backgroundColor = 'green'
    totalPopDiv.appendChild(graphSpan)

    let sizeSpan = document.createElement('p')
    sizeSpan.innerText = `${totalPopulation}`
    totalPopDiv.appendChild(sizeSpan)

    graphicsResult.appendChild(totalPopDiv)

    for (x=0; x < array.length; x++){
        let width = (array[x].population/(totalPopulation))*100
        let totalPopDiv = document.createElement('div')
        totalPopDiv.className = 'graphicsValue'

        let countrySpan = document.createElement('p')
        countrySpan.innerText = `${array[x].name}`
        totalPopDiv.appendChild(countrySpan)

        let graphSpan = document.createElement('p')
        graphSpan.style.width = `${width}%`
        graphSpan.style.backgroundColor = 'green'
        totalPopDiv.appendChild(graphSpan)

        let sizeSpan = document.createElement('p')
        sizeSpan.innerText = `${array[x].population}`
        totalPopDiv.appendChild(sizeSpan)

        graphicsResult.appendChild(totalPopDiv)
    }
}
let displayTopTenLanguages=(array)=>{
    graphicsResult.innerText = ''

    for (x=0; x < array.length; x++){
        let totalPopDiv = document.createElement('div')
        totalPopDiv.className = 'graphicsValue'

        let countrySpan = document.createElement('p')
        countrySpan.innerText = `${array[x][0]}`
        totalPopDiv.appendChild(countrySpan)

        let graphSpan = document.createElement('p')
        graphSpan.style.width = `${array[x][1]}%`
        graphSpan.style.backgroundColor = 'green'
        totalPopDiv.appendChild(graphSpan)

        let sizeSpan = document.createElement('p')
        sizeSpan.innerText = `${array[x][1]}`
        totalPopDiv.appendChild(sizeSpan)

        graphicsSummary.innerText = 'The Top 10 Languages in the World'
        graphicsResult.appendChild(totalPopDiv)
    }
}

let createAllCountries =(element)=>{
    fullResultSection.innerText = ''

    for(x=0; x < element.length; x++){
        let countryDiv = document.createElement('div')
            countryDiv.id = `countryDiv${x}`;
            countryDiv.className = 'countryDiv'

        let flagDiv = document.createElement('div')
            flagDiv.id = `flagDiv${x}`
            flagDiv.className = `flagDiv`
            flagDiv.style.backgroundImage = `url(${element[x].flag})`
            countryDiv.appendChild(flagDiv)

        let countryName = document.createElement('p')
            countryName.id = `countryName${x}`
            countryName.className = 'countryName'
            countryName.innerText = element[x].name
            countryDiv.appendChild(countryName)
        
        let countryCapital = document.createElement('p')
            countryCapital.id = `countryCapital${x}`
            countryCapital.className = 'countryCapital'

        let countryCapitalSpan = document.createElement('span')
            countryCapitalSpan.innerText = 'Capital: '
            countryCapital.appendChild(countryCapitalSpan)
        
        let countryCapitalValue = document.createElement('span')
            countryCapitalValue.className = 'countryCapital'
            countryCapitalValue.innerText = `${element[x].capital}`
            countryCapital.appendChild(countryCapitalValue);
            countryDiv.appendChild(countryCapital)

        let languages = document.createElement('p')
            languages.id = `languages${x}`
            languages.className = 'languages'
            languages.innerText = `Languages: ${element[x].languages.join(' , ')}`
            countryDiv.appendChild(languages)
        
        let population = document.createElement('p')
            population.id = `population${x}`
            population.className = 'population'
        let populationSpan = document.createElement('span')
            populationSpan.innerText = 'Population: '
            population.appendChild(populationSpan)
        
        let populationValue = document.createElement('span')
            populationValue.className = 'population'
            populationValue.innerText = `${element[x].population}`
            population.appendChild(populationValue);
            countryDiv.appendChild(population)

        fullResultSection.appendChild(countryDiv)
    }
    displayGraph(element)
}
createAllCountries(countries)

searchBar.addEventListener('input', ()=>{
        let input = searchBar.value.toLowerCase();
        let newArray = []
        countries.filter(items=>{
            if(items.name.toLowerCase().includes(input) || items.capital.toLowerCase().includes(input) || items.languages.join(',').toLowerCase().includes(input)){
                newArray.push(items)
            } 
        })
        createAllCountries(newArray)    
        displayGraph(newArray)
        searchSummary.innerText = `${newArray.length} countries satisfied the search criteria`
})

let countName = 0;
let sortCountriesByName =()=>{
        let countryName = document.querySelectorAll('.countryName');

        if(countName%2 === 0){
            let sortedCountry = [...countryName].sort((b,a)=>{
                let nameA=a.textContent.toLowerCase(), nameB=b.textContent.toLowerCase()
                if (nameA < nameB) //sort string ascending
                    return -1 
                if (nameA > nameB)
                    return 1
                return 0 //default return value (no sorting)
            })
        fullResultSection.innerText = ''
        for (x=0; x < sortedCountry.length; x++){
            fullResultSection.appendChild(sortedCountry[x].parentElement)
        }
        countName++;
        }
        else{
            let sortedCountry = [...countryName].sort((a,b)=>{
                let nameA=a.textContent.toLowerCase(), nameB=b.textContent.toLowerCase()
                if (nameA < nameB) //sort string ascending
                    return -1 
                if (nameA > nameB)
                    return 1
                return 0 //default return value (no sorting)
            })
        fullResultSection.innerText = ''
        for (x=0; x < sortedCountry.length; x++){
            fullResultSection.appendChild(sortedCountry[x].parentElement)
        }
        countName++
        }
}

let countCapital = 0;
let sortCountriesByCapital=()=>{
        let countryCapital = document.querySelectorAll('.countryCapital');
        if(countCapital % 2 === 0){
            let sortedCapital = [...countryCapital].sort((b,a)=>{
                let nameA=a.textContent.toLowerCase(), nameB=b.textContent.toLowerCase()
                if (nameA < nameB) //sort string ascending
                    return -1 
                if (nameA > nameB)
                    return 1
                return 0 //default return value (no sorting)
            })
            fullResultSection.innerText = ''
            for (x=0; x < sortedCapital.length; x++){
                fullResultSection.appendChild(sortedCapital[x].parentElement.parentElement)
            }
            countCapital++;
        }
        else{
            let sortedCapital = [...countryCapital].sort((a,b)=>{
                let nameA=a.textContent.toLowerCase(), nameB=b.textContent.toLowerCase()
                if (nameA < nameB) //sort string ascending
                    return -1 
                if (nameA > nameB)
                    return 1
                return 0 //default return value (no sorting)
            })
            fullResultSection.innerText = ''
            for (x=0; x < sortedCapital.length; x++){
                fullResultSection.appendChild(sortedCapital[x].parentElement.parentElement)
            }
            countCapital++;
        }
}

let countPopulation = 0;
let sortCountriesByPopulation=()=>{
    let countryPopulation = document.querySelectorAll('.population');

    if(countPopulation%2 === 0){
        let sortedPopulation = [...countryPopulation].sort((b,a)=>{
            return a.textContent - b.textContent;
        })
        
        fullResultSection.innerText = ''
       
        for (x=0; x < sortedPopulation.length; x++){
            fullResultSection.appendChild(sortedPopulation[x].parentElement.parentElement)
        }
        countPopulation++;
        return sortedPopulation;
    }
    else{
        let sortedPopulation = [...countryPopulation].sort((a,b)=>{
            return a.textContent - b.textContent;
        })
        
        fullResultSection.innerText = ''
       
        for (x=0; x < sortedPopulation.length; x++){
            fullResultSection.appendChild(sortedPopulation[x].parentElement.parentElement)
        }
        countPopulation++;
        return sortedPopulation;
    }
}

let topTen=()=>{
    let newCountries = [...countries]

    newCountries.sort((a,b)=>{
        return b.population - a.population
    })
    let topTenCountries = newCountries.slice(0, 10)
    graphicsSummary.innerText = 'The 10 most populous countries in the world'
    displayGraph(topTenCountries);
}

let topLanguages=()=>{
    let newCountries = [...countries]

    let allLang = [];
    newCountries.map(element=>{
        allLang.push(element.languages)
    })
    let newCountriesSet = new Set(allLang.flat(Infinity))

    let languageObject = []
    for(item of newCountriesSet){
        let count = 0
        for(element of allLang.flat(Infinity)){
            if(item === element) {
                count++
            }
        }
        languageObject.push([item, count])
    }
    languageObject.sort((a,b)=>{
        return b[1] - a[1]
    })
    let topTenLanguage = languageObject.slice(0, 10)
    displayTopTenLanguages(topTenLanguage)
}

nameBtn.addEventListener('click', sortCountriesByName)
capitalBtn.addEventListener('click', sortCountriesByCapital)
populationBtn.addEventListener('click', sortCountriesByPopulation)
graphicalDisplayBtn.addEventListener('click', topTen)
populationGraphicsBtn.addEventListener('click', topTen)
languageGraphicsBtn.addEventListener('click', topLanguages)
topArrow.addEventListener('click', ()=>{
    window.scrollTo(0,0)
})
