const express = require('express');
const articlesRouter = require('./routes/articles');
const mongoose = require('mongoose');
const Articles = require('./models/article');
const app = express();

mongoose
    .connect('mongodb://localhost:27017/Blog', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('connected to DB'))
    .catch((err) => console.log('Error', err))

app.set('view engine', 'ejs');

app.use('/articles', articlesRouter);

app.get('/', async (request, response) => {
    const articles = await Articles.find({});
    console.log(request.headers);
    //response.send('Hello world!');
    response.render('index', { articles: articles });
})

app.listen(8000);