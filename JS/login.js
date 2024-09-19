// console.log("JS file added");

// document.getElementById('').addEventListener('click', function())

// search: form submit reloading the page

// step-1: set event handler
document.getElementById("btn-login").addEventListener("click", function(event){
    // step-2: prevent deafult behavior (prevent reloading browser when clicked button inside form tag)
    event.preventDefault(); //vejailla to beginners
    console.log("Login Button clicked");

    // step-3: get the phone number
    const phoneNumber = document.getElementById('phone-number').value;
    console.log(phoneNumber);
});
