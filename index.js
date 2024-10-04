const express = require('express');
const app = express();
const userRouter = require('./routes/users');
const middlewares = require('./middlewares/users');
const { signup } = require('./controllers/users');
// const morgan = require('morgan');

app.use(express.urlencoded({ extended: true }));

app.use('/', userRouter);

// app.get("/", (req, res) => {
//     res.send('Hello World!')
// });

app.post(
    '/signup', 
    middlewares.email, 
    middlewares.phone, 
    middlewares.birthday, 
    middlewares.password,
    signup
    );

app.listen(3000);