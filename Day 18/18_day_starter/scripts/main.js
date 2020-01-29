// console.log(countries)
// alert('Open the console and check if the countries has been loaded')

const countriesAPI = 'https://restcountries.eu/rest/v2/all'
const catsAPI = 'https://api.thecatapi.com/v1/breeds'


// Exercises: Level 1
//1. Read the countries API using fetch and print the name of country, capital, languages, population and area.
let countryDetails =()=>{
    fetch(countriesAPI)
    .then(response=>response.json())
    .then(data=>{
        let countryName = [];
        let countryCapital = [];
        let countryPopulation = [];
        let countryLanguage = [];
        let countryArea = [];
        console.log(data)
    data.forEach(element => {
        countryName.push(element.name);
        countryCapital.push(element.capital);
        countryPopulation.push(element.population);
        countryLanguage.push(element.languages[0].nativeName);
        countryArea.push(element.area)
    });
    console.log(countryName);
    console.log(countryCapital);
    console.log(countryPopulation);
    console.log(countryLanguage);
    console.log(countryArea);

})
.catch(error=>console.log(error));
} 
// countryDetails();

// Exercises: Level 2
//Question 1
let catName = ()=>{
    fetch(catsAPI)
    .then(response=>response.json())
    .then(data=>{
        let name = [];
        data.forEach(item=>{
            name.push(item.name)
        })
        console.log(name)
   })
   .catch(error=>console.log(error));  
}
// catName();

// Exercises: Level 3
// Question 1
// 1. Read the cats api and find the average weight of cat in metric unit.
let catWeight = ()=>{
    fetch(catsAPI)
    .then(response=> response.json())
    .then(data=>{
        console.log(data)
        let metricWeight = [];
        data.forEach(item=>{
            metricWeight.push(item.weight.metric)
        })
        console.log(metricWeight)
    })
}
// catWeight();

// Question 2
// 2. Read the countries api and find out the 10 largest countries
let largestCountries = (num)=>{
    fetch(countriesAPI)
    .then(response=>response.json())
    .then(data=>{
        console.log(data);
      let sortedCountry =  data.sort((a,b)=>{
           return b.area - a.area;
        })
        console.log(sortedCountry.slice(0,num));
    })
    .catch(error=>console.log(error));
}
// largestCountries(10);

// Question 3
// 3. Read the countries api and count total number of languages in the world used as officials.
let officialLanguages = ()=>{
    fetch(countriesAPI)
    .then(response=>response.json())
    .then(data=>{
        let languages = [];
      data.map((item)=>{
           languages.push(item.languages[0].nativeName);
        })
        console.log(languages.length);
    })
    .catch(error=>console.log(error));
}
// officialLanguages();