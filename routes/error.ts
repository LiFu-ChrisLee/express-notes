import express = require('express');

const router = express.Router();

import createError = require('http-errors');

/* GET users listing. */
router.get('/', (req, res) => {
  const err = createError(404);
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = router;
