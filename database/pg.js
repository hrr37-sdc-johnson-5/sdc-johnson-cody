const { Client } = require('pg');
const client = new Client({
  host: '127.0.0.1',
  database: 'bandland_comments',
  port: 5432,
});

client.connect()
  .then(() => console.log('successfully connected to PostgresQL'))
  .catch(e => console.error('connection error', err.stack))

// CREATE
const createNewAlbumComment = (params, callback) => {
  // console.log(params);
  let queryStr = `INSERT INTO album_comments (albumid, username, comment, profileimg, id) values ($1, $2, $3, $4, DEFAULT) RETURNING *`;
  client.query(queryStr, params)
    .then(result => callback(null, result.rows))
    .catch(e => console.error(e.stack))
}

// READ
const getAlbumComments = (albumId, callback) => {
  client.query(`SELECT * FROM album_comments WHERE albumId = ${albumId}`)
    .then(result => callback(null, result.rows))
    .catch(e => console.error(e.stack))
}

// UPDATE
const updateAlbumComment = (params, callback) => {
  let queryStr = `UPDATE album_comments SET comment = ($2) WHERE id = ($1) RETURNING *`;
  client.query(queryStr, params)
    .then(result => callback(null, result.rows))
    .catch(e => console.error(e.stack))
}


// DELETE
const deleteAlbumComment = (commentId, callback) => {
  client.query(`DELETE FROM album_comments WHERE id = ${commentId} RETURNING *`)
    .then(result => callback(null, result.rows))
    .catch(e => console.error(e.stack))
}

module.exports = {
  getAlbumComments,
  createNewAlbumComment,
  updateAlbumComment,
  deleteAlbumComment}




