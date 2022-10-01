let menu_button = document.querySelector('#menu-button')
let icon = document.getElementById('menu-btn')
let menu_check = document.querySelector('#main-btn')
let men_txt = document.querySelector('.men-txt')

menu_button.addEventListener('click', function(){
    if(icon.className = 'fas fa-bars'){
        menu_button.classList.toggle('active-menu')
    }
})