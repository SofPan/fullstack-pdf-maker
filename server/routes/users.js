const express = require('express');
const getUserById = require('../db/queries/users/getUserById');
const router = express.Router();

router.get('/:id', (req, res) => {
  const userId = req.params.id;

  getUserById(userId)
    .then(user => {
      res.json(user);
    })
    .catch(err => {
      console.error('Error fetching user information', err);
      res.status(500).json({ error: 'Internal server error' });
    })
});

module.exports = router;
