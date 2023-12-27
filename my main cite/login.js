const Wrapper = document.querySelector('.wrapper');
const RegisterLink = document.querySelector('.register-link');
const LoginLink = document.querySelector('.login-link');

RegisterLink.addEventListener('click',()=>{
    Wrapper.classList.add('active');
});

LoginLink.addEventListener('click',()=>{
    Wrapper.classList.remove('active');
});