let searchForm = document.querySelector(".searchForm");
let FormBtn = document.querySelector("#loginBtn");
let loginForm = document.querySelector(".LoginFormContainer");
let formClose = document.querySelector("#FormClose");
let menu = document.querySelector("#menuBtn");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
    menu.classList.toggle("fa-times");
    navbar.classList.toggle("active");
    searchForm.classList.remove("active");
}

document.querySelector("#searchBtn").onclick = () => {
    searchForm.classList.toggle("active");
    menu.classList.remove("fa-times");
    navbar.classList.remove("active");
}; 


// Login 

FormBtn.addEventListener("click", () => {
    loginForm.classList.add("active");
    searchForm.classList.remove("active");
    menu.classList.remove("fa-times");
    navbar.classList.remove("active");

});
formClose.addEventListener("click", () => {
    loginForm.classList.remove("active");
});



// Validate 

var nameError = document.getElementById('name-error');
var phoneError = document.getElementById('phone-error');
var emailError = document.getElementById('email-error');
var messageError = document.getElementById('message-error');
var submitError = document.getElementById('submit-error');






function validateName(){
    var name = document.getElementById('contact-name').value;

    if(name.lenght == 0){
        nameError.innerHTML = 'Name is required';
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = 'Write full name';
        return false;
    }
    nameError.innerHTML = '<i class="fa-solid fa-check"></i>';
    return true;
}







function validatePhone(){
    var phone = document.getElementById('contact-phone').value;
    if(phone.length == 0){
        phoneError.innerHTML = 'Phone no is required';
        return false;
    }
    if(phone.length !== 10){
        phoneError.innerHTML = 'Phone no should be 10 digits';
        return false;
    }
    if(!phone.match(/^[0-9]{10}$/)){
        phoneError.innerHTML = 'Only numbers.';
        return false;
    }
    phoneError.innerHTML = '<i class="fa-solid fa-check"></i>';
    return true;
}






function validateEmail(){
    var email = document.getElementById('contact-email').value;

    if(email.length == 0){
        emailError.innerHTML = 'Email is required';
        return false;
    }
    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML = 'Email Invalid';
        return false;
    }
    emailError.innerHTML = '<i class="fa-solid fa-check"></i>';
    return true;  
}


function validateMessage(){
    var message = document.getElementById('contact-message').value;
    var required = 20;
    var left = required - message.length;

    if(left > 0){
        messageError.innerHTML = left + ' more characters required';
        return false;
    }

    messageError.innerHTML = '<i class="fa-solid fa-check"></i>';
    return true;
}




function validateForm(){
    if(!validateName() || !validatePhone() || !validateEmail() || !validateMessage()){
        submitError.style.display = 'block';
        submitError.innerHTML = 'Please fix error to submit';
        setTimeout(function(){submitError.style.display = 'none';}, 3000);
        return false;
    }
};




// 
// $('.wall').jaliswall({
//     item : '.wall-item',
//     columnClass : '.wall-column'
// });




// var pathEls = document.querySelectorAll('path');
// for (var i = 0; i < pathEls.length; i++) {
//   var pathEl = pathEls[i];
//   var offset = anime.setDashoffset(pathEl);
//   pathEl.setAttribute('stroke-dashoffset', offset);
//   anime({
//     targets: pathEl,
//     strokeDashoffset: [offset, 0],
//     duration: anime.random(1000, 3000),
//     delay: anime.random(0, 2000),
//     loop: true,
//     direction: 'alternate',
//     easing: 'easeInOutSine',
//     autoplay: true
//   });
// }

// slider blog







//

const nextButton = document.getElementById('next');

nextButton.onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').appendChild(lists[0]);
}
document.getElementById('prev').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').prepend(lists[lists.length - 1]);
}