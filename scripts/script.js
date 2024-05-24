 // Função para carregar a página inicial ao abrir o site
window.onload = function() {
navigateTo('nav/home.html'); // Substitua 'home.html' pelo URL da sua página inicial
};
    
// Função para navegar entre as páginas
function navigateTo(page) {
  var content = document.getElementById('content');
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      content.innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", page, true);
  xhttp.send();
}

function carregarProdutos(url) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.onreadystatechange = function() {
      if (xhr.readyState == 4 && xhr.status == 200) {
          var conteudoPrincipal = document.getElementById("conteudoPrincipal");
          conteudoPrincipal.innerHTML = xhr.responseText;

          // Adiciona um event listener para fechar a página carregada ao clicar fora dela
          document.addEventListener('click', fecharAoClicarFora);
          document.addEventListener('touchstart', fecharAoClicarFora);
      }
  };
  xhr.send();
}

function fecharAoClicarFora(event) {
  var conteudoPrincipal = document.getElementById("conteudoPrincipal");
  // Verifica se o clique ocorreu fora da área de conteúdo principal
  if (!event.target.closest('#conteudoPrincipal')) {
      // Fecha a página carregada
      conteudoPrincipal.innerHTML = '';
      // Remove o event listener após fechar a página
      document.removeEventListener('click', fecharAoClicarFora);
      document.addEventListener('touchstart', fecharAoClicarFora);
  }
}

function carregarProdutos1() {
  carregarProdutos("nav/produtos.html");
}

function carregarProdutos2() {
  carregarProdutos("nav/servicos.html");
}

function carregarProdutos3() {
  carregarProdutos("nav/sobre.html");
}

function carregarProdutos4() {
  carregarProdutos("nav/prcred.html");
}