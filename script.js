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
     
      const info = data[1];
      console.log(info.versio[2].variables);
  
      
      
    })
    .catch(error => {
      console.error('Error:', error);
    });
}