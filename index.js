import express from 'express';

const app = express();
const port = 3000;

app.listen(port);

app.get('/', (req, res) => {
    res.send('hola mundo');
});

console.log(`Server is running on http://localhost:${port}`);