const express = require('express');
const BodyParser = require("body-parser");
const { urlencoded } = require('body-parser');

const app = express();
app.use(express.static('body'));
app.use(BodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs')


app.get('/',(req,res)=>{
    res.render("Home")
})

app.listen(8080, ()=>{
    console.log('server runnung on Port 8080')
})
