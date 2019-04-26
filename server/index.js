const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = 3003;


app.use(cors());
app.use('/', express.static(__dirname + '/../client/dist'))
app.use('/:id', express.static(__dirname + '/../client/dist'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//===========Routes====================//

const db = require('../database/pg.js');

app.get('/support/:id', (req, res) => {
  let albumId = Number(req.params.id);
  console.log(typeof albumId);
  db.getUsersForAlbum(albumId, (err, albumUsers) => {
    if (err) {
      console.log(err);
    } else {
      res.json(albumUsers);
    }
  });
});

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
