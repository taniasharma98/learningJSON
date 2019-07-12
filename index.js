var express = require("express");
var app = express();
app.listen(5059, () => {
 console.log("Server running on port 5059");
});


app.get('/', function(req, res){
        res.sendFile(path + 'index.html');
        })
