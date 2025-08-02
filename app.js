let nombres = [];


function agregarNombre() {
    let input = document.getElementById("nombre");
    let nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    nombres.push(nombre);
    actualizarLista();
    input.value = ""; // Limpiar campo después de agregar
}

function actualizarLista() {
    let lista = document.getElementById("listaNombres");
    lista.innerHTML = "";

    nombres.forEach((nombre, index) => {
        let item = document.createElement("li");
        item.textContent = nombre;
        lista.appendChild(item);
    });
}

function sortearAmigo() {
    if (nombres.length === 0) {
        alert("La lista está vacía. Agrega nombres antes de sortear.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * nombres.length);
    let ganador = nombres[indiceAleatorio];

    document.getElementById("resultado").textContent = "🎉 Amigo Secreto: " + ganador + " 🎉";
}

function limpiarNombres() {
    document.getElementById('listaNombres').innerHTML = '';
    document.getElementById('resultado').innerHTML = '';
    // Si tienes una variable de nombres en JS, también límpiala:
    if (typeof nombres !== 'undefined') {
        nombres = [];
    }
}
