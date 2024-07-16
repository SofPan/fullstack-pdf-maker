const db = require('../../connection');

const getUserById = (id) => {
  const values = [id];
  const query = `
    SELECT *
    FROM users
    WHERE users.id = $1
  `;

  return db.query(query, values)
    .then(results => {
      return results.rows[0];
    })
    .catch(err => console.error("getUserById error", err));
}

module.exports = getUserById;