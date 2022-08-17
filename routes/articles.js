const express = require('express');
const Article = require('../models/article');

const router = express.Router();


router.get('/new', (request, response) => {
    response.render('articles/new');
})


router.get('/details/:id', async (request, response) => {
    console.log(request.params.id);
    let article = await Article.findById(request.params.id);
    response.render('articles/details', { article: article });
})

router.get('/delete/:id', async (request, response) => {
    console.log(request.params.id);
    await Article.deleteOne({ _id: request.params.id });
    response.redirect('/');
})

router.get('/edit/:id', async (request, response) => {
    console.log(request.params.id);
    let article = await Article.findById(request.params.id);
    console.log(article);
    response.render('articles/update', { article: article });
})
router.get('/update/:id', async (request, response) => {
    console.log(request.params.id);
    console.log(request.body);
    await Article.updateOne({ _id: request.params.id }, {
        title: request.body.title,
        body: request.body.desc,
        author: request.body.author,
    });
    response.redirect('/');
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