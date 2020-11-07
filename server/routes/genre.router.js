const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/', (req, res) => {
  const queryText = `SELECT * FROM "movies"
JOIN "movies_genres" ON "movies_genres".movies_id = "movies".id
JOIN "genres" ON "movies_genres".genre_id = "genres".id;
`;
  pool.query(queryText).then((result) => {
    console.log(result.rows);

    res.send(result.rows);
  });
});

module.exports = router;