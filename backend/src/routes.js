const express = require ('express');
const crypto = require('crypto');

const cadastro_pessoal = require('./controllers/cadastro_pessoal')
const cadastro_familia = require('./controllers/cadastro_familia')

const routes = express.Router();

routes.post('/cadastro', cadastro_pessoal.create);

routes.post('/cadastrofamilia', cadastro_familia.create);

module.exports = routes;