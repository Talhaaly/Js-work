const logOut = document.getElementById('logOut');

const logoutHandler =  () => {
window.location.href = '../login/login.html'
}

logOut.addEventListener('click', logoutHandler)