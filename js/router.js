fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json())
  .then(data => console.log('GET:', data))
  .catch(error => console.error('Error:', error));

fetch('https://jsonplaceholder.typicode.com/posts', {
method: 'POST',
headers: {
    'Content-Type': 'application/json'
},
body: JSON.stringify({
    title: 'Nuevo post',
    body: 'Este es el contenido del post',
    userId: 1
})
})
.then(response => response.json())
.then(data => console.log('POST:', data))
.catch(error => console.error('Error:', error));


fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      id: 1,
      title: 'Post actualizado',
      body: 'Este es el nuevo contenido',
      userId: 1
    })
  })
    .then(response => response.json())
    .then(data => console.log('PUT:', data))
    .catch(error => console.error('Error:', error));

fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'DELETE'
    })
    .then(() => console.log('DELETE: Post eliminado'))
    .catch(error => console.error('Error:', error));
    