let body = document.querySelector('body')
let firstName = document.querySelector('#firstName')
let lastName = document.querySelector('#lastName')
let email = document.querySelector('#email')
let password = document.querySelector('#password')
let telephone = document.querySelector('#telephone')
let bio = document.querySelector('#bio')
let submit = document.querySelector('#submit')
let bioForm = document.querySelector('#bioForm')
let label = document.querySelector('#label1')
let errorNotification = document.createElement('p')
errorNotification.style.color = 'red'

let firstNameRegex = /^[a-z][a-z-]*/gi
// firstName.addEventListener('input', ()=>{

    firstName.addEventListener('blur', ()=>{
        console.log(firstName.value)
        let nameValidation = firstNameRegex.test(`${firstName.value}`)
        console.log(nameValidation)

        errorNotification.style.display = 'none'
        errorNotification.innerText = ''
        bioForm.insertBefore(errorNotification, label);

        // let nameValidation = firstNameRegex.test(firstName.value)
        // console.log(nameValidation)

        if(firstName.value.length < 3 && errorNotification.style.display === 'none'){
            errorNotification.innerText = 'error, name must be greater than 3 characters';
            errorNotification.style.display = 'block'
            firstName.style.border = '1px solid red'

        }
        else if(firstName.value.length >= 3 && firstName.value.length <=16){
            console.log('valid input')
            firstName.style.border = '1px solid green'
        }
        else{
            errorNotification.innerText = 'error, name must be less than 16 characters';
            errorNotification.style.display = 'block'   
            firstName.style.border = '1px solid red'
     
        }
    })
    
// })



