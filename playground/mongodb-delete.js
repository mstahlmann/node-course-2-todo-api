//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if(err){
    return console.log('Cannot connect to mongo db server');
  }
  console.log('connected to mongo db server');

  //delete many
  // db.collection('Users').deleteMany({name: 'Matthew Stahlmann'}).then((result)=>{
  //   console.log(result);
  // })
  //delete one
  // db.collection('Todos').deleteOne({text: 'Eat Lunch'}).then((result)=>{
  //   console.log(result);
  // });
  //find one and delete
  db.collection('Users').findOneAndDelete({_id: new ObjectID("5ab3e71b104a5f0cda6baa3f")}).then((result)=>{//mongo id queries need new ObjectID method
    console.log(result);
  });
  //db.close();

});