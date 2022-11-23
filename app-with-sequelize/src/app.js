const express = require('express');

const User = require('./controllers/user.controller');

const app = express();

app.use(express.json());

app.get('/user', User.getAll);

app.get('/user/:id', User.getById);

app.get('/user/search/:id', User.getByIdAndEmail)

module.exports = app;