
// call elements

//for landing page

const mainWelcome = document.querySelector('.mainDivWel');
const signBtn = document.querySelector('.sign');

//for signup page
const mainSignUpPage = document.querySelector('.mainSignUpDiv');
const signUpBack = document.querySelector('.backSign');




// element event listner
signBtn.addEventListener('click', remWelcome);// to remove main whenclicked signup

signUpBack.addEventListener('click', remSignUp);// back btn






// fuccntion for removing welcome as user presses signup
function remWelcome() {
mainWelcome.classList.add("mainDivWelAfter");
mainSignUpPage.classList.add("mainSignUpAfter");
}


///funtion for back btn in signup page

function remSignUp() {
mainWelcome.classList.remove("mainDivWelAfter");
mainSignUpPage.classList.remove("mainSignUpAfter");


}


//creaeted page
const accCreated = document.querySelector('.accMain');
const createAccBtn = document.querySelector('.createAcc');

// inputs

const errorSign = document.querySelector('.errorSign');
const nameUser = document.querySelector('.firstName');
const emailUser = document.querySelector('.emailSignUp');
const passOne = document.querySelector('.passwordSignUp');

//for validation in form 

function submitClick() {

    createAccBtn.addEventListener('click',(e) => {
        e.preventDefault();
        if(nameUser.value.length == 0){
           errorSign.innerText = "Name empty" ;

        }
        else if(emailUser.value.length == 0){
           
            errorSign.innerText = "Email empty" ;

        }
        else if(passOne.value.length < 8 ){
            
            errorSign.innerText = "Password must contain atleast 8 letters";

        }
       
        else{
            accCreated.classList.add("accCreatedAfter");
            mainSignUpPage.classList.remove("mainSignUpAfter");
                // for local storage

            
                localStorage.setItem('name', nameUser.value);
                localStorage.setItem('email', emailUser.value);
                localStorage.setItem('password', passOne.value);

                                       
            
            
        }
    });

}
submitClick();



