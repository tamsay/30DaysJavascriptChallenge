let projectDetails = asabenehChallenges2020;

let body = document.querySelector('body'); // selector for the body of the project
    body.style.textAlign = 'center'
let heading = document.createElement('h1');
let headingYear = document.createElement('span');
let challengeDescription = document.createElement('h2');
let dateTimeDiv = document.createElement('div');
let challengeListDiv = document.querySelector('.wrapper');
let profileSection = document.createElement('section');
let keywordsDiv = document.createElement('div')

let changeTextColor =(element)=>{
        let randomColor = '#'; 
        let color = (Math.ceil(Math.random()*16777215)).toString(16);
        randomColor += color;      
        element.style.color = `${randomColor}`;
}
let changeBackgroundColor =(element)=>{
    let randomColor = '#'; 
    let color = (Math.ceil(Math.random()*16777215)).toString(16);
    randomColor += color;      
    element.style.backgroundColor = `${randomColor}`;
}

// Add the heading to the body and set its values
let mainHeadingFunction =()=>{
    heading.setAttribute('id' , 'mainHeading');
    heading.style.fontFamily = 'arial';
    heading.style.fontWeight = 'bold'
    headingYear.setAttribute('id' , 'headingYear');
    body.insertBefore(heading, challengeListDiv)
    heading.innerText = `${projectDetails.challengeTitle} in `;
    heading.appendChild(headingYear);
    headingYear.innerText = projectDetails.challengeYear;
    let span = document.querySelector('#headingYear');
    span.style.fontSize = '2em'
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
    idSelector.style.color = 'black';
    idSelector.style.textDecoration = 'underline';
    idSelector.style.fontFamily = 'arial'
}
challengeDescriptionFunction();

// Add the Date and Time div and style it
let dateTimeFunction =()=>{
    dateTimeDiv.setAttribute('id' , 'dateTimeDiv');
    dateTimeDiv.style.display = 'inline'
    dateTimeDiv.style.width = 'fit-content';
    body.insertBefore(dateTimeDiv, challengeListDiv);
    let idSelector = document.querySelector('#dateTimeDiv');
    let now = new Date();
    let finalDate = now.toUTCString();
    idSelector.innerText = finalDate;
    // idSelector.style.color = `${setInterval(changeTextColor, 1000, idSelector)}`
    idSelector.style.color = 'black';
    idSelector.style.fontWeight = 'bold';
    idSelector.style.fontSize = '1.5em';
    idSelector.style.fontFamily = 'arial'
    idSelector.style.backgroundColor = `${setInterval(changeBackgroundColor, 1000, idSelector)}`
}
dateTimeFunction()

// Add challenges list and style it
let challengeListFunction =()=>{
    challengeListDiv.setAttribute('id' , 'challengeListDiv');
    let idSelector = document.querySelector('#challengeListDiv');
    let challengeList = document.createElement('ul');
    challengeList.setAttribute('id' , 'allList')

    let stack = [];
    let skillList = [];
    let status = [];
    let allDetails = []
     projectDetails.challenges.forEach(element=>{
          stack.push(element.name)
          skillList.push(element.topics)
          status.push(element.status);
          allDetails.push([element.name, element.topics[0], element.status])
     })
    challengeList.style.padding = '5px'
    challengeListDiv.appendChild(challengeList);
    idSelector.style.backgroundColor = 'pink';
    for(x=0; x < (projectDetails.challenges).length; x++){
        let listItem = document.createElement('li');
        listItem.setAttribute('class', `listItem${x}`);
        listItem.style.display = 'flex';
        listItem.style.flexDirection = 'row';
        listItem.style.border = '1px solid black';
        listItem.style.margin = '5px 5px 5px 5px';
        listItem.style.fontFamily = 'arial'
        listItem.style.fontSize = '20px'
        listItem.style.fontWeight = 'bold'
        listItem.style.padding = '25px'
        
          
        
        for (y=0; y < 3; y++){
            if (y === 1){ // method one of populating the full skills div without creating an additional function to do that and hiding the div until needed.
                let subListItem = document.createElement('div');
                subListItem.setAttribute('id', `subList${y}`);
                let listHeader = document.createElement('li')
                subListItem.appendChild(listHeader);
                listHeader.innerText = allDetails[x][y];
                let fullSkillsList2 = document.createElement('div')
                fullSkillsList2.id = `fullSkills${y}`;
                fullSkillsList2.style.display = "none"
                listItem.appendChild(subListItem);
                subListItem.appendChild(fullSkillsList2);
                for(a=0; a < skillList[x].length; a++){
                    let items = document.createElement('p')
                    items.innerText = skillList[x][a];
                    fullSkillsList2.appendChild(items);
                }
            }
            else {
            let subListItem = document.createElement('div');
            subListItem.setAttribute('id', `subList${y}`);
            listItem.appendChild(subListItem);
            subListItem.innerText = allDetails[x][y];
            }
        }
    challengeList.appendChild(listItem)
    }
    let skillSubList = document.querySelectorAll('#subList1');
    skillSubList.forEach((element)=>{
        element.addEventListener('click', ()=>{
             let idSelector2 = element.querySelector(`#fullSkills1`)
             if(idSelector2.style.display === 'none'){
                idSelector2.style.display = 'block'
             }
             else{
               idSelector2.style.display = 'none'
             }
    })
    });

    let subList0 = document.querySelectorAll('#subList0')
    subList0.forEach(element=>{
        element.style.flex = '2';
        element.style.textAlign = 'left';
    });
    let subList1 = document.querySelectorAll('#subList1')
    subList1.forEach(element=>{
        element.style.flex = '1';
        element.style.textAlign = 'left';
        element.style.listStyleType = 'square';

    });
    let subList2 = document.querySelectorAll('#subList2')
    subList2.forEach((element, index)=>{
       element.style.flex = '1';
       let text = element.textContent;
       let item = document.querySelector(`.listItem${index}`)

       switch (true) {
           case (text === 'Done') : 
                item.style.backgroundColor = 'green';
                let firstRow = document.querySelector(`.listItem${index}>div`);
                firstRow.style.textDecoration = 'underline'
                break;
           case (text === 'Ongoing') :
                item.style.backgroundColor = 'yellow';
                let secondRow = document.querySelector(`.listItem${index}>div`);
                secondRow.style.textDecoration = 'underline'
                break;
           case (text === 'Coming') :
                item.style.backgroundColor = 'Red'
       }
    });

let secondCollapseDiv = ()=>{
        /*
// This is another method for achieving the collapsing DIV effect however, it creates a new div each time the function is called which is not very efficient. So I'll go with the first method.

    let createInterimDiv =(element, index)=>{
        let interimDiv = document.createElement('div');
        interimDiv.style.display = 'none';
        interimDiv.id = `fullSkillsList${index}`
        skillList[index].forEach(item=>{
            let skill = document.createElement('p');
            skill.innerText = item;
            interimDiv.appendChild(skill);
            element.appendChild(interimDiv);
        }); 
      return element;           
    }
    skillSubList.forEach((element, index)=>{
        element.addEventListener('click', ()=>{
              createInterimDiv(element, index);
             let idSelector = document.querySelector(`#fullSkillsList${index}`);
             if(idSelector.style.display === 'none'){
                 idSelector.style.display = 'block'
             }
             else{
                 idSelector.style.display = 'none'
             }
    })
});

*/
    }
}
challengeListFunction();

// Add profile section and style it 
let profileSectionFunction =()=>{
    profileSection.setAttribute('id' , 'profileSection');
    body.insertBefore(profileSection, document.querySelector('script'));

    let bioDiv = document.createElement('div');
    bioDiv.setAttribute('id' , 'bioDiv');
    profileSection.appendChild(bioDiv);
    bioDiv.style.display = 'flex';
    bioDiv.style.flexDirection = 'column';
    bioDiv.style.margin = '5px';
    bioDiv.style.alignItems = 'center';
    
    let authorName = document.createElement('p');
    authorName.setAttribute('id' , 'authorName');
    bioDiv.appendChild(authorName);
    authorName.style.fontWeight = 'bold';
    authorName.style.fontFamily = 'arial';
    authorName.style.fontSize = '30px';
    authorName.style.width = 'fit-content'
    authorName.style.margin = '5px 0px 0px 0px'
    authorName.innerText = `${projectDetails.author.firstName} ${projectDetails.author.lastName}`
    
    let authorSocialMedia = document.createElement('div');
    authorSocialMedia.setAttribute('id' , 'authorSocialMedia');
    bioDiv.appendChild(authorSocialMedia);
    authorSocialMedia.style.display = 'flex';
    authorSocialMedia.style.alignItems = 'center'
    authorSocialMedia.style.width = 'fit-content'
    authorSocialMedia.style.margin = '5px 0px'
    authorSocialMedia.style.padding  =  '0px'

    let socialLinks = projectDetails.author.socialLinks;

    for(x=0; x < socialLinks.length; x++){
        let media = document.createElement('div');
        let link = document.createElement('a');
        link.setAttribute('href', `${socialLinks[x].url}`)
        let icon = socialLinks[x].fontawesomeIcon;
        link.innerHTML = icon;
        media.appendChild(link);
        media.style.margin = '0px 5px'
        media.style.fontSize = '50px';
        media.style.color = 'black'
        authorSocialMedia.appendChild(media);
    }

    let missionStatement = document.createElement('p');
    missionStatement.setAttribute('id' , 'missionStatement'); 
    profileSection.appendChild(missionStatement);
    missionStatement.innerText = projectDetails.author.bio;

    let profileList = document.createElement('div');
    profileList.setAttribute('id' , 'profileList'); 
    profileSection.appendChild(profileList);
    profileList.style.display = 'flex'
    profileList.style.width = '100%'
    profileList.style.justifyContent = 'space-around';
    profileList.style.backgroundColor = 'blue'

    for(x=0; x < 3; x++){
        let section = document.createElement('div');
        section.style.width = 'fit-width';
        

        if(x === 0){
            let heading = document.createElement('h3');
                heading.id = 'titleHeading';
                heading.innerText = 'Titles'
                heading.style.textAlign = 'left'
                
            for(y=0; y < projectDetails.author.titles.length; y++){
                let list = document.createElement('li')
                list.style.listStyle = 'none';
                list.style.display = 'flex'
                list.style.fontFamily = 'arial'
                let titleIcon = document.createElement('p');
                titleIcon.id = 'titleIcon';
                titleIcon.style.margin = '0px 5px'
                titleIcon.style.border = '1px solid red'
                titleIcon.style.fontSize = '15px'
                let titleText = document.createElement('p');
                titleText.id = 'titleText';
                titleText.style.margin = '0px 5px'
                titleText.style.border = '1px solid red'
                titleText.style.fontSize = '15px'

                titleIcon.innerText = projectDetails.author.titles[y][0];
                titleText.innerText = projectDetails.author.titles[y][1];

                list.appendChild(titleIcon);
                list.appendChild(titleText);
                list.style.backgroundColor = 'green';
                
                heading.appendChild(list)
                
            }
            section.appendChild(heading)
        }
        else if (x === 1){
            let heading = document.createElement('h3');
                heading.id = 'skillsHeading';
                heading.innerText = 'Skills'
                heading.style.textAlign = 'left'
            
            // <i class="fas fa-check"></i>
            for(y=0; y < projectDetails.author.skills.length; y++){
                let list = document.createElement('li')
                list.style.listStyleType = 'none'
                let checkIcon = document.createElement('i');
                checkIcon.className = 'fas fa-check'
                list.appendChild(checkIcon);
                // list.innerText = projectDetails.author.skills[y];
                let skillsText = document.createElement('p');
                skillsText.innerText = projectDetails.author.skills[y];
                 list.appendChild(skillsText)
                list.style.backgroundColor = 'pink'
                list.style.textAlign = 'left'
                heading.appendChild(list)
            }
            section.appendChild(heading)

        }
        else {
            let heading = document.createElement('h3');
                heading.id = 'qualificationsHeading';
                heading.innerText = 'Qualifications'
                heading.style.textAlign = 'left'

            for(y=0; y < projectDetails.author.qualifications.length; y++){
                let list = document.createElement('li')
                list.innerText = projectDetails.author.qualifications[y];
                list.style.backgroundColor = 'orange';
                list.style.textAlign = 'left';
                heading.appendChild(list)
            }
            section.appendChild(heading)
        }
        profileList.appendChild(section);
    }
}
profileSectionFunction();

// Add Keywords section and style it
let keywordsSectionFunction =()=>{
    
    keywordsDiv.setAttribute('id' , 'keywordsDiv'); 
    body.insertBefore(keywordsDiv, document.querySelector('script'))
    let heading = document.createElement('p')
    keywordsDiv.appendChild(heading);
    heading.style.fontFamily = 'arial'
    heading.style.fontSize = '20px'
    heading.style.fontWeight = 'bold'
    heading.innerText = 'Keywords'
    let keywords = document.createElement('p')
    keywords.style.display = 'flex'
    keywords.style.flexWrap = 'wrap'
    // keywords.style.justifyContent = 'space-around'
    keywords.style.alignItems = 'center'
    keywordsDiv.appendChild(keywords)

    let content = projectDetails.keywords
    for (x = 0; x < content.length; x++){
        let color = `#${(Math.ceil(Math.random()*16777215)).toString(16)}`
        let span = document.createElement('span');
        span.style.borderRadius = '7px';
        span.style.margin = '10px';
        span.style.border = '0.4px solid black'
        span.style.padding = '5px';
        span.style.width = 'fit-content';
        span.style.fontWeight = 'bold';
        span.style.fontFamily = 'arial';
        span.style.backgroundColor = color;
        keywords.appendChild(span);
        span.innerText = content[x];
    }
}
keywordsSectionFunction();