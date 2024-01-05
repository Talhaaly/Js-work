const email = document.getElementById('email');
const Password = document.getElementById('Password');
const loginBtn = document.getElementById('loginBtn');
const clickHere = document.getElementById('clickHere')

const
    loginHandler = () => {
        if (!email.value && !Password.value) {
            alert('Fill Out Remaining Fields')
        } else {
            alert('Login successfully, Now you are diverting to Home page.')
            window.location.href = '../Home/home.html'
        }
    }

loginBtn.addEventListener('click', loginHandler);


function clickeHereHandler() {
    window.location.href = '../signup/signUp.html'
}

clickHere.addEventListener('click', clickeHereHandler)