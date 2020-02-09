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
// console.log(languageSet)

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
// console.log(sortedCountries)
// console.log(sortedLanguage)

let topTen =()=>{
    console.log(sortedCountries.slice(0,10))
    console.log(sortedLanguage.slice(0,10))
}
topTen()