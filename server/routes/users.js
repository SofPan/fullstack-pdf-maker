const express = require('express');
const router = express.Router();

router.get('/:id', (req, res) => {
  const userId = req.params;
  console.log("userID should be 1: ", userId);
});

module.exports = router;
