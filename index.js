import express from 'express';

const app = express();

// app.use((req, res, next) => {
//     // res.json({ message: 'Hola Middleware!' })
//     console.log(req.method);
//     next();
// })

const productos = [
  {
    id: 1,
    nombre: "Auriculares inalámbricos",
    precio: 18500,
    stock: 12,
    categoria: "Electrónica"
  },
  {
    id: 2,
    nombre: "Mate de acero",
    precio: 9500,
    stock: 30,
    categoria: "Hogar"
  },
  {
    id: 3,
    nombre: "Teclado mecánico",
    precio: 42000,
    stock: 7,
    categoria: "Informática"
  },
  {
    id: 4,
    nombre: "Mochila urbana",
    precio: 27500,
    stock: 15,
    categoria: "Accesorios"
  },
  {
    id: 5,
    nombre: "Botella térmica 1L",
    precio: 16000,
    stock: 20,
    categoria: "Hogar"
  }
];

app.get('/', (req, res) => {
    res.json({ message: 'Bienvenidos a mi API!' });
})

app.get('/productos', (req, res) => {
    const { categoria } = req.query;
    if (categoria) {
        const productosFiltrados = productos.filter((item) => item.categoria.toLowerCase().includes(categoria.toLowerCase())
        );
        res.json(productosFiltrados);
        return;
    }
    res.json(productos);
})

app.get('/productos/search', (req, res) => {
    const { nombre } = req.query;
    if (!nombre) {
        return res.status(400).json ({ error: 'No se proporcionó el parámetro "nombre"' });
    }
    const productosFiltrados = productos.filter((item) => item.nombre.toLowerCase().includes(nombre.toLowerCase()));
    if (productosFiltrados.length == 0) {
        return res.status(404).json ({ error: 'No se encontraron productos' });
    }
    res.json(productosFiltrados);
})

app.get('/productos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const producto = productos.find((item) => item.id == id);
    if (!producto) {
        res.status(404).json({ error: 'Producto no encontrado' });
    }
    res.json(producto);
})

import notFound from './src/middlewares/not-found.js';

app.use(notFound)

const port = 3000;

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});