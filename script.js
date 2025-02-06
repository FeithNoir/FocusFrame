document.addEventListener('DOMContentLoaded', function () {
    const image = document.getElementById('character-image');
    const radioButtons = document.querySelectorAll('input[name="focus"]');

    radioButtons.forEach(radio => {
        radio.addEventListener('change', function () {
            // Remover todas las clases de enfoque
            image.classList.remove('full', 'medium', 'close');
            // Añadir la clase correspondiente al enfoque seleccionado
            image.classList.add(this.value);
        });
    });
});