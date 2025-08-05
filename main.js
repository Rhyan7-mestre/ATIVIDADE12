console.log('Olá mundo!');
// Criando um novo elemento 
let novoElemento = document.createElement('h1');
// Alterando o conteúdo de texto do elemento
novoElemento.innerText = 'Hello, World! English! (Inglês) Ok?!';
// Selecionando o elemento body
let elementoBody = document.body;
// Colocando o novo elemento no body
elementoBody.appendChild(novoElemento);
novoElemento.style.backgroundColor = 'blue';
novoElemento.style.color = 'yellow';
// Cria um fundo preto e remove margem da página
document.body.style.margin = "0";
document.body.style.overflow = "hidden";
document.body.style.background = "black";

// Lista de emojis para cair
const emojis = ["✨", "🔥", "💫", "🎉", "💥", "🌀", "🌟"];
const emojiCount = 80;

for (let i = 0; i < emojiCount; i++) {
  criarEmoji();
}

function criarEmoji() {
  const emoji = document.createElement("div");
  emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];
  emoji.style.position = "fixed";
  emoji.style.fontSize = `${Math.random() * 24 + 16}px`;
  emoji.style.left = `${Math.random() * window.innerWidth}px`;
  emoji.style.top = `-50px`;
  emoji.style.color = `hsl(${Math.random() * 360}, 100%, 70%)`;
  emoji.style.pointerEvents = "none";
  emoji.style.userSelect = "none";

  document.body.appendChild(emoji);

  let speed = Math.random() * 2 + 1;

  function cair() {
    const posTop = parseFloat(emoji.style.top);
    if (posTop < window.innerHeight + 50) {
      emoji.style.top = `${posTop + speed}px`;
      requestAnimationFrame(cair);
    } else {
      emoji.remove();
      criarEmoji(); // Loop contínuo
    }
  }

  cair();
}
