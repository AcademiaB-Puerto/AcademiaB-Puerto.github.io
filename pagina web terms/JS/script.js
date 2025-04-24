// Datos de ejemplo para las personas
const personas = {
    "45382044P": { nombre: "Juan Pérez", edad: 30, email: "juan@example.com", direccion: "Calle Ficticia 123" },
    "2": { nombre: "Ana López", edad: 25, email: "ana@example.com", direccion: "Calle Inventada 456" },
    "3": { nombre: "Carlos Gómez", edad: 40, email: "carlos@example.com", direccion: "Calle Real 789" }
  };
  
  // Al hacer submit en el formulario
  document.getElementById("buscar").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar que se recargue la página
    const id = document.getElementById("input").value;
  
    // Buscar los datos de la persona con el ID
    if (personas[id]) {
      // Si se encuentra la persona, mostrar los datos
      document.getElementById("nombre").textContent = `Nombre: ${personas[id].nombre}`;
      document.getElementById("edad").textContent = `Edad: ${personas[id].edad}`;
      document.getElementById("email").textContent = `Email: ${personas[id].email}`;
      document.getElementById("direccion").textContent = `Dirección: ${personas[id].direccion}`;
      
      // Mostrar la ficha
      document.getElementById("fichaPersona").style.display = "block";
    } else {
      // Si no se encuentra la persona
      alert("No se encontró ninguna persona con ese ID.");
      document.getElementById("fichaPersona").style.display = "none";
    }
  });