let mainDiv = document.querySelector('#mainDiv')
let title = document.querySelector('#title')
let value = title.textContent.length;


let color =()=>{
    let color = `#${(Math.floor(Math.random()*16777215)).toString(16)}`
    return color;
}
let font =()=>{
    let fontArray = ['Arial','Helvetica', 'sans-serif', 'Cambria', 'Cochin', 'Georgia'] 
    let random = Math.ceil(Math.random()*fontArray.length)
    return fontArray[random];
}
let fontsize =()=>{
    let size = `${Math.ceil(Math.random()*50)+100}px`;
    console.log(size)
    return size;
}

setInterval(()=>{
    let newPara = document.createElement('p');
    newPara.id = 'newPara'

    mainDiv.style.backgroundColor = color();   

    for(x=0; x < value; x++){
        let span = document.createElement('span')
        span.innerText = title.textContent[x]
        span.style.color = color()
        newPara.appendChild(span);
    }
    title.innerText = ''
    newPara.style.fontFamily = font();
    newPara.style.fontSize = fontsize();
    title.appendChild(newPara)
}, 3000)
