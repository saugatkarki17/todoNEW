
// element call
const loginBtn = document.querySelector('.btn-log');
const usernameLogin = document.querySelector('.username');
const passwordLogin = document.querySelector('.password');
const errorDiv = document.querySelector('.errorDiv');
const errorDivp = document.querySelector('.pError');

// getting pe and username

const username = localStorage.getItem('name');
const email = localStorage.getItem('email');
const password = localStorage.getItem('password');
const alpha = document.querySelector('.alpha-div');
const main = document.querySelector('.main-div');
// element listner

loginBtn.addEventListener('click', logbtn);

//function

function logbtn() {
if(usernameLogin.value == username || passwordLogin.value == password){
    main.classList.add("logAfter");
    alpha.classList.add("alphaAfter");
}
else {
errorDivp.innerText = "Please enter correct Username and Password";

}
}


// log in welcome

const weltext = document.querySelector('.wel-main');


weltext.innerText = "Welcome"+ " " + username + ", You have successfully logged in";
