let express = require('express');
let app = express();
// app.get("/", (req, res) => {
//     // res.send('Hello Express');
//     //  res.sendFile ( __dirname + "/views/index.html");      
// });

app.use('/public',express.static(__dirname+'/public'));

app.get("/json", (req,res) => {
    response = "Hello json";
    if (process.env.MESSAGE_STYLE==="uppercase") {
        response = "HELLO JSON";
    }
    res.json({message: response});
});

module.exports = app;
