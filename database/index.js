const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/bandland', {useNewUrlParser: true});

let userSchema = new mongoose.Schema({
  _id: {
    unique: true,
    data: Number
  },
  username: String,
  comment: String,
  profileImageURL: String,
  album: Number
});

let User = mongoose.model('User', userSchema);

let getUser = (callback) => {
  User.find().limit(1).exec((err, user) => {
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