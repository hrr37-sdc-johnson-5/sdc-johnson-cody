const { Client } = require('pg');
const path = require('path');
const client = new Client({
  host: '127.0.0.1',
  database: 'bandland_comments',
  port: 5432,
});

client.connect()
  .then(() => console.log('successfully connect PostgresQL'))
  .catch(e => console.error('connection error', err.stack))

const getUsersForAlbum = (albumId, callback) => {
  client.query(`SELECT * FROM album_comments WHERE albumId = ${albumId}`)
    .then(result => callback(null, result.rows))
    .catch(e => console.error(e.stack))
}

module.exports.getUsersForAlbum = getUsersForAlbum;



