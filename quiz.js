import { paises, construirGrafo } from './paises.js';
import { dijkstra } from './dijkstra.js';

const grafo = construirGrafo(paises);

function generateQuestion() {
  const questionContainer = document.getElementById("question");
  const optionsContainer = document.getElementById("options");
  const resultContainer = document.getElementById("result");

  // Limpa os elementos da pergunta e opções
  questionContainer.textContent = '';
  optionsContainer.innerHTML = '';
  resultContainer.textContent = '';

  // Escolhe dois países aleatórios
  const start = paises[Math.floor(Math.random() * paises.length)].pais;
  const end = paises[Math.floor(Math.random() * paises.length)].pais;

  // Calcula o caminho mais curto usando Dijkstra
  const { distances, previous } = dijkstra(grafo, start);

  // Constrói o caminho até o destino
  let caminho = [];
  let atual = end;

  while (atual) {
    caminho.unshift(atual);
    atual = previous[atual];
  }

  // Gera a pergunta baseada no próximo passo no caminho
  const correctAnswer = caminho[1];
  questionContainer.textContent = `Qual país está conectado ao ${start} no caminho mais curto para ${end}?`;

  // Prepara as opções
  const otherOptions = paises
    .map(p => p.pais)
    .filter(p => p !== correctAnswer)
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);

  const options = [correctAnswer, ...otherOptions].sort(() => 0.5 - Math.random());

  // Renderiza as opções
  options.forEach(option => {
    const button = document.createElement("button");
    button.textContent = option;
    button.addEventListener("click", () => checkAnswer(option, correctAnswer));
    optionsContainer.appendChild(button);
  });
}

function checkAnswer(selected, correct) {
  const resultContainer = document.getElementById("result");
  const optionsContainer = document.getElementById("options");

  // Mostra o resultado
  if (selected === correct) {
    resultContainer.textContent = "Correto! 🎉";
    resultContainer.style.color = "green";
  } else {
    resultContainer.textContent = `Errado! A resposta correta é: ${correct}.`;
    resultContainer.style.color = "red";
  }

  // Desabilita os botões após a resposta
  Array.from(optionsContainer.children).forEach(button => {
    button.disabled = true;
  });

  if (!document.getElementById("nextButton")) {
    const nextButton = document.createElement("button");
    nextButton.textContent = "Próxima Pergunta";
    nextButton.id = "nextButton";
    nextButton.style.marginTop = "20px";
    nextButton.addEventListener("click", () => {
      generateQuestion();
      nextButton.remove();
    });
    resultContainer.appendChild(nextButton);
  }
}

// Inicializa o quiz
generateQuestion();
