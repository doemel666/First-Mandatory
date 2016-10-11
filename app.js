var express = require('express');
var app = express();

var fs = require('fs');

app.set('view engine','ejs');

app.get('/',function(req,res)
{
    var obj = {
        title: 'Home',
        subtitle: 'Homepage for the Mandatory Assignment',
        paragraph: 'This is some text i choose to put in this paragraph'
    };
    res.render('index',obj);
});

app.get('/about',function (req,res)
{
    fs.readFile('about.json','utf8', function (err,data) {
        res.render('about',JSON.parse(data))
    })
})

app.listen(3000);