function cargarYMostrarJSON(url) {
  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Error al cargar el archivo JSON');
      }
      return response.json();
    })
    .then(data => {
      console.log(data);

      const container = document.getElementById('json-container');
      container.innerHTML = ''; // Limpiar el contenedor

      const variables = data[0].versio.variables; // Ajusta según tu JSON

      // Convertir el objeto JSON a una lista de "clave: valor" sin {}
      let contenido = Object.entries(variables)
        .map(([key, value]) => `<strong>${key}:</strong> ${value}`)
        .join('<br>');

      container.innerHTML = contenido; // Insertar en el HTML

      console.log(variables);
    })
    .catch(error => {
      console.error('Error:', error);
    });
}
