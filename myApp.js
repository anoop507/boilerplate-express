let express = require('express');
let app = express();
let env = require('dotenv').config()
// app.get("/", (req, res) => {
//     // res.send('Hello Express');
//     //  res.sendFile ( __dirname + "/views/index.html");      
// });

// app.use('/public',express.static(__dirname+'/public'));

app.get("/json", (req,res) => {
    // res.json({
    //     message: "Hello json"
    // });
    if (process.env.MESSAGE_STYLE==="uppercase") {
        res = "Hello json".toUpperCase;
    } else {
        res = "Hello json";
    }
});

module.exports = app;
