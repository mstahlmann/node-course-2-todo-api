//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if(err){
    return console.log('Cannot connect to mongo db server');
  }
  console.log('connected to mongo db server');
  // db.collection('Todos')
  // .find({
  //   _id: new ObjectID('5ab3dc273524aa0b81c8974b')//to query with id in mongo you have to construct it with the new id function
  // }).toArray()
  // .then((docs)=>{
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs,undefined,2));
  // },(err)=>{
  //   console.log('Unable to fetch todos',err);
  // });
  // db.collection('Todos')
  // .find().count()
  // .then((count)=>{
  //   console.log(`Todos Count: ${count}`);
  // },(err)=>{
  //   console.log('Unable to fetch todos',err);
  // });

  db.collection('Users')
  .find({name:"Matthew Stahlmann"}).toArray()
  .then((docs)=>{
    console.log(JSON.stringify(docs,undefined,2));
  },(err)=>{
    console.log('Unable to fetch todos',err);
  });
  //db.close();

});