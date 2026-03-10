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
    "maio": ["Rúcula", "Alho-poró", "Couve-flor"],
    "junho": ["Alface", "Repolho", "Ervilha"],
    "julho": ["Beterraba", "Cenoura", "Espinafre"],
    "agosto": ["Cebola", "Alho", "Salsinha"],
    "setembro": ["Abobrinha", "Pepino", "Tomate"],
    "outubro": ["Alface", "Rabanete", "Couve"],
    "novembro": ["Cenoura", "Pimentão", "Milho"],
    "dezembro": ["Feijão", "Tomate", "Melancia"],
  },

  "sudeste": {
    "janeiro": ["Tomate", "Alface", "Berinjela"],
    "fevereiro": ["Pimentão", "Cenoura"],
    "marco": ["Alface", "Couve", "Cebola"],
    "abril": ["Abobrinha", "Cenoura"],
    "maio": ["Rúcula", "Beterraba", "Repolho"],
    "junho": ["Alface", "Cenoura", "Cebolinha"],
    "julho": ["Couve", "Alface", "Espinafre"],
    "agosto": ["Abóbora", "Pepino", "Cebola"],
    "setembro": ["Tomate", "Pimentão", "Berinjela"],
    "outubro": ["Milho", "Alface", "Feijão-vagem"],
    "novembro": ["Abobrinha", "Pepino", "Tomate"],
    "dezembro": ["Melancia", "Cenoura", "Feijão"],
  },

  "nordeste": {
    "janeiro": ["Melancia", "Feijão", "Quiabo"],
    "fevereiro": ["Abóbora", "Couve", "Milho"],
    "marco": ["Cenoura", "Tomate", "Alface"],
    "abril": ["Cebolinha", "Coentro", "Pepino"],
    "maio": ["Abóbora", "Maxixe", "Quiabo"],
    "junho": ["Feijão", "Milho", "Batata-doce"],
    "julho": ["Cenoura", "Couve", "Alface"],
    "agosto": ["Cebola", "Tomate", "Abóbora"],
    "setembro": ["Pepino", "Cebolinha", "Melancia"],
    "outubro": ["Abóbora", "Pimentão", "Feijão-vagem"],
    "novembro": ["Tomate", "Coentro", "Couve"],
    "dezembro": ["Milho", "Cenoura", "Melancia"],
  },
  "norte": {
    "janeiro": ["Mandioca", "Couve", "Alface"],
    "fevereiro": ["Milho", "Feijão", "Abóbora"],
    "marco": ["Cenoura", "Pimentão"],
    "abril": ["Abobrinha", "Pepino", "Cebolinha"],
    "maio": ["Tomate", "Milho", "Feijão"],
    "junho": ["Abóbora", "Mandioca", "Melancia"],
    "julho": ["Pimentão", "Cenoura", "Couve"],
    "agosto": ["Feijão", "Alface", "Cebola"],
    "setembro": ["Abobrinha", "Pepino", "Milho"],
    "outubro": ["Couve", "Cenoura", "Cebolinha"],
    "novembro": ["Tomate", "Alface", "Pimentão"],
    "dezembro": ["Milho", "Abóbora", "Feijão"],
  },

  "centro-oeste": {
    "janeiro": ["Abóbora", "Milho", "Feijão"],
    "fevereiro": ["Alface", "Tomate", "Cenoura"],
    "marco": ["Abobrinha", "Pepino"],
    "abril": ["Pimentão", "Berinjela"],
    "maio": ["Cenoura", "Couve", "Alface"],
    "junho": ["Repolho", "Rúcula", "Espinafre"],
    "julho": ["Beterraba", "Cenoura", "Alface"],
    "agosto": ["Tomate", "Pepino", "Pimentão"],
    "setembro": ["Abóbora", "Milho", "Feijão-vagem"],
    "outubro": ["Cenoura", "Cebolinha", "Alface"],
    "novembro": ["Abobrinha", "Berinjela", "Tomate"],
    "dezembro": ["Milho", "Feijão", "Abóbora"],
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
