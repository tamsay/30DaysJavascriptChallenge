let body = document.querySelector('body')
body.style.fontFamily = 'arial';
body.style.display = 'flex';
body.style.alignItems = 'center'
body.style.flexDirection = 'column'
body.style.fontSize = '30px';
let script = document.querySelector('script');

let display1 = document.createElement('p')
display1.id = 'display1';
body.insertBefore(display1, script);
display1.style.display = 'flex'
display1.style.justifyContent = 'center'
display1.style.alignItems = 'center'
display1.innerText = 'Press Any Keyboard Key'
display1.style.height = '50px'
display1.style.border = '1px solid green'
display1.style.width = '50%'
display1.style.textAlign = 'center'
display1.style.backgroundColor = '#a1d3f2'
display1.style.borderRadius = '15px'

let span = document.createElement('span');
span.id = 'keySpan';
display1.appendChild(span)

let display2 = document.createElement('div')
display2.id = 'display2';
body.insertBefore(display2, script);
display2.style.backgroundColor = '#00a0af';
display2.style.display = 'flex';
display2.style.alignItems = 'center'
display2.style.justifyContent = 'center';
display2.style.fontSize = '100px'
display2.style.width = '200px';
display2.style.height = '200px';
display2.style.borderRadius = '20px'


let getKeycode =()=>{
    let divDisplay = document.querySelector('#display1');
    divDisplay.style.display = 'flex'

    let spanDisplay = document.querySelector('#keySpan');
    let divDisplay2 = document.querySelector('#display2')

    body.addEventListener('keydown', (event)=>{
        let answer = event.key;
        let code = event.which
        if(code === 32){
            spanDisplay.innerText = 'space-bar';
        }
        else{
            spanDisplay.innerText = answer;
        }

        divDisplay.innerText = `You Pressed:`;
        divDisplay.appendChild(spanDisplay)
        spanDisplay.style.color = 'white'
        spanDisplay.style.backgroundColor = 'black'
        spanDisplay.style.fontWeight = 'bold'
        divDisplay2.innerText = code;
        spanDisplay.style.width = 'fit-content';        
    })
}
getKeycode();