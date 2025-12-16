import 'dotenv/config';
import express from 'express';
import cors from 'cors';

import productosRouter from './src/routes/productos.router.js';
import authRouter from './src/routes/auth.router.js';
import notFound from './src/middlewares/not-found.js';

const app = express();

app.use(cors());          

app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: 'Bienvenidos a mi API!' });
})

app.use('/api/auth', authRouter);

app.use('/api', productosRouter);

app.use(notFound)

const port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});