const video = document.getElementById("videowan");
const muteButton = document.getElementById("muteButton");

muteButton.addEventListener("click", () => {
  if (video.muted) {
    video.muted = false;
  } else {
    video.muted = true;
  }
});

/// Produto

const productContainers = [...document.querySelectorAll('.filmes-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width - 750;

  nxtBtn[i].addEventListener('click', () => {
    item.scrollLeft += containerWidth;
  })

  preBtn[i].addEventListener('click', () => {
    item.scrollLeft -= containerWidth;
  })
})

///Cloudinei///

// Função para trocar a imagem
function trocarImagem() {
  var imagem = document.getElementById("minhaImagem");

  // Verifica a imagem atual
  if (imagem.src.endsWith("img/volumeoff.png")) {
    // Se for a imagem 1, mude para a imagem 2
    imagem.src = "img/volumeon.png";
  } else {
    // Caso contrário, mude de volta para a imagem 1
    imagem.src = "img/volumeoff.png";
  }
}

///Cloudinei///

// Função para trocar a imagem
function trocarCoração() {
  var imagem = document.getElementById("coração-favorito");

  // Verifica a imagem atual
  if (imagem.src.endsWith("img/nada.png")) {
    // Se for a imagem 1, mude para a imagem 2
    imagem.src = "img/coração cheio.png";
  } else {
    // Caso contrário, mude de volta para a imagem 1
    imagem.src = "img/nada.png";

  }

}
