const express = require('express');

const login = require('./Routes/loginRoute');
const user = require('./Routes/userRoute');
const category = require('./Routes/categoryRoute');
const validateToken = require('./helpers/middleware');

const app = express();

app.use(express.json());

app.use('/login', login);
app.use('/user', validateToken, user);
app.use('/categories', validateToken, category);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
