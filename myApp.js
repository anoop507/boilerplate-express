let express = require('express');
let app = express();
require('dotenv').config();
// app.get("/", (req, res) => {
//     // res.send('Hello Express');
//     //  res.sendFile ( __dirname + "/views/index.html");      
// });

// app.use('/public',express.static(__dirname+'/public'));
// console.log(process.env.MESSAGE_STYLE)

app.use("/json", (req,res) => {
    response = "Hello json";
    if (process.env.MESSAGE_STYLE==="uppercase") {
        response = "HELLO JSON";
    }
    res.json({message: response});
});

module.exports = app;
