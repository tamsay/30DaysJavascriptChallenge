let validationDiv = document.querySelector('#validationDiv');

let resultSection = document.querySelector('#leaderBoard')

let sortScore =()=>{
    let scores = document.querySelectorAll('.score')
    let sortedScores = [...scores].sort((a,b)=>{
        return b.textContent - a.textContent
    })
    console.log(sortedScores);
    // resultSection.appendChild(sortedScores)
   // return sortedScores
   [...sortedScores].map(element=>{
       resultSection.appendChild(element.parentNode);
   })
}

let deleteProfile=(num)=>{
    console.log(num)    
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
    let LastName = document.querySelector('#lastName')
    let country = document.querySelector('#country')
    let playerScore = document.querySelector('#playerScore')

    let playerDetails = document.createElement('div')
    playerDetails.id = `playerDetails${num}`
    playerDetails.className = 'playerDetails'

    let fullnameDiv = document.createElement('div')
    fullnameDiv.id = `fullname${num}`

    let fNameDiv = document.querySelector(`#fullname${num}`)
    fullnameDiv.innerText = firstName.value;

    playerDetails.appendChild(fullnameDiv);

    let finalPlayerCountry = document.createElement('div')
    finalPlayerCountry.id = `playerCountry${num}`

    let playerCountry = document.querySelector(`#playerCountry${num}`)
    finalPlayerCountry.innerText = country.value;


    playerDetails.appendChild(finalPlayerCountry)

    let finalScore = document.createElement('div')
    finalScore.id = `finalScore${num}`
    finalScore.className = 'score'

    let score = document.querySelector(`#finalScore${num}`)
    finalScore.innerText = playerScore.value;

    playerDetails.appendChild(finalScore)
    

    let buttonsDiv = document.createElement('div')
    buttonsDiv.id = `buttonsDiv${num}`
    playerDetails.appendChild(buttonsDiv)

    let deletePlayerBtn = document.createElement('button')
    deletePlayerBtn.id = `deletePlayer${num}`
    deletePlayerBtn.className = 'delete'
    deletePlayerBtn.addEventListener('click', ()=>{
        deleteProfile(num);
    })
    buttonsDiv.appendChild(deletePlayerBtn)

    let addScoreBtn = document.createElement('button')
    addScoreBtn.id = `addScore${num}`
    buttonsDiv.appendChild(addScoreBtn)
    addScoreBtn.addEventListener('click', ()=>{
        addFive(num);
    })

    let subtractScoreBtn = document.createElement('button')
    subtractScoreBtn.id = `subtractScore${num}`
    buttonsDiv.appendChild(subtractScoreBtn)
    subtractScoreBtn.addEventListener('click', ()=>{
        subtractFive(num);
    })

    resultSection.appendChild(playerDetails)
    sortScore()

    // fNameDiv.innerText = firstName.value;
    // playerCountry.innerText = country.value;
    // score.innerText = playerScore.value;
}

let addPlayerBtn = document.querySelector('#addPlayer');

// let firstName = document.querySelector('#firstName')
// let LastName = document.querySelector('#lastName')
// let country = document.querySelector('#country')
// let playerScore = document.querySelector('#playerScore')

let count = 0;
addPlayerBtn.addEventListener('click', ()=>{
    createProfile(count);
    // let fullnameDiv = document.querySelector(`#fullname${count}`)
    // let finalPlayerCountry = document.querySelector(`#playerCountry${count}`)
    // let finalScore = document.querySelector(`#finalScore${count}`)

    // fullnameDiv.innerText = firstName.value;
    // finalPlayerCountry.innerText = country.value;
    // finalScore.innerText = playerScore.value;

    // deleteProfile(count);
    count++;
    // let sort = sortScore();
})


// deleteProfileBtn.style.backgroundColor = 'red'
    


