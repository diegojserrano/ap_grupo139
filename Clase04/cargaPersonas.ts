

let persona = { nombre: "", edad: 0 }


function cambioNombre(cuadroTexto: HTMLInputElement): void {
    persona.nombre = cuadroTexto.value
    mostrarPersona()
}

function cambioEdad(cuadroTexto: HTMLInputElement): void {
    persona.edad = parseInt(cuadroTexto.value)
    mostrarPersona()
}

function mostrarPersona(): void {
    document.getElementById("divPersona").innerText = persona.nombre + " " + persona.edad
}