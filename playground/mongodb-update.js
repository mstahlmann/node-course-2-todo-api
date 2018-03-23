//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if(err){
    return console.log('Cannot connect to mongo db server');
  }
  console.log('connected to mongo db server');

  //find one and update
  db.collection('Users').findOneAndUpdate(
    {_id: new ObjectID("5ab3dd4563802b0bae5a6550")},
    {
      $set:{
        name:"Jenni Stahlmann"
      },
      $inc: {
        age:+1
      }
    },
    {
      returnOriginal:false
    }
  )
  .then((result)=>{
    console.log(result);
  })
  //db.close();

});