import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('teste ... Servidor funcionando!')
});

app.listen(3000);

console.log('Server working on door 3000!')