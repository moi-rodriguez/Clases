function Validar() {

    nombre = document.getElementById('nombre')
    contraseña = document.getElementById('contraseña')
    email = document.getElementById('email')
    message = document.getElementById('message')

    if (nombre.value == "" ||
        email.value == "" ||
        message.value == "" ||
        password.value == ""
    ) {
        alert('Todos lo campos deben tener datos!!!!')
    }
    else {
        alert('Todo correcto, puede continuar')
    }

}

function Limpiar() {
    document.getElementById('nombre').value = ""
    document.getElementById('contraseña').value = ""
    document.getElementById('email').value = ""
    document.getElementById('message').value = ""
}

function FiltrarContraseña() {
    contraseña = document.getElementById('contraseña')

    if (contraseña.value.length < 10) {
        alert('La contraseña debe tener al menos 10 caracteres')
        contraseña.value = ""
        contraseña.focus()
    }

}