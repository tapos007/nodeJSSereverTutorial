const express = require('express');

var app = express();


app.use(express.static(__dirname +'/public'));

app.get('/',(req,res)=>{
    res.send('<h1>hello express JS</h1>');
});

app.get('/about',(req,res)=>{
   res.send("about page ");
});

app.get('/show',(req,res)=>{
    res.send({
       name : "sumon ahamed",
        status : "request plz dont come tomorrow",
        hobby:[
            "playing","sleeping","talking"
        ]
    })
});

app.listen(3000);