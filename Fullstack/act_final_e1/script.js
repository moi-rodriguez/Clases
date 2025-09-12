function Validar() {
    // Inicializar variable valido
    let valido = true;

    const regexNombre = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/; // solo letras y espacios
    const regexContraseña = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%]).{10,}$/;

    // Limpiar mensajes de error anteriores
    document.querySelectorAll(".error").forEach(span => span.textContent = "");

    const nombre = document.getElementById('nombre');
    const email = document.getElementById('email');
    const contraseña = document.getElementById('contraseña');
    const confirmar = document.getElementById('confirmar_contraseña');
    const telefono = document.getElementById('telefono');

    // Validar campos vacíos
    if (nombre.value.trim() === "" || email.value.trim() === "" ||
        contraseña.value === "" || confirmar.value === "") {
        alert("Por favor, complete todos los campos obligatorios.");
        valido = false;
    }

    // --- Validar NOMBRE ---
    if (nombre.value.trim() === "") {
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
    if (email.value.trim() === "") {
        document.getElementById("error-email").textContent = "El correo es obligatorio";
        valido = false;
    } else if (!email.value.endsWith("@duocuc.cl")) {
        document.getElementById("error-email").textContent = "Debe terminar en @duocuc.cl";
        valido = false;
    }

    // --- Validar CONTRASEÑA ---
    if (contraseña.value === "") {
        document.getElementById("error-contraseña").textContent = "La contraseña es obligatoria";
        valido = false;
    } else if (!regexContraseña.test(contraseña.value)) {
        document.getElementById("error-contraseña").textContent = "La contraseña debe tener al menos 10 caracteres, una mayúscula, una minúscula, un número y un carácter especial (@#$%)";
        valido = false;
    }

    // --- Validar CONFIRMACIÓN ---
    if (confirmar.value !== contraseña.value) {
        document.getElementById("error-confirmar").textContent = "Las contraseñas no coinciden";
        valido = false;
    }

    // Validar tipo de dato de teléfono
    if (telefono.value && isNaN(telefono.value)) {
        document.getElementById("error-telefono").textContent = "El teléfono debe ser numérico";
        valido = false;
    }

    // Mostrar mensaje de éxito si es válido
    if (valido) {
        document.getElementById("success-message").style.display = "block";
        // Opcional: prevenir el envío real para este ejemplo
        setTimeout(() => {
            document.getElementById("success-message").style.display = "none";
        }, 3000);
    }

    console.log("Validación:", valido, nombre.value, email.value);
    return valido;
}