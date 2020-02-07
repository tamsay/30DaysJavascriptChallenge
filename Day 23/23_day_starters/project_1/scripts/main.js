let body = document.querySelector('body');
let h1 = document.querySelector('h1');
let h2 = document.querySelector('h2');
let h3 = document.querySelector('h3');

let mainDiv = document.querySelector('.wrapper')
mainDiv.style.display = 'flex'
mainDiv.style.justifyContent = 'center'

let inputSection = document.createElement('section');
inputSection.style.display = 'flex'
inputSection.style.flexDirection = 'column'
// inputSection.style.justifyContent = 'center';
inputSection.style.alignItems = 'center'
body.insertBefore(inputSection, mainDiv)

let errorDisplay = document.createElement('p');
errorDisplay.id = 'errorDisplay';
errorDisplay.style.width  = '75%'
inputSection.appendChild(errorDisplay)

let inputDiv = document.createElement('div');
inputDiv.id = 'inputDiv';
inputDiv.style.display = 'flex'
inputDiv.style.justifyContent = 'center'
inputDiv.style.alignItems = 'center'
inputDiv.style.width = '75%'
inputSection.appendChild(inputDiv);
        

body.style.textAlign = 'center'
body.style.fontFamily = 'arial'

h1.style.color = 'green';
h1.style.fontWeight = 'bold'

let createInput = ()=>{
    let input = document.createElement('input');
    input.placeholder = 'Input any number - Integers alone';
    input.id = 'input';
    // input.type = 'number'
    input.style.width = '75%'
    input.style.height = '50px'
    input.style.border = '1px solid green'
    input.style.textAlign = 'center'
    input.style.margin = '0px 10px 10px 0px'
    input.style.fontSize = '20px'
    inputDiv.appendChild(input);
    return input;
}
createInput();

let createButton =()=>{
    let button = document.createElement('button');
    button.id = 'generateResult';
    button.style.width = '25%'
    button.style.height = '50px';
    button.style.fontSize = '20px'
    button.style.fontWeight = 'bold'
    button.style.margin = '0px 10px 10px 0px'
    button.style.textAlign = 'center'
    button.innerText = 'Generate Numbers'
    button.style.backgroundColor = 'lime'
    button.style.borderRadius = '15px';
    inputDiv.appendChild(button)
}
createButton()

let isPrime = (num)=>{
    if(num === 0 || num === 1){
       return false;
    }
    else{
    for (y=2; y < num ; y++){
        if(num % y === 0){
         return false;
        }
    }
     return true;
 }
};

let validateInput =(input)=>{
    if (isNaN(input)){
        return false;
    }
    return true;
}

let generateNumbers =()=>{
    let input = document.querySelector('#input');
    let para = document.createElement('div');
    para.id = 'displayPara';
    mainDiv.appendChild(para);

    para.style.display = 'flex';
    para.style.flexDirection = 'row'
    para.style.flexWrap = 'wrap'
    para.style.width = 'fit-content';
    para.style.justifyContent = 'center'
    para.style.backgroundColor = '#000000'

    input.addEventListener('input', ()=>{
        para.innerText = '';
      if(validateInput(input.value)){
        let inputSelector = document.querySelector('#input');
        inputSelector.style.border = '1px solid green'
        
        for(x=0; x <= input.value; x++){
            let span = document.createElement('span');
            span.style.margin = '5px'
            span.style.padding = '5px'
            // span.style.width = 'fit-content'
            span.style.width = '3em'
            span.style.fontFamily = 'arial'
            span.style.fontSize = '20px';
            span.style.fontWeight = 'bold'
           
            if (isPrime(x) === true){
            span.innerText = x;
            span.style.backgroundColor = '#ffffff'
            para.appendChild(span)
            }
            else  if (x % 2 === 0){
                    span.innerText = x;
                    span.style.backgroundColor = '#90ee90';
                     para.appendChild(span); 
                }
            else {
                    span.innerText = x;
                    span.style.backgroundColor = '#e52828';
                    para.appendChild(span); 
                }
            }
            errorDisplay.innerText = '';          
      }
      else{
          let inputSelector = document.querySelector('#input');
          inputSelector.style.border = '1px solid red'
          errorDisplay.innerText = 'This is a number only field. Text values are not allowed';     
          errorDisplay.style.color = 'red'
          errorDisplay.style.fontSize = '15px'
          errorDisplay.style.margin = '0px'   
          errorDisplay.style.textAlign = 'left'  
      } 
    });
}
 generateNumbers();


let generateNumbers2 =()=>{
    let input = document.querySelector('#input');
    let para = document.createElement('div');
    para.id = 'displayPara';
    mainDiv.appendChild(para);
    para.innerText = '';


    para.style.display = 'flex';
    para.style.flexDirection = 'row'
    para.style.flexWrap = 'wrap'
    para.style.backgroundColor = '#000000'

    let buttonSelector = document.querySelector('#generateResult')
    buttonSelector.addEventListener('click', ()=>{
    para.innerText = '';
    if(validateInput(input.value)){
      let inputSelector = document.querySelector('#input');
      inputSelector.style.border = '1px solid green'
      
      for(x=0; x <= input.value; x++){
          let span = document.createElement('span');
          span.style.margin = '5px'
          span.style.padding = '5px'
          // span.style.width = 'fit-content'
          span.style.width = '4em'
          span.style.fontFamily = 'arial'
          span.style.fontSize = '20px';
          span.style.fontWeight = 'bold'
         
          if (isPrime(x) === true){
            span.innerText = x;
            span.style.backgroundColor = '#ffffff'
            para.appendChild(span)
        }
          else  if (x % 2 === 0){
            span.innerText = x;
            span.style.backgroundColor = '#90ee90';
            para.appendChild(span); 
        }
          else {
            span.innerText = x;
            span.style.backgroundColor = '#e52828';
            para.appendChild(span); 
              }
          }
          errorDisplay.innerText = '';          
    }
    else{
        let inputSelector = document.querySelector('#input');
        inputSelector.style.border = '1px solid red'
        errorDisplay.innerText = 'This is a number only field. Text values are not allowed';     
        errorDisplay.style.color = 'red'
        errorDisplay.style.fontSize = '15px'
        errorDisplay.style.margin = '0px'   
        errorDisplay.style.textAlign = 'left'  
    }  
}) 
}
// generateNumbers2();

