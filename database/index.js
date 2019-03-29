const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/bandland');

let userSchema = mongoose.Schema({
  id: Number,
  username: String,
  comment: String,
  profileImageURL: String,
  album: Number
});

let User = mongoose.model('User', userSchema);

let getUser = (callback, id) => {
  User.find({"id":id}).limit(1).exec((err, user) => {
    if(err) {
      callback(err);
    } else {
      callback(null, user);
    }
  })
};

module.exports = {
  getUser: getUser
}