const express = require('express');
require('dotenv').config();
const routers = require('./routes');
const {restApiRoot} = require('./config');
const app = express();
app.use(express.json());

app.use(restApiRoot, routers.welcome_router);

app.listen(process.env.APPLICATION_PORT, ()=>{
    console.log(`Server is running on http://localhost:${process.env.APPLICATION_PORT}`);
})