const express = require('express');
const app = express();

//para que json este en funcionamiento 
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//invocamos el dotenv
const dotenv = require('dotenv');
const bcrypt = require('bcryptjs/dist/bcrypt');
dotenv.config({path:'./env/.env'});

//para usar css estatico
app.use('/resources', express.static('public'));
app.use('/resources', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

const bcryptjs = require('bcryptjs');

const session = require('express-session');
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));

const conecction = require('./database/db')

console.log(__dirname);

//ruta raiz
app.get('/',(req, res)=>{
    res.render('index');
    // res.send('Hola.....');
});

//hacemos un callbacks para asignar un puerto  y direccionar
app.listen(3000,(req, res)=>{
    console.log('Servidor OK en http://localhost:3000');
});