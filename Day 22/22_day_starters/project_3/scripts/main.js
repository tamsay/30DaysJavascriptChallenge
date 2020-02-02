let projectDetails = asabenehChallenges2020;

let body = document.querySelector('body'); // selector for the body of the project
    body.style.textAlign = 'center'
let heading = document.createElement('h1');
let headingYear = document.createElement('span');
let challengeDescription = document.createElement('h2');
let dateTimeDiv = document.createElement('div');
let challengeListDiv = document.querySelector('.wrapper');
let contactDiv = document.createElement('div');
contactDiv.setAttribute('id' , 'contactDiv'); // creating and setting the attr of the contact div or footer
let profileSection = document.createElement('section');
profileSection.setAttribute('id' , 'profileSection'); // creating and setting the attr of the profile section
let profileDescription = document.createElement('div');
profileDescription.setAttribute('id' , 'profileDescription'); // creating and setting the attr of the profile description
let profileSummary = document.createElement('div');
profileSummary.setAttribute('id' , 'profileSummary'); // creating and setting the attr of the profile summary section
let keywordsDiv = document.createElement('div')
keywordsDiv.setAttribute('id' , 'keywordsDiv'); // creating and setting the attr of the keywords div

let changeTextColor =(element)=>{
        let randomColor = '#'; 
        let color = (Math.ceil(Math.random()*16777215)).toString(16);
        randomColor += color;      
       // element.style.color = `${randomColor}`;
}
let changeBackgroundColor =(element)=>{
    let randomColor = '#'; 
    let color = (Math.ceil(Math.random()*16777215)).toString(16);
    randomColor += color;      
    // element.style.backgroundColor = `${randomColor}`;
}

// Add the heading to the body and set its values
let mainHeadingFunction =()=>{
    heading.setAttribute('id' , 'mainHeading');
    headingYear.setAttribute('id' , 'headingYear');
    body.insertBefore(heading, challengeListDiv)
    heading.innerText = `${projectDetails.challengeTitle} in `;
    heading.appendChild(headingYear);
    headingYear.innerText = projectDetails.challengeYear;
    let span = document.querySelector('#headingYear');
    span.style.color = setInterval(changeTextColor, 1000, span);    
    // span.style.backgroundColor = setInterval(changeBackgroundColor, 1000, span);    

} 
mainHeadingFunction();

// Add the sub heading to the body and set its values
let challengeDescriptionFunction =()=>{
    challengeDescription.setAttribute('id' , 'challengeDescription');
    body.insertBefore(challengeDescription, challengeListDiv);
    challengeDescription.innerText = `${projectDetails.challengeSubtitle}`;
    let idSelector = document.querySelector('#challengeDescription');
    idSelector.style.color = 'blue';
    idSelector.style.textDecoration = 'underline'
}
challengeDescriptionFunction();

// Add the Date and Time div and style it
let dateTimeFunction =()=>{
    dateTimeDiv.setAttribute('id' , 'dateTimeDiv');
    body.insertBefore(dateTimeDiv, challengeListDiv);
    let idSelector = document.querySelector('#dateTimeDiv');
    let now = new Date();
    let finalDate = now.toUTCString();
    idSelector.innerText = finalDate;
    idSelector.style.color = `${setInterval(changeTextColor, 1000, idSelector)}`
    // idSelector.style.backgroundColor = `${setInterval(changeBackgroundColor, 1000, idSelector)}`
}
dateTimeFunction()

// Add challenges list and style it
let challengeListFunction =()=>{
    challengeListDiv.setAttribute('id' , 'challengeListDiv');
    let idSelector = document.querySelector('#challengeListDiv');
    let challengeList = document.createElement('ul');
    challengeList.setAttribute('id' , 'listAll')
    let listGroup = document.querySelector('#listAll');    
    console.log(listGroup)

    // get the list alone first
    let list = [];
    projectDetails.challenges.forEach(element=>{
        list.push(element.name)
    })

    challengeListDiv.appendChild(challengeList);
    idSelector.style.backgroundColor = 'pink'
    // challengeList.style.backgroundColor = 'blue'
    for(x=0; x < list.length; x++){
        let listItem = document.createElement('li');
        listItem.setAttribute('classList', `listItem${x} list`);
        listItem.innerText = list[x];
        challengeList.appendChild(listItem)
    }
}
challengeListFunction();

// 

