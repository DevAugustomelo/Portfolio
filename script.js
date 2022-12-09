




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



    // Contador de digitos 

    function contaTexto() {
        const texto = document.form.mensagem.value;
        document.getElementById('texto').innerText = texto.length; // texto.split(/\s+/).length  para contar palavras ou (/\n/) para linhas.
      }


      // Receber seletor contato

      const forms = document.getElementById('contato-forms');

      // cria um array para objetos json 
      let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];


      // listar mensagens ao carregar a página
      usuarios.forEach((element)=>{
        document.getElementById("listar-mensagem").insertAdjacentHTML('beforeend', "Nome: "+ element.nome + "<br/>"+ "Email: " + element.email + "<br/><br/>" +  element.mensagem + "<hr/> <br/>" )
      })

      // adicionar no localStorage ao enviar formulário
      forms.addEventListener("submit", (e) => {
        console.log("cliquei")
        
        
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const msg = document.getElementById('mensagem').value;

        //não recarregar a página
        e.preventDefault();
        // console.log(nome)
        // console.log(email)
        // console.log(msg)

        

        // adicionando objetos dentro do array
        usuarios.push({nome, email, mensagem:msg})

        // muda a estrutura da variável para objetos json string
        localStorage.setItem("usuarios", JSON.stringify(usuarios))

        // lista no final as mensagens enviadas
        document.getElementById("listar-mensagem").insertAdjacentHTML('beforeend', "Nome: "+ nome + "<br/>"+ "Email: " + email + "<br/><br/>" +  msg + "<hr/> <br/>" )

      })





      // Mostrar ou Esconder section de Mensagens do contato

      var btn = document.querySelector("#mostra-esconde")
      var section = document.querySelector(".mensagem-div")

      btn.addEventListener('click', () => {
        section.style.display != "none" ? section.style.display = "none": section.style.display = "block"

      })


      // Excluir mensagens

      var excluir = document.querySelector('#excluir-mensagens')

      excluir.addEventListener('click', (excluir) =>{
        localStorage.clear()
        
      })