// Obtém o botão e o menu do dropdown pelo ID
var dropdownButton = document.getElementById("dropdownButton");
var dropdownMenu = document.getElementById("myDropdown");

// Adiciona um ouvinte de evento de clique ao botão de dropdown
dropdownButton.addEventListener("click", function() {
    if (dropdownMenu.style.display === "block") {
        dropdownMenu.style.display = "none"; // Fecha o dropdown
    } else {
        dropdownMenu.style.display = "block"; // Abre o dropdown
    }
});

// Fecha o dropdown se o cursor clicar fora dele
window.addEventListener("click", function(event) {
    if (event.target !== dropdownButton && event.target !== dropdownMenu) {
        dropdownMenu.style.display = "none";
    }
});
