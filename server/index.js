const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const User = require('../database/index.js');
const PORT = 3003;

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.get('/api/users/:id', (req, res) => {
  let id = req.params.id;
  User.getUser((err, user) => {
    if(err) {
      console.log(err);
    } else {
      res.json(user);
    }
  }, id);
});

app.get('/:id', (req, res) => {
  let albumId = req.params.id;

  User.getUsersForAlbum((err, albumUsers) => {
    if (err) {
      console.log(err);
    } else {
      res.json(albumUsers);
    }
  }, albumId);
})

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
