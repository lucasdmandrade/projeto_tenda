const express = require ('express');
const crypto = require('crypto');

const cadastro_pessoal = require('./controllers/cadastro_pessoal')
const cadastro_familia = require('./controllers/cadastro_familia')
const cadastro_paroquia = require('./controllers/cadastro_paroquia')
const cadastro_comunidade = require('./controllers/cadastro_comunidade')

const routes = express.Router();

routes.post('/cadastro', cadastro_pessoal.create);

routes.post('/cadastrofamilia', cadastro_familia.create);

routes.post('/cadastro_paroquia', cadastro_paroquia.create);

routes.post('/cadastro_comunidade', cadastro_comunidade.create);

module.exports = routes;