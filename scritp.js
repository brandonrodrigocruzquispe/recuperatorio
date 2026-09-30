let contactos = [];

const nombre = document.getElementById("nombre");
const telefono = document.getElementById("telefono");

const btnAgregar = document.getElementById("btnAgregar");

const listaContactos = document.getElementById("listaContactos");


function mostrarContactos() {

    listaContactos.innerHTML = "";

    for (let i = 0; i < contactos.length; i++) {

        const contacto = document.createElement("div");

        contacto.className = "contacto";

        const informacion = document.createElement("div");

        informacion.className = "informacion";

        const nombreContacto = document.createElement("div");

        nombreContacto.className = "nombre-contacto";

        nombreContacto.textContent = contactos[i].nombre;

        const telefonoContacto = document.createElement("div");

        telefonoContacto.className = "telefono-contacto";

        telefonoContacto.textContent = contactos[i].telefono;

        informacion.appendChild(nombreContacto);

        informacion.appendChild(telefonoContacto);

        contacto.appendChild(informacion);

        listaContactos.appendChild(contacto);
    }
}


function agregarContacto() {

    const nombreTexto = nombre.value.trim();

    const telefonoTexto = telefono.value.trim();

    if (nombreTexto === "" || telefonoTexto === "") {
        return;
    }

    const contacto = {
        nombre: nombreTexto,
        telefono: telefonoTexto
    };

    contactos.push(contacto);

    nombre.value = "";

    telefono.value = "";

    mostrarContactos();
}


btnAgregar.addEventListener("click", agregarContacto);