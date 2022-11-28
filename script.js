




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




// Add active class to the current button (highlight it)
// var header = document.getElementById("destacado");
// var btns = header.getElementsByClassName("nav-link");
// for (var i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", function() {
//   var current = document.getElementsByClassName("active");
//   current[0].className = current[0].className.replace(" active", "");
//   this.className += " active";
//   });
// }


function active(tag){
    var tag_li = document.getElementById('selected');
    var tag_a = tag_li.getElementsByTagName('a');
    for (var i = 0; i < tag_a.length; i++ )
    {
       tag_a[i].style.color = "";
    }
       tag.style.color = "#fff";
    }