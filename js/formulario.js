// Ruta del archivo XML
const rutaXML = '../data/forms/contactForm.xml';

// Función para cargar y procesar el archivo XML
fetch(rutaXML)
    .then(response => response.text())
    .then(data => {
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(data, "application/xml");

        // Obtener todos los usuarios del XML
        const usuarios = xmlDoc.getElementsByTagName("Usuario");
        const contenidoDiv = document.getElementById("contenido");

        for (let i = 0; i < usuarios.length; i++) {
            const usuario = usuarios[i];

            // Extraer datos del usuario
            const nombre = usuario.getElementsByTagName("Nombre")[0]?.textContent || "Sin nombre";
            const apellidos = usuario.getElementsByTagName("Apellidos")[0]?.textContent || "Sin apellidos";
            const descripcion = usuario.getElementsByTagName("Descripcion")[0]?.textContent || "Sin descripción";
            const twitter = usuario.getElementsByTagName("Twitter")[0]?.textContent || "#";
            const instagram = usuario.getElementsByTagName("Instagram")[0]?.textContent || "#";
            const linkedin = usuario.getElementsByTagName("LinkedIn")[0]?.textContent || "#";
            const github = usuario.getElementsByTagName("GitHub")[0]?.textContent || "#";

            // Añadir comentarios para cada usuario
            const comentario = document.createComment(`Usuario: ${nombre} (Contenido libre para completar)`);
            contenidoDiv.appendChild(comentario);

            // Crear el contenido HTML para el usuario
            const usuarioDiv = document.createElement("div");
            usuarioDiv.className = "usuario";

            usuarioDiv.innerHTML = `
                <h2>${nombre} ${apellidos}</h2>
                <p>${descripcion}</p>
                <h3>Redes Sociales</h3>
                <ul>
                    <li><strong>Twitter:</strong> <a href="${twitter}" target="_blank">Sigueme en X</a></li>
                    <li><strong>Instagram:</strong> <a href="${instagram}" target="_blank">Sigueme en Instagram</a></li>
                    <li><strong>LinkedIn:</strong> <a href="${linkedin}" target="_blank">Ir a LinkedIn</a></li>
                    <li><strong>GitHub:</strong> <a href="${github}" target="_blank">Ver mi GitHub</a></li>
                </ul>
            `;

            // Añadir el contenedor del usuario al contenido principal
            contenidoDiv.appendChild(usuarioDiv);
        }
    })
    .catch(error => console.error('Error al cargar el archivo XML:', error));