const userName = document.getElementById('userName');
const email = document.getElementById('email');
const Password = document.getElementById('Password');
const cPassword = document.getElementById('cPassword');
const submitBtn = document.querySelector('#submitBtn')


const register = () => {
if(!userName.value && !email.value || !Password.value){
alert('Fill Out Remaining Fields')
}else {
    alert('Register successfully, Now you are diverting to login page.')
    window.location.href = '../login/login.html'
}
}

submitBtn.addEventListener('click', register );