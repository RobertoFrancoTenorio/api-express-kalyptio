const express = require('express');
const cors = require('cors');

const app = express();

app.get('/', (req, res) => {
    res.send('Hola mundo')
})

app.use(express.json())

app.use(cors())

app.use('/api/parking', require('./routes/parking'))

app.listen(4000, ()=>{
    console.log('Sin errores');
})