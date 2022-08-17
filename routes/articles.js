const express = require('express');

const router = express.Router();


router.get('/', (request, response) => {
    response.send('Articles Post');
})

module.exports = router;