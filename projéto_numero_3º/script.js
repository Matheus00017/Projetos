const regiaoSelect = document.getElementById("regiao");
const mesSelect = document.getElementById("mes");
const btnMostrar = document.getElementById("btnMostrar");
const resultadoDiv = document.getElementById("resultado");

const dadosPlantio = {
  "sul": {
    "janeiro": ["Alface", "Cenoura", "Beterraba"],
    "fevereiro": ["Couve", "Milho", "Tomate"],
    "marco": ["Abóbora", "Pimentão", "Alface"],
    "abril": ["Cenoura", "Cebolinha"],
  },
  "sudeste": {
    "janeiro": ["Tomate", "Alface", "Berinjela"],
    "fevereiro": ["Pimentão", "Cenoura"],
    "marco": ["Alface", "Couve", "Cebola"],
    "abril": ["Abobrinha", "Cenoura"],
  },
  "nordeste": {
    "janeiro": ["Melancia", "Feijão", "Quiabo"],
    "fevereiro": ["Abóbora", "Couve", "Milho"],
    "marco": ["Cenoura", "Tomate", "Alface"],
    "abril": ["Cebolinha", "Coentro", "Pepino"],
  },
  "norte": {
    "janeiro": ["Mandioca", "Couve", "Alface"],
    "fevereiro": ["Milho", "Feijão", "Abóbora"],
    "marco": ["Cenoura", "Pimentão"],
    "abril": ["Abobrinha", "Pepino", "Cebolinha"],
  },
  "centro-oeste": {
    "janeiro": ["Abóbora", "Milho", "Feijão"],
    "fevereiro": ["Alface", "Tomate", "Cenoura"],
    "marco": ["Abobrinha", "Pepino"],
    "abril": ["Pimentão", "Berinjela"],
  },
};

btnMostrar.addEventListener("click", () => {
  const regiao = regiaoSelect.value;
  const mes = mesSelect.value;

  if (!regiao || !mes) {
    resultadoDiv.innerHTML = "<p>Por favor, selecione a região e o mês.</p>";
    return;
  }

  const culturas = dadosPlantio[regiao]?.[mes];

  if (!culturas) {
    resultadoDiv.innerHTML = "<p>Nenhuma informação disponível para essa combinação.</p>";
    return;
  }

  const lista = culturas.map(item => `<li>${item}</li>`).join("");
  resultadoDiv.innerHTML = `
    <h3>Plantio ideal para <strong>${mes}</strong> (${regiao}):</h3>
    <ul>${lista}</ul>
  `;
});
