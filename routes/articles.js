const express = require('express');
const Article = require('../models/article');

const router = express.Router();


router.get('/new', (request, response) => {
    response.render('articles/new');
})

router.post('/add', async (request, response) => {
    console.log(request.body);
    let article = new Article({
        title: request.body.title,
        body: request.body.desc,
        author: request.body.author,
    })
    await article.save();
    response.redirect('/');
})

router.get('/', (request, response) => {
    response.send('Articles Post');
})

module.exports = router;