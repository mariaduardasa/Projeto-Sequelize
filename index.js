const express = require('express');
const { engine } = require('express-handlebars');
const conn = require('./db/conn');
const User = require('./models/User');


const app = express();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');

// Corrija 'esxtend' para 'extended'
app.use(
    express.urlencoded({
        extended: true,  // Correção aqui
    }),
);

app.use(express.json());
app.use(express.static('public'));

conn.sync().then(() => {
    app.listen(3000, () => {
        console.log('Servidor rodando na porta 3000');
    });
}).catch((err) => {
    console.log('Erro ao conectar ao banco de dados:', err);
});
