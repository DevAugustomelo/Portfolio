




/** Ativar menu lateral em modo mobile */


const menuMobile = document.querySelector('.menu-mobile')
const body = document.querySelector('body')

menuMobile.addEventListener('click', () => {
  menuMobile.classList.contains("bi-list")
    ? menuMobile.classList.replace("bi-list", "bi-x") : menuMobile.classList.replace("bi-x", "bi-list")

  body.classList.toggle("nav-menu-active")
})


// Alternar exibição do menu


const navItem = document.querySelectorAll('.nav-item')

navItem.forEach(item => {
  item.addEventListener('click', () => {
    if (body.classList.contains("nav-menu-active")) {
      body.classList.remove("nav-menu-active")
      menuMobile.classList.replace("bi-x", "bi-list")
    }
  })
})


// Função para manter o item do menu ou navbar destacado dinamicamente. obs: usar onclick="active(this);". 

function active(tag) {
  var litag = document.getElementsByClassName('nav-item');
  for ( i = 0; i < litag.length; i++) {
    litag[i].classList.remove("active");
  }
  tag.classList.add("active")
}


// alert para campo não preenchido


// Receber seletor formulário de contato 

const forms = document.getElementById('contato-forms');

// cria um array para objetos json 
let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];


// listar mensagens ao carregar a página
usuarios.forEach((element) => {
  document.getElementById("listar-mensagem").insertAdjacentHTML('beforeend', "<b>Nome:</b> " + element.nome + "<br/>" + "<b>Email:</b> " + element.email + "<br/><br/>" + element.mensagem + "<hr/> <br/>")
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
  usuarios.push({ nome, email, mensagem: msg })

  // muda a estrutura da variável para objetos json string
  localStorage.setItem("usuarios", JSON.stringify(usuarios))

  // lista no final as mensagens enviadas
  document.getElementById("listar-mensagem").insertAdjacentHTML('beforeend', "<b>Nome:</b> " + nome + "<br/>" + "<b>Email:</b> " + email + "<br/><br/>" + msg + "<hr/> <br/>")


  // mostrar botão enviando
  const btnEnviar = document.querySelector('#btn-enviar')
  const btnEnviando = document.querySelector('#btn-enviando')
  const msgEnviada = document.querySelector('#msg-enviada')

  btnEnviar.style.display ="none"
  btnEnviando.style.display ="block"
  


  // atraso de 2s para mostrar o botão enviar novamente
  setTimeout( () =>{
    msgEnviada.style.display ="block"
    btnEnviar.style.display ="block"
    btnEnviando.style.display ="none"}, 2000);

  // remover o alert de mensagem eviada após 8 segundos
  setTimeout(()=> {
    msgEnviada.style.display ="none"

  }, 8000)

  forms.reset()


})


// Contador de digitos 

function contaTexto() {
  const texto = document.form.mensagem.value;
  document.getElementById('texto').innerText = texto.length; // texto.split(/\s+/).length  para contar palavras ou (/\n/) para linhas.
}


// Mostrar ou Esconder section de Mensagens do contato

var btn = document.querySelector("#mostra-esconde")
var section = document.querySelector(".mensagem-div")

btn.addEventListener('click', () => {
  section.style.display != "none" ? section.style.display = "none" : section.style.display = "block"

})

// Excluir mensagens

var excluir = document.querySelector('#excluir-mensagens')

excluir.addEventListener('click', () => {
  const resposta = window.confirm("Esta ação não poderá ser desfeita. Deseja continuar?");
  if(resposta == true){
    localStorage.clear()
    location.reload()
  }else{

  }
})


function idade(dia, mes, ano) {
  return new Date().getFullYear() - ano;

}

let idIdade = document.querySelector('#idade');

  idIdade.innerHTML = idade(05,01,1986) + " anos";