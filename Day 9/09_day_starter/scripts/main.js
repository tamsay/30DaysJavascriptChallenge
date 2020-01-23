// console.log(countries)
// alert('Open the console and check if the countries has been loaded')

const countries2 = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand', 'England', 'Ethiopia', 'Egypts']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' }
]
// Exercises: LEVEL 1

// Question 1 and 2
// 1. Difference between forEach, map, filter and reduce.
// 2. Define a call function before you them in forEach, map, filter or reduce

// Question 3, 4, 5
let forEachMethod = ()=>{
    countries2.forEach(item=>{
        console.log(item)
    })
    names.forEach(item=>{
        console.log(item)
    })
    numbers.forEach(item=>{
        console.log(item)
    })
}
// forEachMethod();

// Question 6,7,8,9,10

let mapMethod = ()=>{
    let upperCountry = countries2.map(item=>{
        return item.toUpperCase();
    })
    console.log(upperCountry);

    let countryLength = countries2.map(item=>{
        return item.length;
    })
    console.log(countryLength);

    let numSquare = numbers.map(item=>{
        return item**2;
    })
    console.log(numSquare);

    let upperName = names.map(item=>{
        return item.toUpperCase();
    })
    console.log(upperName);

    let productsArray = products.map(item=>{
        let prodName = item.product;
        let price = item.price;
        return [prodName, price];
    })
    console.log(productsArray);
}
// mapMethod();

// Question 11, 12, 13, 14, 15
let filterMethod =()=>{
    let land = countries2.filter(item=>{
        return item.match(/land/gi);
    })
    console.log(land)

    let sixChar = countries2.filter(item=>{
        return item.match(/\b\w{6}\b/gi)
    //     or use 
    // return item.match(/^\w{6}$/gi)
    // or use
    //    if(item.length == 6){
    //        return item;}
       });
    console.log(sixChar);

    let sixOrMoreChar = countries2.filter(item=>{
     //    return item.match(/\b\w{6,}\b/gi)
    //     or use 
     return item.match(/^\w{6,}$/gi)
    // or use
    //    if(item.length >= 6){
    //        return item; }
       });
    console.log(sixOrMoreChar);

    let startWithE = countries2.filter(item=>{
        return item.match(/\bE/gi)
    //     or use 
    // return item.match(/^\w{6}$/gi)
    // or use
    //    if(item.length == 6){
    //        return item;
       });
    console.log(startWithE);

    let validPrice = products.filter(item=>{
        let priceArray = Object.values(item);
        if(typeof(priceArray[1]) === 'number'){
         return (priceArray[1]);
        }
    })
    console.log(validPrice)
}
// filterMethod();

// Question 16
let getStringLists = (array)=>{
    let result = array.filter(item=>{
        if(typeof(item)==="string"){
            return item;
        }
    })
    console.log(result)
}
// getStringLists([1,2,'tope', true, 'tayo', 45, -1])

// Question 17
let sumTotal = ()=>{
    let total = numbers.reduce((a,b=0)=>{
        return a + b;
    })
    console.log(total)
}
// sumTotal()

// Question 18
let stringReduce = ()=>{
    let answer = countries2.reduce((a,b)=>{
         return a +', '+ b;
    })
var lastIndex = answer.lastIndexOf(" ");
console.log(lastIndex)

answer1 = answer.substring(0, lastIndex);
answer2 = answer.substring(lastIndex,);
let replacement = ` and${answer2} are north European countries`;
let answer3 = answer.replace(answer2, replacement)
    console.log((answer1))
    console.log(answer2)
    console.log(answer3)
}
// stringReduce();

// Question 19
// Explain the difference between some and every

// Question 20
let someMethod = ()=>{
    let greaterSeven = countries2.some(item=>{
        if(item.length > 7){
            return item;
        }
    })
    console.log(greaterSeven)
}
// someMethod();

// Question 21
let everyMethod = ()=>{
    let containLand = countries2.every(item=>{
        if(item.includes('land')){
            return item;
        }
    })
    console.log(containLand)
}
// everyMethod();

// Question 22
// explain the difference between find and findindex

// Question 23
let findCountry = ()=>{
    let find6 = countries2.find(item=>{
        return item.length === 6;
    })
   // console.log(find6)
}
// findCountry();

// Question 24, 25, 26
let findCountryIndex = ()=>{
    let index6 = countries2.findIndex(item=>{
        return item.length === 6;
    })
    console.log(index6);

    let indexNorway = countries2.findIndex(item=>{
        return (item =='Norway')
    })
    console.log(indexNorway)

    let indexRussua = countries2.findIndex(item=>{
        return (item =='Russia')
    })
    console.log(indexRussua)

}
 // findCountryIndex();

 
 // Exercise: LEVEL 2
 // Question 1
 let productTotal = ()=>{
       let total = products.map((arr)=>{
           console.log(arr)
           console.log(arr.price)
           if(typeof(arr.price) == 'number'){
            return arr.price;
           }
           else{
               return 0;
           }
        });
        console.log(total)
        let result = total.reduce((a,b)=>{
            return a + b;
        },0);
        console.log(result);
    }
 // productTotal();

 // Question 2
 let producePrice = ()=>{
     let total = products.reduce((arr, acc)=>{
         console.log(acc.price)
         return Number(acc.price) + arr;
     },0)
     console.log(total);
 }
 // producePrice();

 // Question 3
 let categorizeCountries = (keyword)=>{
    let category = countries.filter(item=>{
        return (item.name.toLowerCase()).match(keyword.toLowerCase())
    })
    console.log(category);
 }
// categorizeCountries("island");

 // Question 4
let nameStart = ()=>{
    let start = countries.map(item=>{
        return startAlpha = (item.name.toUpperCase().charAt(0));  
    })
    let startSet = new Set(start)
    let output = [];
    [...startSet].filter(item=>{
        let count = 0;
        start.map(x=>{
            if (item == x){
                count = count + 1;
            }
        })
        output.push({name: item, count})
    })
    // console.log(output)
    return output;
}
// nameStart();

 // Question 5
 let getFirstTenCountries = ()=>{
     let result = [];
        for(x=0; x<10; x++){
           result.push(countries[x].name)
        }
        console.log(result);
}
// getFirstTenCountries()

 // Question 6
 let getLastTenCountries = ()=>{
    let result = [];
       for(x=countries.length-10; x<countries.length; x++){
          result.push(countries[x].name)
       }
       console.log(result);
}
// getLastTenCountries()

// Question 7
let highestOccurence = ()=>{
    let totalArray = nameStart();
    let number = [];
    totalArray.map(({count})=>{
       number.push(count);
    })
    let highest = Math.max(...number);
        let answer =  (totalArray).findIndex(item=>{
            return item.count == highest;
        })
    let result = totalArray[answer]

    console.log(result)
    return result;
}
// highestOccurence()


// Exercise: LEVEL 3
// Question 1
let countryArray = ()=>{
    let sortedByName = [];
    let sortedByCapital = [];
    let sortedByPopulation = [];

    countries.map(item=>{
        sortedByName.push(item.name);
        sortedByCapital.push(item.capital);
        sortedByPopulation.push(item.population)
    })
    console.log('countries sorted by name',sortedByName);
    console.log('countries sorted by capital', sortedByCapital);
    console.log('countries sorted by population', sortedByPopulation)
}
// countryArray();

// Question 2
let mostSpokenLanguages = (countries, number) =>{
    let arr = []
    countries.map(item=>{
        arr.push(item.languages)
    })
    let allLanguages = arr.join(',').split(',');
    let languagesSet = new Set(allLanguages);
    let langArray = [...languagesSet]
    let compactResult = []
    
    langArray.filter(item=>{
        let count = 0;
        allLanguages.map(x=>{
            if(item == x) count = count + 1;
        })
        compactResult.push([count, item]);
    })
    let sortedLangArray = compactResult.sort((a,b)=>{
        return b[0] - a[0];
    })
    let result = sortedLangArray.slice(0,number);
     console.log(result);
     return result;
}
 // mostSpokenLanguages(countries, 4);

// Question 3
let mostPopulatedCountries = (country, number)=>{
    let sortedArray = country.sort((a,b)=>{
        return b.population - a.population;
    })
    let requiredResult = sortedArray.splice(0, number);
    
    let filteredResult = requiredResult.map(item=>{
        return {country: item.name, population: item.population}
    })
    console.log(filteredResult);
}
// mostPopulatedCountries(countries, 5)

// Question 4
   const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]
let statistics = {
    count : ()=>{
        return ages.length;
    },
    sum : ()=>{
        return ages.reduce((arr, acc=0)=>{
            return arr + acc;
        })
    },
    min : ()=>{
       return  result =  Math.min(...ages)
    },
    max : ()=>{
        return result = Math.max(...ages)
    },
    range : ()=>{
        return statistics.max() - statistics.min();
    },
    mean : ()=>{
        return (Math.ceil(statistics.sum()/statistics.count()));
    },
    median : ()=>{
        let sort = ages.sort((a,b)=>{
            return a - b;
        })
        if(sort.length%2 == 0){
            return ((sort[sort.length-1/2]) + (sort[sort.length/2]))/2;
        }
        else{
            return sort[Math.floor(sort.length/2)];
        }
    },
    mode : ()=>{
        let modeSet = new Set(ages);
        let arr = [];
        [...modeSet].filter(item=>{
            let count = 0;
            ages.map(x=>{
                if(item == x) count = count + 1;
            })
            arr.push([item, count]);
        })
        // Method 1
        let result = arr.reduce((acc, item)=>{
            if(item[1] > acc){
                acc = item[1]
            }
            return acc;
        },0);
        let index = arr.findIndex(item=>{
            return item[1] == result;
        })
        return (arr[index]);

        // Method 2
        let sortResult = arr.sort((a,b)=>{
            return b[1] - a[1]
        }).slice(0,1);
        // return sortResult;

        // Method 3
        // Make use of map or filter to get the highest occurence and find the index
    },
    var : ()=>{
        let diffArray =[];
        let mean1 = statistics.mean();
        ages.map(arr=>{
            diffArray.push(arr-mean1);
        });
        let summation = diffArray.reduce((arr, acc)=>{
            return acc**2 + arr;
        },0);
        return (summation/statistics.count());
    },
    std : ()=>{
        return Math.sqrt(statistics.var());
    },
    freqDist : ()=>{
        let freqDistSet = new Set(ages);
        let arr = [];
        [...freqDistSet].filter(item=>{
            let count = 0;
            ages.map(x=>{
                if(item == x) count = count + 1;
            })
            arr.push([item, count]);
        })
        return arr;
    }
}

    console.log('Count:', statistics.count()) // 25
    console.log('Sum: ', statistics.sum()) // 744
    console.log('Min: ', statistics.min()) // 24
    console.log('Max: ', statistics.max()) // 38
    console.log('Range: ', statistics.range()) // 14
    console.log('Mean: ', statistics.mean()) // 30
    console.log('Median: ',statistics.median()) // 29
    console.log('Mode: ', statistics.mode()) // {'mode': 26, 'count': 5}
    console.log('Variance: ',statistics.var()) // 17.5
    console.log('Standard Deviation: ', statistics.std()) // 4.2
    console.log('Frequency Distribution: ',statistics.freqDist()); // [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]



