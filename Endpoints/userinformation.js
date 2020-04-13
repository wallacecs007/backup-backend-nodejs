const axios = require('axios');
const router = require('express').Router();

const checkJwt = require('../authentication/auth.js')

//first_name, last_name, email

router.get('/hello', checkJwt, (req, res) => {
    console.log(req.user);
    res.status(201).json('Hello, you have accessed our private endpoint :)');
})

router.get('/hello2', (req, res) => {
    console.log('Api working');
    res.status(201).json('Hello');
})


module.exports = router;