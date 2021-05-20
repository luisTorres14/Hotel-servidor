const express = require('express');
const conectarDB = require('./config/db');

//creamos el servidor
const app = express();

//COnectamos a la BD
conectarDB();

app.use(express.json());
app.use('/api/user', require('./routes/user'));

//definimos ruta principal 
// app.get('/', (req, res) => {
//     res.send('hola mundo')
// })

app.listen(4000, () => {
    console.log('El servidor esta conrriendo perfectamente');
})