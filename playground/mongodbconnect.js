//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if(err){
    return console.log('Cannot connect to mongo db server');
  }
  console.log('connected to mongo db server');

  db.collection('Todos').insertOne({
    text: 'Something to do',
    completed: false
  },(err,result)=>{
    if(err){
      return console.log('Unable to insert to do.', err);
    }
    console.log(JSON.stringify(result.ops,undefined,2))
  })
  db.collection('Users').insertOne({//access collection object with mthod insert one to insert a record
    name: 'Matthew Stahlmann',//Two arguments, first is the object of data
    age: '44',
    location:'offrs down town'
  },(err,result)=>{//second argument is the calback function with 2 arguments, the error and the reults of the insert.
    if(err){
      return console.log('Unable to insert to do.', err);
    }
    console.log(JSON.stringify(result.ops[0]._id.getTimestamp(),undefined,2))
  })
  db.close();//close database object
});