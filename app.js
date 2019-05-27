const express = require('express');
const did_you_mean = require('./app/didyoumean');
require("dotenv").config();
const app = express();
const port = process.env.PORT;



app.get('/', (req, res) => { 
    did_you_mean.return_did_you_mean(req.query.q, (body) => {
        let response = JSON.parse(body);
        res.setHeader('Content-Type', 'application/json');
        try {
            res.json({corrected : response.spelling.correctedQuery});   
        } catch (error) {
            res.send("No correction.");
        }

    });
});


app.listen(port, ()=> console.log(`listening on port ${port}`));