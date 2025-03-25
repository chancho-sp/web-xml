// Cargar el archivo XML
fetch('../data/forms/contactForm.xml')
    .then(response => response.text())
    .then(data => {
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(data, "application/xml");

        // Extraer datos del XML
        const usuario = xmlDoc.getElementsByTagName("Usuario")[0];
        const nombre = usuario.getElementsByTagName("Nombre")[0].textContent || "Nombre no especificado";
        const apellidos = usuario.getElementsByTagName("Apellidos")[0].textContent || "Apellidos no especificados";
        const correo = usuario.getElementsByTagName("Correo")[0].textContent || "Correo no especificado";

        // Crear el formulario dinámicamente
        const formularioDiv = document.getElementById("formulario");
        formularioDiv.innerHTML = `
            <form>
                <label for="nombre">Nombre:</label>
                <input type="text" id="nombre" value="${nombre}" /><br/>

                <label for="apellidos">Apellidos:</label>
                <input type="text" id="apellidos" value="${apellidos}" /><br/>

                <label for="correo">Correo:</label>
                <input type="email" id="correo" value="${correo}" /><br/>

                <button type="submit">Enviar</button>
            </form>
        `;
    })
    .catch(error => console.error('Error al cargar el archivo XML:', error));