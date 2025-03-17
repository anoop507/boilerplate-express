let express = require('express');
let app = express();
let env = require('dotenv').config()
// app.get("/", (req, res) => {
//     // res.send('Hello Express');
//     //  res.sendFile ( __dirname + "/views/index.html");      
// });

// app.use('/public',express.static(__dirname+'/public'));

app.get("/json", (req,res) => {
    res.json({
        message: process.env.MESSAGE_STYLE("Hello json")
    });
});

module.exports = app;
