// Create web server
// 1. npm install express
// 2. require express
// 3. create express app
// 4. create a route for comments
// 5. Listen on port 3000

const express = require('express');
const app = express();

app.get('/comments', (req, res) => {
  res.json({
    comments: [
      'Hello',
      'Hi',
      'Hey',
      'Hola'
    ]
  });
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
// Visit http://localhost:3000/comments
// Output: {"comments":["Hello","Hi","Hey","Hola"]}
