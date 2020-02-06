// console.log(countries)
// alert('Open the console and check if the countries has been loaded')

let body = document.querySelector('body');
body.style.textAlign = 'center'
let mainDiv = document.querySelector('.wrapper')

let createInput = ()=>{
    let input = document.createElement('input');
    input.placeholder = 'Input any number - Integers alone';
    input.id = 'input';
    input.style.width = '50%'
    input.style.height = '50px'
    input.style.border = '1px solid green'
    input.style.textAlign = 'center'
    body.insertBefore(input, mainDiv)
    return input;
}
createInput();

let isPrime = (num)=>{
    if(num === 0 || num === 1){
       return false;
    }
    else{
    for (x=2; x < num ; x++){
        if(num % x === 0){
         return false;
        }
    }
     return true;
 }
};
// console.log(isPrime(10))

let generateNumbers =()=>{
    let input = document.querySelector('#input');
    let para = document.createElement('div');
    para.id = 'displayPara';
    mainDiv.appendChild(para);

    para.style.display = 'flex';
    para.style.flexDirection = 'row'
    para.style.flexWrap = 'wrap'
    para.style.backgroundColor = 'black'

    input.addEventListener('input', ()=>{
        para.innerText = '';
        for(x=0; x <= input.value; x++){

            let span = document.createElement('span');
            span.style.margin = '5px'
            span.style.padding = '5px'
            span.style.width = '2.5rem'
            span.style.fontFamily = 'arial'
            span.style.fontSize = '20px';
            span.style.fontWeight = 'bold'
            console.log(isPrime(x))
           
           debugger;
            if (isPrime(x) === true){
            span.innerText = x;
            span.style.backgroundColor = '#ffffff'
            para.appendChild(span)
            }
            
           // else{
               else if (x % 2 === 0){
                    span.innerText = x;
                    span.style.backgroundColor = '#90ee90';
                    return para.appendChild(span); 
                }
                else {
                    span.innerText = x;
                    span.style.backgroundColor = '#ffcccb';
                   return para.appendChild(span); 
                }
            }
        });
    
}
generateNumbers();