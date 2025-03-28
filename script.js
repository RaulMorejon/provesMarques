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
      const pre = document.createElement('pre');

      pre.textContent = JSON.stringify(data[0].versio.variables, null, 2).replace(/[\{\}]/g, '');
      container.innerHTML = ''; 
      container.appendChild(pre);
    
      console.log(data[0].versio.variables);
  
    }) 
    .catch(error => {
      console.error('Error:', error);
    });
}