// console.log("JS file added");

// document.getElementById('').addEventListener('click', function())

// search: form submit reloading the page

// step-1: set event handler
document.getElementById("btn-login").addEventListener("click", function(event){
    // step-2: prevent deafult behavior (prevent reloading browser when clicked button inside form tag)
    event.preventDefault(); //vejailla to beginners
    // console.log("Login Button clicked");

    // step-3: get the phone number and pin number
    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;
    // console.log(phoneNumber, pinNumber);

    // step-4: validate phone or pin
    // This is not an ideal way for validation. This is temporary system for my project
    if(phoneNumber === '5' && pinNumber === '1234'){
        // console.log("you are logged in");
        // step-5: allow user to use the website
        window.location.href = './home.html';
    }
    else{
        alert("wrong phone number or pin");
    }
});
