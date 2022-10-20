import {initialLoad} from "./loadHome";
import {menuLoad} from "./loadMenu";
import {homeReload} from "./reloadHome";
import {contactLoad} from "./loadContact";

initialLoad();

const homeBtn = document.querySelector('.home');
homeBtn.addEventListener('click',(e) => {
    e.preventDefault();
    homeReload();
});
const menuBtn = document.querySelector('.menu');
menuBtn.addEventListener('click',(e) => {
    e.preventDefault();
    menuLoad();
});
const contactBtn = document.querySelector('.contact');
contactBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    contactLoad();
});


