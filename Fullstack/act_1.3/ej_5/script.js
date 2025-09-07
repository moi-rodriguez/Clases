// seleccionar el boton
const toggleButton = document.getElementById("theme-toggle")

// definir funcion
function toggleTheme() {
    document.body.classList.toggle("dark-mode")
    // si el body tiene la clase dark-mode la quita
    // si no la tiene la agrega

    // localStorage
    if(document.body.classList.contains("dark-mode")) { // verifica si esta activado
        localStorage.setItem("theme", "dark") // guarda la preferencia en el navegador
    }
    else {
        localStorage.setItem("theme", "light")
    }
}

// aplicar preferencia al cargar la pag
window.addEventListener("load", () => { // espera a que la pag cargue
    const savedTheme = localStorage.getItem("theme") // recupera la preferencia guardada
    if(savedTheme === "dark") {
        document.body.classList.add("dark-mode")
        // si la preferencia es dark se activa
    }
})

// detectar clic en el boton
toggleButton.addEventListener("click", toggleTheme)
