const express = require('express');
const hbs = require('hbs');

var app = express();

app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));
hbs.registerPartials(__dirname + '/views/partials');

hbs.registerHelper('creatorName', ()=> {

    return "tapos ghosh";
});
hbs.registerHelper('nowYears', ()=> {

    return new Date().getFullYear();
});
// app.get('/',(req,res)=>{
//     res.send('<h1>hello express JS</h1>');
// });
//
// // app.get('/about',(req,res)=>{
// //    res.send("about page ");
// // });
//
// app.get('/show',(req,res)=>{
//     res.send({
//        name : "sumon ahamed",
//         status : "request plz dont come tomorrow",
//         hobby:[
//             "playing","sleeping","talking"
//         ]
//     })
// });
//
// app.get('/about',(req,res)=>{
//    res.render('about',{
//        name:"tapos",
//        email:"tapos.aa@gmail.com"
//    })
// });

app.get('/', (req, res)=> {
    res.render('home', {
        page_name: "home page",
        name: "home",
        description: "home page bla bla bla"
    });

});

app.get('/contact', (req, res)=> {
    res.render('contact', {
        page_name: "contact page",
        name: "contact",
        description: "contact page bla bla bla"
    });

});
app.get('/about', (req, res)=> {
    res.render('about', {
        page_name: "about page",
        name: "about",
        description: "about page bla bla bla"
    });

});

app.get('/work', (req, res)=> {
    res.render('our_work', {
        page_name: "work page",
        name: "work",
        description: "work page bla bla bla"
    });

});

app.listen(3000);