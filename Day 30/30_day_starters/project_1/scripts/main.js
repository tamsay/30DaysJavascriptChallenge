let body = document.querySelector('body')
let firstName = document.querySelector('#firstName')
let lastName = document.querySelector('#lastName')
let email = document.querySelector('#email')
let password = document.querySelector('#password')
let telephone = document.querySelector('#telephone')
let bio = document.querySelector('#bio')
let submit = document.querySelector('#submit')
let bioForm = document.querySelector('#bioForm')
let label1 = document.querySelector('#label1')
let label2 = document.querySelector('#label2')
let label3 = document.querySelector('#label3')
let label4 = document.querySelector('#label4')
let label5 = document.querySelector('#label5')


    let error1 = document.createElement('p')
    error1.className = 'error'

    firstName.addEventListener('blur', ()=>{
        
        let nameRegex = /[0-9*&%^$#@|+_!?><()[\]{},.]+/gi
        let nameValidation = nameRegex.test(firstName.value)

            error1.style.display = 'none'
            error1.innerText = ''
            bioForm.insertBefore(error1, label1);

        if(firstName.value === ''){
            firstName.style.border = '1px solid black'
                firstName.style.marginBottom = '20px'
        }
        else if(nameValidation === false){
            if(firstName.value.length < 3 && error1.style.display === 'none'){
                
                error1.innerText = 'First name must be alphabetic and contain 3 - 16 characters';
                error1.style.display = 'block'
                firstName.style.marginBottom = '2px'
                firstName.style.border = '2px solid red'
            }
            else if(firstName.value.length >= 3 && firstName.value.length <=16){
                firstName.style.border = '5px solid green'
                firstName.style.marginBottom = '20px'
            }
            else{
                error1.innerText = 'First name must be alphabetic and contain 3 - 16 characters';
                error1.style.display = 'block'   
                firstName.style.border = '2px solid red'
                firstName.style.marginBottom = '2px'  
            }
        } 

        else {
            error1.innerText = 'Invalid Name Input';
            error1.style.display = 'block'
            firstName.style.border = '2px solid red'
            firstName.style.marginBottom = '2px'
        }
    })

    let error2 = document.createElement('p')
        error2.className = 'error'
    lastName.addEventListener('blur', ()=>{
        

        let nameRegex = /[0-9*&%^$#@|+_!?><()[\]{},.]+/gi
        let nameValidation = nameRegex.test(lastName.value)

            error2.style.display = 'none'
            error2.innerText = ''
            bioForm.insertBefore(error2, label2);

            if(lastName.value === ''){
                lastName.style.border = '1px solid black'
                    lastName.style.marginBottom = '20px'
            }
            else if(nameValidation === false){
            if(lastName.value.length < 3 && error2.style.display === 'none'){
                
                error2.innerText = 'Last name must be alphabetic and contain 3 - 16 characters';
                error2.style.display = 'block'
                lastName.style.border = '2px solid red'
                lastName.style.marginBottom = '2px'
            }
            else if(lastName.value.length >= 3 && lastName.value.length <=16){
                lastName.style.border = '5px solid green'
                lastName.style.marginBottom = '20px'
            }
            else{
                error2.innerText = 'Last name must be alphabetic and contain 3 - 16 characters';
                error2.style.display = 'block'   
                lastName.style.marginBottom = '2px'  
                lastName.style.border = '2px solid red'
            }
        } 

        else {
            error2.innerText = 'Invalid Name Input';
            error2.style.display = 'block'
            lastName.style.border = '2px solid red'
            lastName.style.marginBottom = '2px'
        }
    })
    

    let error3 = document.createElement('p')
        error3.className = 'error'

    email.addEventListener('blur', ()=>{
        let nameRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gi
        let nameValidation = nameRegex.test(email.value)

            error3.style.display = 'none'
            error3.innerText = ''
            bioForm.insertBefore(error3, label3);
        if(email.value === ''){
            email.style.border = '1px solid black'
                email.style.marginBottom = '20px'
        }
        else if(nameValidation){
                email.style.border = '5px solid green'
                email.style.marginBottom = '20px'
        } 

        else {
            error3.innerText = 'Email must be a valid address e.g. example@example.com';
            error3.style.display = 'block'
            email.style.border = '2px solid red'
            email.style.marginBottom = '2px'
        }
    })

    let error4 = document.createElement('p')
        error4.className = 'error'

    password.addEventListener('blur', ()=>{
        let nameRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,20}$/gi
        let nameValidation = nameRegex.test(password.value)

            error4.style.display = 'none'
            error4.innerText = ''
            bioForm.insertBefore(error4, label4);
            if(password.value === ''){
                password.style.border = '1px solid black'
                    password.style.marginBottom = '20px'
            }
            else if(nameValidation){
                password.style.border = '5px solid green'
                password.style.marginBottom = '20px'
        } 
        else {
            error4.innerText = 'Password must be alphanumeric and must include at least one special character (@,_,-). It must be between 6 - 20 characters';
            error4.style.display = 'block'
            password.style.border = '2px solid red'
            password.style.marginBottom = '2px'
        }
    })
    

    let error5 = document.createElement('p')
        error5.className = 'error'

    telephone.addEventListener('blur', ()=>{
        let nameRegex = /^\D?(\d{3})\D?\D?(\d{4})\D?(\d{4})$/gi
        let nameValidation = nameRegex.test(telephone.value)
            error5.style.display = 'none'
            error5.innerText = ''
            bioForm.insertBefore(error5, label5);
            if(telephone.value === ''){
                telephone.style.border = '1px solid black'
                    telephone.style.marginBottom = '20px'
            }
            else if(nameValidation){
                telephone.style.border = '5px solid green'
                telephone.style.marginBottom = '20px'
        } 
        else {
            error5.innerText = 'A valid telephone number (11 digits or 333-3333-3334)';
            error5.style.display = 'block'
            telephone.style.border = '2px solid red'
            telephone.style.marginBottom = '2px'
        }
    })
    
    let error6 = document.createElement('p')
        error6.className = 'error'

    bio.addEventListener('blur', ()=>{
        let nameRegex = /[a-zA-Z0-9_-]{8,50}/gi
        let nameValidation = nameRegex.test(bio.value)
            error6.style.display = 'none'
            error6.innerText = ''
            bioForm.insertBefore(error6, submit);

            if(bio.value === ''){
                bio.style.border = '1px solid black'
                    bio.style.marginBottom = '20px'
            }
            else if(nameValidation){
                bio.style.border = '5px solid green'
                bio.style.marginBottom = '20px'
        } 
        else {
            error6.innerText = 'Bio must contain only alphanumeric cases, underscore, hyphens and be 8 - 50 characters';
            error6.style.display = 'block'
            bio.style.border = '2px solid red'
            bio.style.marginBottom = '2px'
        }
    })
    


