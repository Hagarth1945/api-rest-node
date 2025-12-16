import 'dotenv/config';
import express from 'express';
import { verifyToken } from './src/middlewares/verify-token.js';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: 'Bienvenidos a mi API!' });
})

app.use('/api', productosRouter);

import productosRouter from './src/routes/productos.router.js';
app.use('/api', verifyToken, productosRouter);

import notFound from './src/middlewares/not-found.js';

app.use(notFound)

const port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});