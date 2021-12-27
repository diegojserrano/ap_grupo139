var persona = { nombre: "", edad: 0 };
function cambioNombre(cuadroTexto) {
    persona.nombre = cuadroTexto.value;
    mostrarPersona();
}
function cambioEdad(cuadroTexto) {
    persona.edad = parseInt(cuadroTexto.value);
    mostrarPersona();
}
function mostrarPersona() {
    document.getElementById("divPersona").innerText = persona.nombre + " " + persona.edad;
}
