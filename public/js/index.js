import { login, logout } from './login';


//DOM ELEMENTS
const loginForm = document.querySelector('.form');
const logOutbtn = document.querySelector('nav._logout-btn')

//DELEGATION
if(loginForm)
  loginForm.addEventListener('submit', e => {
      e.preventDefault();
      const emailid = document.getElementById('emailid').value;
      const password = document.getElementById('password').value;
      login(emailid, password);
  });
  
  if(logOutbtn) logOutbtn.addEventListener('click',logout);