console.log('Olá mundo!');
// Criando um novo elemento 
let novoElemento = document.createElement('h1');
// Alterando o conteúdo de texto do elemento
novoElemento.innerText = 'Olá, gostou da chuva???';
// Selecionando o elemento body
let elementoBody = document.body;
// Colocando o novo elemento no body
elementoBody.appendChild(novoElemento);
novoElemento.style.backgroundColor = 'red';
novoElemento.style.color = 'white';


// Cria um fundo preto e remove margem da página
document.body.style.margin = "0";
document.body.style.overflow = "hidden";
document.body.style.background = "#000";

// Emojis personalizados
const emojis = ["😎", "🚀", "👾", "🌈", "🎮", "🧠"];
const emojiCount = 100;

for (let i = 0; i < emojiCount; i++) {
  criarEmoji();
}

function criarEmoji() {
  const emoji = document.createElement("div");
  emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];
  emoji.style.position = "fixed";
  emoji.style.fontSize = `${Math.random() * 30 + 20}px`;
  emoji.style.left = `${Math.random() * window.innerWidth}px`;
  emoji.style.top = `-50px`;
  emoji.style.color = `hsl(${Math.random() * 360}, 100%, 70%)`;
  emoji.style.userSelect = "none";
  emoji.style.pointerEvents = "auto";
  emoji.style.transition = "transform 0.2s";

  // CLICAR no emoji faz ele girar e desaparecer
  emoji.onclick = () => {
    emoji.style.transform = "scale(0) rotate(720deg)";
    setTimeout(() => {
      emoji.remove();
      criarEmoji();
    }, 300);
  };

  document.body.appendChild(emoji);

  let speed = Math.random() * 2 + 1;
  let drift = (Math.random() - 0.5) * 0.5; // movimento horizontal

  function cair() {
    const top = parseFloat(emoji.style.top);
    const left = parseFloat(emoji.style.left);
    if (top < window.innerHeight + 50) {
      emoji.style.top = `${top + speed}px`;
      emoji.style.left = `${left + drift}px`;
      requestAnimationFrame(cair);
    } else {
      emoji.remove();
      criarEmoji();
    }
  }

  cair();
}
