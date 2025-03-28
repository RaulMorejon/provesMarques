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

      const container2 = document.getElementById('json-container2');
      const pre2 = document.createElement('pre');

      const container3 = document.getElementById('json-container3');
      const pre3 = document.createElement('pre');


      container.innerHTML = ''; 

      
      pre.textContent = JSON.stringify(data[0].versio.variables, null, 2).
      pre2.textContent = JSON.stringify(data[1].versio.variables, null, 2).
      pre3.textContent = JSON.stringify(data[2].versio.variables, null, 2).
      


      container.appendChild(pre);
      container.appendChild(pre2);
      container.appendChild(pre3);
    
      
  
    }) 
    .catch(error => {
      console.error('Error:', error);
    });
}