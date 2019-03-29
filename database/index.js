const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/bandlandUsers', {useNewUrlParser: true});

let userSchema = new mongoose.Schema({
  _id: {
    unique: true,
    data: Number
  },
  username: String,
  comment: String,
  profileImageURL: String
});

let User = mongoose.model('User', userSchema);
