function cargarYMostrarJSON(url) {
    // Usamos fetch para cargar el archivo JSON desde la URL proporcionada
    fetch(url)
      .then(response => {
        // Verificamos si la respuesta es exitosa
        if (!response.ok) {
          throw new Error('Error al cargar el archivo JSON');
        }
        return response.json(); // Convertimos la respuesta en JSON
      })
      .then(data => {
        // Mostramos el JSON cargado en la consola
        console.log(data);
  
        // También lo mostramos en el HTML dentro del div con id="json-container"
        const container = document.getElementById('json-container');
        const pre = document.createElement('pre');
        pre.textContent = JSON.stringify(data, null, 2); // Le damos formato para que sea más legible
        container.appendChild(pre);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }
  