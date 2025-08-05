let nombres = [];

// Agrega un nombre a la lista y actualiza la visualización
function agregarNombre() {
    const input = document.getElementById("nombre");
    const nombre = input.value.trim();

    if (!nombre) {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    nombres.push(nombre);
    mostrarAmigos(nombres);
    input.value = "";
}

// Muestra los amigos en la lista de forma robusta y sin duplicados
function mostrarAmigos(amigos) {
    const lista = document.getElementById("listaNombres");
    if (!lista) return;
    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

// Sortea un amigo secreto de la lista
function sortearAmigo() {
    if (!Array.isArray(nombres) || nombres.length === 0) {
        alert("La lista está vacía. Agrega nombres antes de sortear.");
        return;
    }
    const indiceAleatorio = Math.floor(Math.random() * nombres.length);
    const ganador = nombres[indiceAleatorio];
    const resultado = document.getElementById("resultado");
    if (resultado) {
        resultado.textContent = `🎉 Amigo Secreto: ${ganador} 🎉`;
    }
}

// Limpia la lista de nombres y el resultado
function limpiarNombres() {
    nombres = [];
    const lista = document.getElementById("listaNombres");
    const resultado = document.getElementById("resultado");
    if (lista) lista.innerHTML = "";
    if (resultado) resultado.innerHTML = "";
}
