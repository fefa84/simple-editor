

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

console.log('HELLO 🚀')


const textarea = document.querySelector('.textarea--js');
const save = document.querySelector('.save--js');
const load= document.querySelector('.load--js');

save.addEventListener('click',(e)=>{
    e.preventDefault();
    localStorage.setItem('entry',textarea.value);
    if (textarea.value) {
        document.querySelector(".info--js").innerHTML="ℹ️";
    }else {
        document.querySelector(".info--js").innerHTML="";
    }
    
})


load.addEventListener('click',(e)=>{
    e.preventDefault();
    textarea.value= localStorage.getItem('entry');
})
    










