// console.log(countries)
// alert('Open the console and check if the countries has been loaded')

// Exercise LEVEL 1

// Question 1
let txt1 = 'He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.';

let totalIncome = ()=>{
    let regex = /\d+/g;
    let incomeArray = txt1.match(regex);
    let result = incomeArray.reduce((acc, arr)=>{
        return acc + parseInt(arr);
        // or use: return acc + Number(arr);
    },0)
    console.log(result);
}
// totalIncome()

// Question 2
let txt2 = 'The position of some particles on the horizontal x-axis -12, -4, -3 and  -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction.';

let distanceRange = ()=>{
    // Method 1
    let regex = /-?\d+/g;
    let match = txt2.match(regex);
    let min = Math.min(...match);
    let max = Math.max(...match);
    let sortedPoints = match.sort((a,b)=>{
        return (a) - (b);
    })
    let sortedArray = sortedPoints.map(item=>{
        return parseInt(item);
    })
    let difference = max - min;

    console.log(difference)
    console.log(sortedArray)
    console.log(match)
    console.log(sortedPoints);

    // Method 2
    let regex2 = /-?\d/g;
    let match2 = txt2.match(regex2);
    let min2 = Math.min(...match2);
    let max2 = Math.max(...match2);
    let difference2 = max2 -  min2;
    let sortedPoints2 = match2.sort((a,b)=>{
        return a - b;
    })
    let sortedPointsArray2 = sortedPoints2.map(item=>{
        return parseInt(item);
    })
    console.log(difference2)
    console.log(sortedPointsArray2)
    console.log(match2)
    console.log(sortedPoints2);
}
// distanceRange();

// Question 3
let is_valid_variable =(name)=>{
    let regex = /^\d|-/g;
    let result = regex.test(name);
    //result ? console.log('Invalid variable name') : console.log('valid variable name');
    result ? result = false : result = true;
    console.log(result);
    return result;
}
//is_valid_variable('first_name') // # True
//is_valid_variable('first-name') //# False
//is_valid_variable('1first_name') //# False
//is_valid_variable('firstname') //# True

// Exercise LEVEL 2

// Question 1
let paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`

let mostFrequentWords = (paragraph, num)=>{

let paragraphArr = paragraph.split(' ');
let result = paragraphArr.map(item=>{
    if(item.includes('.')|| item.includes(',')){
        return item.replace(('.'),"")
    }
    return item;
})
let paragraphSet = new Set(result);
let number = [];

[...paragraphSet].filter(item=>{
    let count = 0;
    result.map(x=>{
        if (item === x) count++
    })
    number.push([count, item])
})
let sortedResult = number.sort((a,b)=>{
    return b[0] - a[0];
})
let answer = sortedResult.slice(0,num)
return answer;
}
// console.log(mostFrequentWords(paragraph, 10))

// Exercise LEVEL 3
// Question 1
let sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`

let cleanText = (sentence, num)=>{
    let regex = /[%@;#$&!,?]/g;
    let clean = sentence.replace(regex, "");
    console.log(clean)
    let frequent = mostFrequentWords(clean, num)
    console.log(frequent)
}
// console.log(cleanText(sentence, 5))

