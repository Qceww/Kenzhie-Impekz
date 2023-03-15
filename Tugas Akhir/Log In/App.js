const inputUsername = document.getElementById('inputUsername')
const inputPassword = document.getElementById('inputPassword')

const inputUsernameRegis = document.getElementById('inputUsernameRegis')
const inputPasswordRegis = document.getElementById('inputPasswordRegis')
const inputEmailRegis = document.getElementById('inputEmailRegis')
const inputRepasswordRegis = document.getElementById('inputRepasswordRegis')
const inputAgeRegis = document.getElementById('inputAgeRegis')
const inputPolicy = document.getElementById('policy')

const register = document.getElementById('register')
const buttonSubmit = document.getElementById('submit')
const buttonRegis = document.getElementById('submit-register')


const divError = document.getElementById('divError')
const divErrorRegis = document.getElementById('divErrorRegis')

const menu = document.querySelector('#menuBar');
    const menuLinks = document.querySelector('.dropdown');

    menu.addEventListener('click', function() {
        menu.classList.toggle("fa-xmark");
        menu.classList.toggle('is-active');
        menu.classList.toggle("fa-bars");
        menuLinks.classList.toggle('active');
    });


buttonSubmit.addEventListener('click', (event)=>{
    event.preventDefault();
    
    let errorText = ""
    
    const usernameValue = inputUsername.value
    if(usernameValue == ""){
        errorText = "Enter the correct username or password"
    }
    
    const passwordValue = inputPassword.value
    if(passwordValue.length < 8){
        errorText = "Enter the correct username or password";
    }

    if(errorText == "") location.href = "https://www.youtube.com" 
    
    divError.innerHTML = errorText
    
})

function gantiRegister(){
    let containerRegister = document.getElementsByClassName('container-register')
    let containerLogin = document.getElementsByClassName('container-login')
    containerLogin[0].style.display = 'none'
    containerRegister[0].style.display = 'flex'
}

function gantiLogin(){
    let containerRegister = document.getElementsByClassName('container-register')
    let containerLogin = document.getElementsByClassName('container-login')
    containerLogin[0].style.display = 'flex'
    containerRegister[0].style.display = 'none'
}

buttonRegis.addEventListener('click', (event)=>{
    event.preventDefault()

    let errorText1 = ""
    
    const usernameValue = inputUsernameRegis.value
    if(usernameValue == ""){
        errorText1 = "Enter the correct username"
    }

    const emailValue = inputEmailRegis.value
    if(!emailValue.includes('@gmail.com')){
        errorText1 = "Enter the correct Gmail account"
    }
    
    const ageValue = inputAgeRegis.value
    if(ageValue < 12){
        errorText1 = "Should be 12 or older"
    }

    const passwordValue = inputPasswordRegis.value
    if(passwordValue.length < 8){
        errorText1 = "Enter the correct password";
    }

    const repasswordValue = inputRepasswordRegis.value
    if(repasswordValue != passwordValue){
        errorText1 = "Password doesn't match";
    }
    
    if(inputPolicy.checked != true){
        errorText1 = "Accept the terms and conditions";
    }



    if(errorText1 == "") location.href = "https://www.youtube.com" 
    
    divErrorRegis.innerHTML = errorText1

})