'use strict';

let buttonEL = document.querySelectorAll(".show-modal");
let popup = document.querySelector(".modal");
let overlay = document.querySelector(".overlay");
let exit = document.querySelector(".close-modal");

for (let i= 0; i<buttonEL.length; i++) {
    buttonEL[i].addEventListener('click', open)
}

exit.addEventListener('click', close);
overlay.addEventListener('click', close);

document.addEventListener('keydown', (event)=>{
 //the actions will be taken no matter which key I press. So I need to be more specific
    if(event.key === "Escape" && !popup.classList.contains('Hidden')) {
        close();

    }

})


 function close(){
     popup.classList.add('hidden');
     overlay.classList.add('hidden');
 }
function open(){
     popup.classList.remove("hidden");
    overlay.classList.remove("hidden");
}