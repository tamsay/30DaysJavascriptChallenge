// Exercise LEVEL 1

// Question 1
let firstPara = document.querySelector('p');
console.log(firstPara)

// Question 2
let para1 = document.querySelector('#para1')
let para2 = document.querySelector('#para2')
let para3 = document.querySelector('#para3')
let para4 = document.querySelector('#para4')

// console.log(para1, para2, para3, para4)

// Question 3
let paraAll = document.querySelectorAll('p');
// console.log(paraAll)

// Question 4
paraAll.forEach(item=>{
    // console.log(item.textContent)
})

// Question 5
para4.textContent = "Fourth Paragraph";

// Question 6
para1.setAttribute('style', 'color: green')
para1.setAttribute('id', 'newpara1')
para2.id = 'newpara2'
para3.className = 'para3Class';
para4.setAttribute('class', 'para4class');
para1.className = 'para1Class'
para2.classList.add('classlist2', 'moreclasslistclass')
para4.classList.remove('para4class');



// Exercise LEVEL 2
// Question 1
para2.style.color = 'blue'
para4.style.backgroundColor = 'green'
para4.setAttribute('style', 'text-transform: upperCase; background-color : black; font-size : 40px')

// console.log(para1, para2, para3, para4)

// Question 2
let allParagraph = document.querySelectorAll('p');
// console.log(allParagraph)
for(i=0; i < allParagraph.length; i++){
    if(i%2 == 0){
        allParagraph[i].style.color = 'green';
    }
    else{
        allParagraph[i].style.color = 'red'
    }
    allParagraph[i].textContent = `this is the new paragraph${i+1}`;
    allParagraph[i].id = `newID${i+1}`;
    allParagraph[i].classList.add('genericClass');
}

console.log(para1, para2, para3, para4)



