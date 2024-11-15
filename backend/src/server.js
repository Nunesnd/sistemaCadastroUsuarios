const app = require('./app');

require('dotenv').config();

const PORT = process.env.PORT || 3333;

app.listen(PORT, () => console.log(`servidor roedando na porta ${PORT}`));