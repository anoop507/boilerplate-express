let express = require('express');
let app = express();
let env = require('dotenv').config()
// app.get("/", (req, res) => {
//     // res.send('Hello Express');
//     //  res.sendFile ( __dirname + "/views/index.html");      
// });

// app.use('/public',express.static(__dirname+'/public'));

app.get("/json", (req,res) => {
    if (process.env.MESSAGE_STYLE==="uppercase") {
        response = "Hello json";
    } else {
        response = "Hello json";
    }
    res.json({message: response});
});

module.exports = app;
