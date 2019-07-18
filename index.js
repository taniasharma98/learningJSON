
const express = require("express");

const  app = express();

app.get("/users", (req, res) => {
  res.sendFile(__dirname + "/data.json");
})

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/project.html");
})


app.listen(5059, () => {
 console.log("Server running on port 5059")
})
