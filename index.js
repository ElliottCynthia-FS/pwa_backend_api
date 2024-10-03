const express = require('express');
const app = express();
const userRouter = require('./routes/users');
// const morgan = require('morgan');

app.use(express.urlencoded({ extended: true }));

app.use('/', userRouter);

app.get("/", (req, res) => {
    res.send('Hello World!')
});

app.listen(3000);