import express from 'express';

const app = express();

app.use((req, res, next) => {
    // res.json({ message: 'Hola Middleware!' })
    console.log(req.method);
    next();
})

app.get('/', (req, res) => {
    res.json({ message: 'Bienvenidos a mi API!' });
})

import notFound from './src/middlewares/not-found.js';

app.use(notFound)

const port = 3000;

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});