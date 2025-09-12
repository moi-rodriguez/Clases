// array productos

const productos = [
    {id: 1, name: "libro1", price: 12000, category: "novela", img: "https://www.penguinlibros.com/cl/6048742/memorias-del-subsuelo.jpg"},
    {id: 2, name: "libro2", price: 8000, category: "infantil", img: "https://www.penguinlibros.com/cl/1727221/el-principito-edicion-original.jpg"},
    {id: 3, name: "libro3", price: 15000, category: "novela", img: "https://cdn.culturagenial.com/es/imagenes/siddartha-libro.jpg?class=article"},
    {id: 4, name: "libro4", price: 11000, category: "novela", img: "https://cdn.culturagenial.com/es/imagenes/orgullo-libro.jpg?class=article"},
    {id: 5, name: "libro5", price: 7000, category: "infantil", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOIk-9eWHqWzRFqYG0EjcLNcxz_zC6GQGQCQ&s"},
    {id: 6, name: "libro6", price: 14000, category: "infantil", img: "https://www.penguinlibros.com/co/1667582/judy-moody-1-judy-moody-esta-de-mal-humor-de-muy-mal-humor.jpg"}
];

// agregar productos

const grid = document.getElementById("grid"); // apunta al contenedor vacio

function render(items) {
    grid.innerHTML = ""; // limpia el contenedor

    items.forEach(prod => {
        const article = document.createElement("article");

        // recorre el array y crea un <article> por libro
        article.innerHTML = `
            <img 
                src="${prod.img}" 
                height="200px"
            >
            <h3>${prod.name}</h3>
            <p>Precio: $${prod.price}</p>
            <p>Categoría: ${prod.category}</p>
            <button data-id="${prod.id}">Agregar</button>
        `;

        grid.appendChild(article);
    });
}

// mostrar todos los libros al cargar la pag
render(productos);

// filtros
const botonesFiltro = document.querySelectorAll("#filtros button"); // selecciona los botones

botonesFiltro.forEach(btn => {

    // al hacer cli lee el data-category
    btn.addEventListener("click", () => {
        const cat = btn.getAttribute("data-category");
        if (cat === "all") { 
            render(productos); // si es all muestra todo
        } else {
            const filtrados = productos.filter(p => p.category === cat);
            render(filtrados); // sino filtra por categoria y vuelve a renderizar
        }
    });
});

// contador

let count = 0; // variable que guarda total agregado
const contador = document.getElementById("count");

grid.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
        count++;
        contador.textContent = count;
    }
    // al hacer clic en agregar, suma 1 y actualiza el <span id="count">
});

// formulario

const form = document.getElementById("contact-form");
const errors = document.getElementById("errors");

form.addEventListener("submit", (e) => {
    e.preventDefault(); 
    errors.textContent = ""; 
    errors.style.color = "red"; 

    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    // validar que los campos no esten vacios
    if (!nombre || !correo || !mensaje) {
        errors.textContent = "Todos los campos son obligatorios.";
        return;
    }

    // validar formato basico de correo
    if (!correo.includes("@") || !correo.includes(".")) {
        errors.textContent = "Ingrese un correo válido.";
        return;
    }

    // Si todo está correcto
    errors.style.color = "green";
    errors.textContent = "¡Mensaje enviado con éxito!";
    form.reset();
});

