const axios = require('axios');
const {check, validationResult } = require('express-validator')

const router = require('express').Router();

//first_name, last_name, email

router.post('/userdata', [
    check('first_name').isLength({min: 1}).isAlpha().withMessage('Names must contain only alphabetical characters'),
    check('last_name').isLength({min: 1}).isAlpha().withMessage('Names must contain only alphabetical characters'),
    check('email').isEmail(),
], (req, res) => {

    const erors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(401).json({errors: errors.array() })
    }

    try {

        const {first_name, last_name, email} = req.body;

    } catch(err) {
        res.status(401).json({message: "Invalid information"})
    }



})