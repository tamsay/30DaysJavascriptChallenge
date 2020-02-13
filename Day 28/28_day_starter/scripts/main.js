let validationDiv = document.querySelector('#validationDiv');

let resultSection = document.querySelector('#leaderBoard')

let createProfile=(num)=>{
    let playerDetails = document.createElement('div')
    playerDetails.id = `playerDetails${num}`
    playerDetails.style.display = 'flex';
    playerDetails.style.justifyContent = 'space-around'
    playerDetails.style.backgroundColor = 'limegreen'

    let fullnameDiv = document.createElement('div')
    fullnameDiv.id = `fullname${num}`
    playerDetails.appendChild(fullnameDiv);

    let finalPlayerCountry = document.createElement('div')
    finalPlayerCountry.id = `playerCountry${num}`
    playerDetails.appendChild(finalPlayerCountry)

    let finalScore = document.createElement('div')
    finalScore.id = `finalScore${num}`
    playerDetails.appendChild(finalScore)

    let buttonsDiv = document.createElement('div')
    buttonsDiv.id = `buttonsDiv${num}`
    playerDetails.appendChild(buttonsDiv)

    let deletePlayerBtn = document.createElement('button')
    deletePlayerBtn.id = `deletePlayer${num}`
    buttonsDiv.appendChild(deletePlayerBtn)

    let addScoreBtn = document.createElement('button')
    addScoreBtn.id = `addScore${num}`
    buttonsDiv.appendChild(addScoreBtn)

    let subtractScoreBtn = document.createElement('button')
    subtractScoreBtn.id = `subtractScore${num}`
    buttonsDiv.appendChild(subtractScoreBtn)

    resultSection.appendChild(playerDetails)

}

let addPlayerBtn = document.querySelector('#addPlayer');

let firstName = document.querySelector('#firstName')
let LastName = document.querySelector('#lastName')
let country = document.querySelector('#country')
let playerScore = document.querySelector('#playerScore')


let count = 0;
addPlayerBtn.addEventListener('click', ()=>{
    createProfile(count);
    let fullnameDiv = document.querySelector(`#fullname${count}`)
    let finalPlayerCountry = document.querySelector(`#playerCountry${count}`)
    let finalScore = document.querySelector(`#finalScore${count}`)

    fullnameDiv.innerText = firstName.value;
    finalPlayerCountry.innerText = country.value;
    finalScore.innerText = playerScore.value;
    count++;
})