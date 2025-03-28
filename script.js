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
      //Check if "variables" exist in the data
      if (data.variables) {
        // Get "variables"
        const variables = data.variables;
        // Show variables in console
        console.log(variables);
        // Now create the HTML for variables
        const container = document.getElementById('json-container');
        const pre = document.createElement('pre');
        pre.textContent = JSON.stringify(variables, null, 2);
        container.appendChild(pre);
      } else {
          console.error("Error: 'variables' not found in JSON");
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
}