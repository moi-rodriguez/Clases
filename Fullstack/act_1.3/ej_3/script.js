const nuevaTarea = document.getElementById("nuevaTarea");
const listaTareas = document.getElementById("listaTareas");

function agregarTarea() {
    if (nuevaTarea.value === "") {
        alert("No se permiten tareas vacías");
        return;
    }

    const nuevaLi = document.createElement("li");
    nuevaLi.textContent = nuevaTarea.value;

    const botonBorrar = document.createElement("button");
    botonBorrar.textContent = "X";

    botonBorrar.onclick = function borrar() {
        nuevaLi.remove();
    }

    nuevaLi.appendChild(botonBorrar);
    listaTareas.appendChild(nuevaLi);
    nuevaTarea.value = "";
}