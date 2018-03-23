var mongoose = require('mongoose');//mongoose is also needed here in the model file.

var Todo = mongoose.model('Todo',{
  text:{
    type: String,
    required:true,
    minlength: 1,
    trim:true
  },
  completed:{
    type: Boolean,
    default:false
  },
  completedAt:{
    type: Number,
    default: null
  }
});

module.exports = {Todo};