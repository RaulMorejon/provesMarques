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
      container.innerHTML = ''; 
      const pre = document.createElement('pre');


      let contenido = data.map((item, index) => 
        `Elemento ${index + 1}:\n` + JSON.stringify(item.versio.variables, null, 2)
      ).join('\n\n');

      pre.textContent = contenido;
     



      container.appendChild(pre);
    
      
    }) 
    .catch(error => {
      console.error('Error:', error);
    });
}