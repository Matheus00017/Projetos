const display = document.getElementById("display");
const botao = document.querySelectorAll(".teclado button");

botao.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.textContent;

        if (value === "Clear") {
            display.value = "";
        } else if (value === "⌫") {
            display.value = display.value.slice(0, -1);
        } else if (value === "=") {
            display.value = eval(display.value);
        } else {
            display.value += value;
        }
    });
});