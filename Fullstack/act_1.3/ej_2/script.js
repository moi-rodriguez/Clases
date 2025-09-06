function validar() {
    campo1 = document.getElementById('nombre')
    campo2 = document.getElementById('correo')
    campo3 = document.getElementById('mensaje')

    if (campo1.value == "" || campo2.value == "" || campo3.value == "") {
        alert('Deben completarse todos los campos!')
    } 
    else {
        alert('Todo correcto, puede continuar!')
    }
}