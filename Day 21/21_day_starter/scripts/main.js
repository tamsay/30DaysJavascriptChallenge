let yearColorChanger = ()=>{
    
    
    let year = document.querySelector('h1');
    let yearContent = year.textContent;
    let newYearContent = yearContent.replace('2020', '<span id = "yearId">2020</span>')
    year.innerHTML = newYearContent;
    let yearSpanId = document.querySelector('#yearId'); // Year Selector
    yearSpanId.style.fontSize = '60px';
    
    let changeColor = ()=>{
        // Random color generator
        let randomColor = Math.floor(Math.random()*16777215).toString(16);
        let color = `#${randomColor}`;
        // yearSpanId.setAttribute('style', `color : ${color}`) // change text color
        yearSpanId.style.color = `${color}`; // change text color
    }
      setInterval(changeColor, 2000);
}
yearColorChanger();

// DateTime Block
let dateTime = ()=>{
    let now = new Date();

    let year = now.getFullYear();
    let month = now.getMonth();
    let date = now.getDate();
    let day = now.getDay()
    let hour = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    // console.log(year, month, date, day, hour, minutes, seconds, now.toUTCString())

    return now.toUTCString();
}
// dateTime();

let createDateTimeDiv =()=>{
    let timeDiv = document.createElement('div');
    timeDiv.style.backgroundColor = 'red';
    let h2 = document.querySelector('h2');
    timeDiv.textContent = dateTime();
    console.log(timeDiv)
    let dateTimeDiv = h2.appendChild(timeDiv);

    let changeBgColor =()=>{
        let randomColor = Math.floor(Math.random()*16777215).toString(16);
        let color = `#${randomColor}`;
        dateTimeDiv.style.backgroundColor = color;
    }
    setInterval(changeBgColor, 2000);
}
createDateTimeDiv()

let taskList = ()=>{
    let allTasks = document.querySelectorAll('li');
    // console.log(allTasks)
    [...allTasks].map(element=>{
        console.log(element)
        if (element.textContent.includes('Done')){
            element.style.backgroundColor = 'green';
        }
        else if (element.textContent.includes('Ongoing')){
            element.style.backgroundColor = 'yellow';
        }
        else{
            element.style.backgroundColor = 'red';
        }
    });
}
taskList();

