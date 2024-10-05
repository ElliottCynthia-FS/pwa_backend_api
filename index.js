const express = require('express');
const app = express();
const userRouter = require('./routes/users');
// const middlewares = require('./middlewares/users');
const middlewares = require('@cynelliott-fs/pwa-validations');
const { signup } = require('./controllers/users');
// const morgan = require('morgan');

app.use(express.urlencoded({ extended: true }));

app.use('/', userRouter);

// app.get("/", (req, res) => {
//     res.send('Hello World!')
// });

app.post(
    '/signup', 
    middlewares.validateEmail, 
    middlewares.validatePhone, 
    middlewares.validateBirthday, 
    middlewares.validatePassword,
    signup
    );

app.listen(3000);