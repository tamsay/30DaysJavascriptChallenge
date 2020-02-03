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
    challengeList.setAttribute('id' , 'allList')

    let stack = [];
    let skillList = [];
    let status = [];
    let allDetails = []
     projectDetails.challenges.forEach(element=>{
          stack.push(element.name)
          skillList.push(element.topics)
          status.push(element.status);
          allDetails.push([element.name, element.topics, element.status])
     })

    challengeListDiv.appendChild(challengeList);
    idSelector.style.backgroundColor = 'pink';
    for(x=0; x < (projectDetails.challenges).length; x++){
        let listItem = document.createElement('li');
        listItem.setAttribute('classList', `listItem${x} list`);
        listItem.style.display = 'flex';
        listItem.style.flexDirection = 'row';
        listItem.style.justifyContent = 'space-between'

        for (y=0; y < 3; y++){
            let subListItem = document.createElement('div');
            subListItem.setAttribute('id', `subList${y}`);
            listItem.appendChild(subListItem);
            subListItem.innerText = allDetails[x][y];
        }
        challengeList.appendChild(listItem)
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
    
    let authorName = document.createElement('p');
    authorName.setAttribute('id' , 'authorName');
    bioDiv.appendChild(authorName);
    
    let authorSocialMedia = document.createElement('div');
    authorSocialMedia.setAttribute('id' , 'authorSocialMedia');
    bioDiv.appendChild(authorSocialMedia);
    authorSocialMedia.style.display = 'flex';
    authorSocialMedia.style.justifyContent = 'center'

    let socialLinks = projectDetails.author.socialLinks;

    for(x=0; x < socialLinks.length; x++){
        let media = document.createElement('div');
        let link = document.createElement('a');
        link.setAttribute('href', `${socialLinks[x].url}`)

        link.innerText = (socialLinks[x].social);
        media.appendChild(link);
        authorSocialMedia.appendChild(media);
    }

    authorName.innerText = `${projectDetails.author.firstName} ${projectDetails.author.lastName}`
    
    let missionStatement = document.createElement('p');
    missionStatement.setAttribute('id' , 'missionStatement'); 
    profileSection.appendChild(missionStatement);
    missionStatement.innerText = projectDetails.author.bio;

    let profileList = document.createElement('div');
    profileList.setAttribute('id' , 'profileList'); 
    profileSection.appendChild(profileList);
    profileList.style.display = 'flex'
    profileList.style.width = '100%'
    profileList.style.justifyContent = 'space-between';

    for(x=0; x < 3; x++){
        let section = document.createElement('div');
        section.style.width = 'fit-width'
        section.style.flex = '1 0 200px'
        // section.style.backgroundColor = 'pink'

        if(x === 0){
            for(y=0; y < projectDetails.author.titles.length; y++){
                let list = document.createElement('li')
                list.style.flex = '1 0 200px'
                list.style.listStyle = 'none'
                list.innerText = projectDetails.author.titles[y];
                list.style.backgroundColor = 'green';
                list.style.textAlign = 'left'
                section.appendChild(list)
            }
        }
        else if (x === 1){
            for(y=0; y < projectDetails.author.skills.length; y++){
                let list = document.createElement('li')
                // list.style.width = 'fit-width'
                list.style.flex = '1 0 200px'
                list.style.listStyleType = 'circle'
                list.innerText = projectDetails.author.skills[y];
                list.style.backgroundColor = 'pink'
                list.style.textAlign = 'left'
                section.appendChild(list)
            }
        }
        else {
            for(y=0; y < projectDetails.author.qualifications.length; y++){
                let list = document.createElement('li')
                list.style.flex = '1 0 200px'
                list.innerText = projectDetails.author.qualifications[y];
                list.style.backgroundColor = 'orange';
                list.style.textAlign = 'left'
                section.appendChild(list)
            }
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
        span.style.borderRadius = '20px';
        span.style.margin = '10px';
        span.style.padding = '1px';
        span.style.width = 'fit-content';
        span.style.fontWeight = 'bold';
        span.style.fontFamily = 'arial';
        span.style.backgroundColor = color;
        keywords.appendChild(span);
        span.innerText = content[x];
    }
}
keywordsSectionFunction();