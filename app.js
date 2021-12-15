const express = require('express');
const path = require('path');
const app = express();  // funcion constructora de express


const PORT = process.env.PORT || 5000

// Handlers (Escuchan el evento)
app.get('/', (req, res) => {
  // res.send('<h1>HOME</h1>');
  res.sendFile(path.join("views","index.html"),{"root":__dirname});
})

app.get('/about', (req, res) => {
  // res.send('<h1>about</h1>');
  res.sendFile(path.join("views","about.html"),{"root":__dirname});
})

app.get('/about-us', (req, res) => {
  // redirección a otra url
  res.redirect("/about");
})

// middleware (Se ejecuta al encontrarse)
app.use((req,res) => {
  res.sendFile(path.join("views","404.html"),{"root":__dirname});
});

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
})