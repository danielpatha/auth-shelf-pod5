const express = require('express');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * Get all of the items on the shelf
 */
router.get('/',rejectUnauthenticated ,(req, res) => {
   const sqlText = `
   SELECT *
   FROM "item"
   ORDER BY "id" ASC;
   `;

   pool.query(sqlText)
   .then((result) =>{
    // console.log('result is:',result.rows)
    res.send(result.rows)
   })
   .catch((error) =>{
    console.log('error fetching items', error)
    res.sendStatus(500)
   })
});

/**
 * Add an item for the logged in user to the shelf
 */
router.post('/',rejectUnauthenticated , (req, res) => {
  // endpoint functionality
//   console.log("req.body is:",req.body)
  const sqlText = `
  INSERT INTO "item"
  ("description","image_url","user_id")
  VALUES
  ($1,$2,$3)
  `;

  pool.query(sqlText,[req.body.description,req.body.image_url,req.user.id])

  .then((result) =>{
    // console.log('result.rows is:', result.rows)
    res.sendStatus(201)
  })
  .catch((error) =>{
    console.log('error in /POST', error)
  })
});


/**
 * Delete an item if it's something the logged in user added
 */
router.delete('/:id',rejectUnauthenticated, (req, res) => {
  // endpoint functionality
  const sqlText = `
  DELETE
  FROM "item"
  WHERE "id" = $1;
  `;
  console.log('req.body:', req.body);
  console.log('userid', req.user.id)
if( req.user.id === req.body.user_id){
  pool.query(sqlText,[req.params.id])
  .then((result) =>{
    res.sendStatus(200)
  })
  .catch((error) =>{
    console.log('error deleting item',error)
  })}
  else{res.sendStatus(403)}
});

/**
 * Update an item if it's something the logged in user added
 */
router.put('/:id', (req, res) => {
  // endpoint functionality
});

/**
 * Return all users along with the total number of items
 * they have added to the shelf
 */
router.get('/count', (req, res) => {
  // endpoint functionality
});

/**
 * Return a specific item by id
 */
router.get('/:id', (req, res) => {
  // endpoint functionality
});

module.exports = router;
