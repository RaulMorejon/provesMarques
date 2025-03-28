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

      // Element 1
      const pre = document.createElement('pre');
      pre.innerHTML = formatVariablesWithBold(data[0].versio.variables);
      container.appendChild(pre);

      // Element 2
      const pre2 = document.createElement('pre');
      pre2.innerHTML = formatVariablesWithBold(data[1].versio.variables);
      container2.appendChild(pre2);

      // Element 3
      const pre3 = document.createElement('pre');
      pre3.innerHTML = formatVariablesWithBold(data[2].versio.variables);
      container3.appendChild(pre3);

      // Función para formatear el objeto variables sin llaves y comillas
      function formatVariables(variables) {
        let formattedString = '';
        for (const key in variables) {
          formattedString += `${key}: ${variables[key]}\n`;
        }
        return formattedString;
      }

      // Función para formatear el objeto variables con la clase "negrita" para el texto entre comillas
      function formatVariablesWithBold(variables) {
        let formattedHTML = '';
        for (const key in variables) {
          const value = variables[key];
          formattedHTML += `<span>${key}: </span>`;

          if (typeof value === 'string') {
            formattedHTML += `<span class="negrita">${value}</span><br>`;
          } else {
            formattedHTML += `<span>${value}</span><br>`;
          }
        }
        return formattedHTML;
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
}