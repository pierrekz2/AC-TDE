const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://pierrekz2:<password>@cluster0-0myaz.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

//req.query = acessar query params (para filtros)
//req.params = acesasr route params (para editar ou deletar)
//req.body - Acessar corpo da requisição

app.use(express.json());
app.use(routes);
app.use(cors())
app.listen(3333);