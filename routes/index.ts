import express = require('express');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  const resBody: IndexResponse = { name: 'express', title: 'Express' };
  res.render('index', resBody);
});

module.exports = router;
