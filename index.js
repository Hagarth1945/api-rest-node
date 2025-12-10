import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('Bienvenidos a mi API!');
})

const port = 3000;

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});