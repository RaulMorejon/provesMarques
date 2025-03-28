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
      const container2 = document.getElementById('json-container2');
      const container3 = document.getElementById('json-container3');
      container.innerHTML = '';  
      container2.innerHTML = ''; 
      container3.innerHTML = ''; 

      //Element 1

      const pre = document.createElement('pre');
      pre.textContent = JSON.stringify(data[0].versio.variables, null, 2);
      container.appendChild(pre);

      //Element 2

      const pre2 = document.createElement('pre');
      pre2.textContent = JSON.stringify(data[1].versio.variables, null, 2);
      container2.appendChild(pre2);

      //Element 3

      const pre3 = document.createElement('pre');
      pre3.textContent = JSON.stringify(data[2].versio.variables, null, 2);
      container3.appendChild(pre3);
    
    
    }) 
    .catch(error => {
      console.error('Error:', error);
    });
}