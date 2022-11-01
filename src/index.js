import createContact from './contact';
import createHome from './home'
import createMenu from './menu'
import logoImg from './logo.png'



const body = document.querySelector('body');


const logoDiv = document.createElement('div')
logoDiv.classList.add('logoDiv');
body.appendChild(logoDiv);

let logo = document.createElement('img');
logo.classList.add('logo');
logo.src = logoImg;
logoDiv.appendChild(logo);

const nav = document.createElement('div');
nav.classList.add('nav');

body.appendChild(nav);

const home = document.createElement('div');
home.classList.add('home');
home.textContent = 'Home'
nav.appendChild(home);

document.querySelector('.home').addEventListener('click', () =>{
    content.innerHTML = '';
    createHome()
});

const menu = document.createElement('div');
menu.classList.add('menu');
menu.textContent = 'Menu'
nav.appendChild(menu);

document.querySelector('.menu').addEventListener('click', ()=> {
    content.innerHTML = '';
    createMenu()
});

const contact = document.createElement('div');
contact.classList.add('contact');
contact.textContent = 'Contact'
nav.appendChild(contact);

document.querySelector('.contact').addEventListener('click', ()=> {
    content.innerHTML = '';
    createContact();
})

const content = document.querySelector('#content');
body.appendChild(content);

createHome()




