var mongoose = require('mongoose');//mongoose is also needed here in the model file.

var User = mongoose.model('User',{
  email:{
    type: String,
    required:true,
    minlength: 1,
    trim:true
  }
});

module.exports = {User};