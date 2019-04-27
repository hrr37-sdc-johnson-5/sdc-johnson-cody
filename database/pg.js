const { Pool } = require('pg');
const pool = new Pool({
  host: '127.0.0.1',
  database: 'bandland_comments',
  port: 5432,
});

// CREATE
const createNewAlbumComment = (params, callback) => {
  let queryStr = `INSERT INTO album_comments (albumid, username, comment, profileimg, id) values ($1, $2, $3, $4, DEFAULT) RETURNING *`;
  pool.connect()
    .then(client => {
      return client.query(queryStr, params)
        .then(result => {
          callback(null, result.rows)
        })
        .catch(e => {
          client.release()
          console.error(e.stack)
        })
    })
}

// READ
const getAlbumComments = (param, callback) => {
  pool.connect()
    .then(client => {
      return client.query(`SELECT * FROM album_comments WHERE albumId = $1`)
        .then(result => {
          callback(null, result.rows)
        })
        .catch(e => {
          client.release()
          console.error(e.stack)
        })
    })
}

// UPDATE
const updateAlbumComment = (params, callback) => {
  let queryStr = `UPDATE album_comments SET comment = $2 WHERE id = $1 RETURNING *`;
  pool.connect()
    .then(client => {
      return client.query(queryStr, params)
        .then(result => {
          callback(null, result.rows)
        })
        .catch(e => {
          client.release()
          console.error(e.stack)
        })
    })
}

// DELETE
const deleteAlbumComment = (param, callback) => {
  pool.connect()
    .then(client => {
      return client.query(`DELETE FROM album_comments WHERE id = $1 RETURNING *`)
        .then(result => {
          callback(null, result.rows)
        })
        .catch(e => {
          client.release()
          console.error(e.stack)
        })
    })
}

module.exports = {
  getAlbumComments,
  createNewAlbumComment,
  updateAlbumComment,
  deleteAlbumComment}




