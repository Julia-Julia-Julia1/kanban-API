const express = require('express');

const routes = require('./routes');
const bodpars = require('./bodyParser');
// import express from 'express'  работает только с babel с babel
const app = express(); 
// результат работы функции Express
const PORT = 3000



bodpars(app);
routes(app);


app.listen(PORT, () => {console.log(`Example app listening at http://localhost:${PORT}`)})



