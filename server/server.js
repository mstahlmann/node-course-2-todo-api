//express and body-parser npm packages were installed for the api
var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');//es6 destructuring. variable set accesses the property we need from the object returned
var {User} = require('./models/user');

var app = express();

app.use(bodyParser.json());

app.post('/todos',(req,res)=>{
    console.log(req.body);
    var todo = new Todo({
      text: req.body.text
    });
    todo.save().then((doc)=>{
      res.send(doc);
    },
    (e)=>{
      res.status(400).send(e);
    });
});
app.listen(3000,()=>{
  console.log('started on port 3000');
});