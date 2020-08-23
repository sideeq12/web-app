const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();
app.get("/", (req, res)=>{
    res.sendFile(__dirname+"/index.html")
})

app.listen("8080", ()=>{
    console.log("Server running on port 8080")
})