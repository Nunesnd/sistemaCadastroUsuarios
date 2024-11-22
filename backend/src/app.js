const cors = require('cors');
const express = require('express')
const router = require('./router');

const app = express();

app.use(cors()); // Permitir qualquer origem
// ou
// app.use(cors({ origin: 'http://localhost:5173' })); // Específico para o frontend


app.use(express.json());
app.use(router);

module.exports = app;