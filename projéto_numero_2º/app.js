const btnStart = document.getElementById('btnStart');
const btnStop =  document.getElementById('btnStop');
const btnClear = document.getElementById('btnClear');
const btnSave = document.getElementById('btnSave');
const statusEl = document.getElementById('status');
const textoEl = document.getElementById('texto');
const langSelect = document.getElementById('lang');

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

let recognition;
let isRecording = false;
let finalTranscript = '';

if (!SpeechRecognition) {
    alert('Seu navegador não suporta a web Speech API. use o Chrome ou Edge');
} else {
    recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = langSelect.value;
}

btnStart.addEventListener('click', async () => {
    if (isRecording) {
        console.log("Já está gravando, ignorando novo clique.");
        return; // sai da função se já estiver gravando
    }

    try {
        console.log("solicitando permissão do microfone")
        await navigator.mediaDevices.getUserMedia({ audio: true });
        console.log("permissão concedida");

        recognition = new SpeechRecognition();
        recognition.continuous = true;
        recognition.interimResults = true;
        recognition.lang = langSelect.value;

        finalTranscript = textoEl.value.trim() ? (textoEl.value + ' ') : '';

        recognition.onresult = (event) => {
            let interimTranscript = '';

            for(let i = event.resultIndex; i < event.results.length; i++) {
            const transcript = event.results[i][0].transcript;
            if(event.results[i].isFinal){
                finalTranscript += transcript + '  ';
            } else{
                interimTranscript += transcript;
            }
            }

            textoEl.value = finalTranscript + interimTranscript;
        }

            recognition.onend = () => {
            if (isRecording) {
                console.log("Reconhecimento terminou, reiniciando...");
                recognition.start(); // reinicia apenas se o isRecording ainda for true
            } else {
                console.log("Gravação pausada");
                statusEl.textContent = 'Status: parado';
                btnStart.disabled = false;
                btnStop.disabled = true;
            }
        };

        
        recognition.start();
        isRecording = true;
        statusEl.textContent = 'Status: gravando';
        btnStart.disabled = true;
        btnStop.disabled = false;


        recognition.start();
    } catch (err) {
        console.log('Erro ao acessar o microfone:', err);
        alert('permita o uso do microfone e tente novamente');
    }
});

btnStop.addEventListener('click', () => {
    if(!recognition || !isRecording) return;

    isRecording = false; 
    recognition.stop();  
});


btnClear.addEventListener('click', () => {
    textoEl.value = '';
    finalTranscript = '';
});

btnSave.addEventListener('click', () => {
    if (!textoEl) {
        console.error('Elemento texto não encontrado.');
        alert('Erro: campo de texto não encontrado.');
        return;
    }

    console.log("Clique no botão Salvar detectado!");
    
    const conteudo = textoEl.value || "Sem conteúdo";
    const arquivo = new Blob([conteudo], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(arquivo);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'bloco-de-notas.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    setTimeout(() => URL.revokeObjectURL(url), 500);
});