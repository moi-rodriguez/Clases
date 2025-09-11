localStorage = window.localStorage;

const regexNombre = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/; // solo letras y espacios
const regexContraseña = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%]).{10,}$/;
function Validar() {
    let valido = true;
    document.querySelectorAll(".error").forEach(span => span.textContent = "");

    const nombre = document.getElementById('nombre');
    const email = document.getElementById('email');
    const contraseña = document.getElementById('contraseña');
    const confirmar = document.getElementById('confirmar_contraseña');

    // --- Validar NOMBRE ---
    if (!nombre.value) {
        document.getElementById("error-nombre").textContent = "El nombre no puede estar vacío";
        valido = false;
    } else if (!regexNombre.test(nombre.value)) {
        document.getElementById("error-nombre").textContent = "Solo letras y espacios";
        valido = false;
    } else if (nombre.value.length > 100) {
        document.getElementById("error-nombre").textContent = "Máximo 100 caracteres";
        valido = false;
    }

    // --- Validar EMAIL ---
    if (!email.value) {
        document.getElementById("error-email").textContent = "El correo es obligatorio";
        valido = false;
    } else if (!email.value.endsWith("@duocuc.cl")) {
        document.getElementById("error-email").textContent = "Debe terminar en @duocuc.cl";
        valido = false;
    }


    // --- Validar CONTRASEÑA ---

    if (!regexContraseña.test(contraseña.value)) {
        document.getElementById("error-contraseña").textContent =
            "Debe tener mínimo 10 caracteres, 1 mayúscula, 1 minúscula, 1 número y 1 especial (@#$%)";
        valido = false;
    }

    // --- Validar CONFIRMACIÓN ---
    if (confirmar.value != contraseña.value) {
        document.getElementById("error-confirmar").textContent = "Las contraseñas no coinciden";
        valido = false;
    }



    if (valido) {
        alert("Formulario enviado correctamente");
    }
    return valido;
}
