let atual = 0;

function moverSlider(direcao) {
    const slider = document.getElementById('slider');
    const totalImagens = slider.children.length;

    atual = (atual + direcao + totalImagens) % totalImagens;
    slider.style.transform = `translateX(-${atual * 100}%)`;
}