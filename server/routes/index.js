var express = require('express');

var router = express.Router();

router.route('/')
    .get((req, res) => {
        res.render('index.html');
    });

module.exports = router;