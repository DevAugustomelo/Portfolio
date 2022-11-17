






class MenuLateral extends HTMLElement {
  connectedCallback() {

    this.innerHTML = `
  <aside id="header">  
    <section class="profile">
    <img
      src="https://avatars.githubusercontent.com/u/99753415?v=4"
      alt="foto-perfil"
    />
    <h1>Augusto Melo</h1>

    <!-- mt-4 corrige a margin top no tamanho 4 e text-center cetraliza os itens através do bootstrap -->
    <div class="social-links mt-4 text-center">
      <a href="https://www.linkedin.com/in/augusto-melo-/" target="_blank">
        <i class="bi bi-linkedin"></i>
      </a>
      <a href="https://github.com/DevAugustomelo" target="_blank">
        <i class="bi bi-github"></i>
      </a>
    </div>
  </section>

  <nav id="nav-bar" class="nav-menu">
    <ul class="nav flex-column">
      <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="#"><i class="bi bi-house" aria-hidden="true"></i> Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/index.html" target="_blank"><i class="bi bi-person" aria-hidden="true"></i> Sobre</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#"><i class="bi bi-list-check" aria-hidden="true"></i> Habilidades</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#"><i class="bi bi-file-earmark" aria-hidden="true"></i> Currículo</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#"><i class="bi bi-collection" aria-hidden="true"></i> Portfólio</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#"><i class="bi bi-envelope" aria-hidden="true"></i> Contato</a>
      </li>
    </ul>
  </nav>
</aside>
    `;
  }
}


class Footer extends HTMLElement {
    connectedCallback() {


      this.innerHTML = `
      <footer class="rodape"> 
      <strong> © 2022 Copyright :<a id="sig" href="/">AMDev</a> </strong>  
      

      <div class="links">
        <a href="https://www.linkedin.com/in/augusto-melo-/" target="_blank">
          <i class="bi bi-linkedin"></i>
        </a>
        <a href="https://github.com/DevAugustomelo" target="_blank">
          <i class="bi bi-github"></i>
        </a>
    </div>

    </footer>
    `; }
  }


customElements.define('menu-lateral', MenuLateral);
customElements.define('nav-footer', Footer);