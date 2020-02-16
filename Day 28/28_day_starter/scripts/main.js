let validationDiv = document.querySelector('#validationDiv');
let input = document.querySelectorAll('.input')
let resultSection = document.querySelector('#leaderBoard')

let sortScore =()=>{
    let scores = document.querySelectorAll('.score')
    let sortedScores = [...scores].sort((a,b)=>{
        return b.textContent - a.textContent
    })   
   sortedScores.map(element=>{
       resultSection.appendChild(element.parentNode);
   })
}

let deleteProfile=(num)=>{
            let playerDetails = document.querySelector(`#playerDetails${num}`)
            resultSection.removeChild(playerDetails)
}
let addFive =(num)=>{
    let finalScore = document.querySelector(`#finalScore${num}`)
    finalScore.innerText = Number(finalScore.textContent) + 5;
    sortScore();
}
let subtractFive =(num)=>{
    let finalScore = document.querySelector(`#finalScore${num}`)
    finalScore.innerText = Number(finalScore.textContent) - 5;
    sortScore();
}
let createProfile=(num)=>{
    let firstName = document.querySelector('#firstName')
    let lastName = document.querySelector('#lastName')
    let country = document.querySelector('#country')
    let playerScore = document.querySelector('#playerScore')
    let validationDiv = document.querySelector('#validationDiv')

    if(firstName.value === '' || lastName.value === '' || country.value === '' || playerScore.value === ''){
        console.log('All fields are required')
        validationDiv.style.display = 'block'
        validationDiv.innerText = 'All fields are required'

        for(elements of input){
            if (elements.value === ''){
                elements.style.border = '1px solid red'
            }
            else{
                elements.style.border = '1px solid green'
            }
        }
    }

    else{
    validationDiv.style.display = 'none'
    for(elements of input){
            elements.style.border = '1px solid green'
    }

    let playerDetails = document.createElement('div')
    playerDetails.id = `playerDetails${num}`
    playerDetails.className = 'playerDetails'

    let fullnameDiv = document.createElement('div')
    fullnameDiv.id = `fullname${num}`
    fullnameDiv.className = 'fullname'
    fullnameDiv.innerText = `${firstName.value.toUpperCase()} ${ lastName.value.toUpperCase()}`;
    playerDetails.appendChild(fullnameDiv);

    let dateTime = document.createElement('p')
    dateTime.className = 'dateTime'
    let now = new Date()
    let date = now.toDateString();
    let time = now.toLocaleTimeString()
    dateTime.innerText = `${date}  ${time}`;
    fullnameDiv.appendChild(dateTime);

    let finalPlayerCountry = document.createElement('div')
    finalPlayerCountry.id = `playerCountry${num}`
    finalPlayerCountry.className = 'playerCountry'
    finalPlayerCountry.innerText = country.value.toUpperCase();
    playerDetails.appendChild(finalPlayerCountry)

    let finalScore = document.createElement('div')
    finalScore.id = `finalScore${num}`
    finalScore.className = 'score'
    finalScore.innerText = playerScore.value;
    playerDetails.appendChild(finalScore)
    
    let buttonsDiv = document.createElement('div')
    buttonsDiv.id = `buttonsDiv${num}`
    buttonsDiv.className = 'buttonsDiv'
    playerDetails.appendChild(buttonsDiv)

    let deletePlayerBtn = document.createElement('button')
    deletePlayerBtn.id = `deletePlayer${num}`
    deletePlayerBtn.classList = 'delete modifyBtn'
    deletePlayerBtn.addEventListener('click', ()=>{
        deleteProfile(num);
    })
    buttonsDiv.appendChild(deletePlayerBtn)

    let addScoreBtn = document.createElement('button')
    addScoreBtn.id = `addScore${num}`
    addScoreBtn.classList = 'modifyBtn'
    addScoreBtn.innerText = '+5'
    buttonsDiv.appendChild(addScoreBtn)
    addScoreBtn.addEventListener('click', ()=>{
        addFive(num);
    })

    let subtractScoreBtn = document.createElement('button')
    subtractScoreBtn.id = `subtractScore${num}`
    subtractScoreBtn.classList = 'modifyBtn'
    subtractScoreBtn.innerText = '-5'
    buttonsDiv.appendChild(subtractScoreBtn)
    subtractScoreBtn.addEventListener('click', ()=>{
        subtractFive(num);
    })

    resultSection.appendChild(playerDetails)
    sortScore()
    }
}

let addPlayerBtn = document.querySelector('#addPlayer');
let count = 0;
addPlayerBtn.addEventListener('click', ()=>{
    createProfile(count);
    count++;
})    


