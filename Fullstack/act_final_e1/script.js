function Validar() {
    valor = true;
    let nombre = document.getElementById('nombre');
    let contraseña = document.getElementById('contraseña');
    let email = document.getElementById('email');
    let confirmar_contraseña = document.getElementById('confirmar_contraseña');

    // Validar vacíos
    if (nombre.value == "" ||
        contraseña.value == "" ||
        confirmar_contraseña.value == "" ||
        email.value == "") {
        console.log('Todos los campos deben tener datos!');
        return false;
    } else {
        alert('Todos los campos tienen datos, Continue');
    }

    // Validar nombre
    if (nombre.value.length > 100) {
        console.log('El nombre no puede tener más de 100 caracteres');
        return false;
    }

    // Validar email
    if (!email.value.endsWith('@duoc.cl')) {
        console.log('El correo debe terminar en @duoc.cl');
        return false;
    }
    if (email.value.length > 60) {
        console.log('El correo no puede tener más de 60 caracteres');
        return false;
    }

    // Validar contraseña
    if (contraseña.value.length < 10) {
        console.log('La contraseña debe tener al menos 10 caracteres');
        return false;
    }
    if (!/[A-Z]/.test(contraseña.value)) {
        console.log('La contraseña debe tener al menos una letra mayúscula');
        return false;
    }
    if (!/[a-z]/.test(contraseña.value)) {
        console.log('La contraseña debe tener al menos una letra minúscula');
        return false;
    }
    if (!/[0-9]/.test(contraseña.value)) {
        console.log('La contraseña debe tener al menos un número');
        return false;
    }
    if (!/[@#$%]/.test(contraseña.value)) {
        console.log('La contraseña debe tener un caracter especial (@#$%)');
        return false;
    } else {
        alert('Contraseña ingresada correctamente');
    }

    // Validar confirmación
    if (confirmar_contraseña != contraseña) {
        alert('Las contraseñas no coinciden');
        return false;

    }

    return valor;
}
