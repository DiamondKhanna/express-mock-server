const express = require('express');
const router = express.Router();


router.use((req, res, next) => {
    // dummy middleware
    console.log('Request', req);
    next();
});

router.get('/welcome',(req, res) => {
    const response = {
        status : 200,
        message : "Welcome to Mockserver"
    }
    res.json(response.message);
});

router.get('/info',(req, res) => {
    const response = {
        service: 'Express-Mock-Server',
        version: '1.0.0',
        health: 'Green'
    }
    res.json(response);
});

module.exports = router;

