




/** Ativar menu lateral em modo mobile */


const menuMobile = document.querySelector('.menu-mobile')
const body = document.querySelector('body')

menuMobile.addEventListener('click', () => {
    menuMobile.classList.contains("bi-list") 
    ? menuMobile.classList.replace("bi-list", "bi-x"): menuMobile.classList.replace("bi-x", "bi-list")

    body.classList.toggle("nav-menu-active")
})


// Alternar exibição do menu


const navItem = document.querySelectorAll('.nav-item')

navItem.forEach(item =>{
    item.addEventListener('click', () => {
        if(body.classList.contains("nav-menu-active")){
            body.classList.remove("nav-menu-active")
            menuMobile.classList.replace("bi-x", "bi-list" )
        }
    })
})