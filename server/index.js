const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 3003;

app.use(express.static(__dirname + '/public'));
app.use(bodyParser());

app.listen(PORT, () => console.log(`listening on port ${PORT}`));