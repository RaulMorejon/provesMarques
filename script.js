function cargarYMostrarJSON(url) {
  fetch(url)
    .then(response => {
      if (!response.ok) throw new Error('Error al carregar el arxiu JSON');
      return response.json();
    })
    .then(data => {
      console.log(data);

      const container = document.getElementById('json-container');
      const pre = document.createElement('pre');

      
      // Verificar si el array principal tiene al menos un elemento
      if (data && data.length > 0) {
        // Obtener el primer elemento del array
        const primerElemento = data[0];

        // Verificar si el primer elemento tiene el campo "variables"
        if (primerElemento && primerElemento.variables) {
          // Mostrar solo el contenido del campo "variables"
          pre.textContent = JSON.stringify(primerElemento.variables, null, 2);
        } else {
          pre.textContent = "No s'ha trobat el camp 'variables' al primer element.";
        }
      } else {
        pre.textContent = "No s'han trobat dades al JSON.";
      }




      container.appendChild(pre);
    })
    .catch(error => { 
      console.error('Error:', error);
    });
}