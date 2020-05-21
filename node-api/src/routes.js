const express = require('express');
const routes = express.Router();

const ProductControler = require('./controllers/ProductController');

routes.get('/products', ProductControler.index);
routes.get('/products/:id', ProductControler.show);
routes.post('/products', ProductControler.store);
routes.put('/products/:id', ProductControler.update);
routes.delete('/products/:id', ProductControler.destroy);

module.exports = routes;