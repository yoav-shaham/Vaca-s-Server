const fs = require('fs');
const express = require('express')
const app = express()

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });  

app.get('/commands',function(req,res){
    let file = fs.readFileSync('commands.json')
    file=JSON.parse(file)
    res.json(file)
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))
