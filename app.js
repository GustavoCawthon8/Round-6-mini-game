const btnAndad = document.getElementById("btnAndad");
const btnParar = document.getElementById("btnParar");
const jogadores = document.querySelectorAll(".jogadores");
const boneca = document.getElementById("boneca");
const cantar = document.getElementById("cantar");

let andando = false;
let velocidade = 1;
let olhando = false;

jogadores.forEach((jogador) => {
  jogador.style.bottom = "-200px"; 
});

const jogadorAndar = () => {
  if (andando) {
    jogadores.forEach((jogador) => {
      const bottomAtual = parseInt(jogador.style.bottom || 0, 10);
      jogador.style.bottom = bottomAtual + velocidade + "px";
    });
    requestAnimationFrame(jogadorAndar);
  }
};

const bonecaCantar = () => {
  olhando = true;
  boneca.src = "./img/boneca1.png";
  cantar.play();
  
  setTimeout(() => {
    cantar.pause();
    cantar.currentTime = 0;
    olhando = false;
    boneca.src = "./img/boneca2.png"; //

    setTimeout(() => {
      if (andando) {
        removerJogador(); 
      }
      bonecaCantar(); 
    }, 2000); 
  }, 5000); 
};

const removerJogador = () => {
  const jogador = jogadores[0]; 
  if (jogador) {
    jogador.remove(); 
  }
};

btnAndad.addEventListener("click", () => {
  if (!andando) {
    andando = true;
    jogadorAndar();
    bonecaCantar(); 
  }
});

btnParar.addEventListener("click", () => {
  andando = false;
  cantar.pause();
  cantar.currentTime = 0;
  olhando = false;
  boneca.src = "./img/boneca2.png"; 
});