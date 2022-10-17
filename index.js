const express = require('express');
const app = express();
require('dotenv').config();
require("./database/db");
const port = process.env.port;
const bodyParser = require("body-parser")
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
const router = require('./routes/userroute')
app.use([router])

app.listen(port, () => {
    console.log(`Our Server is running at port ${port}`)
})