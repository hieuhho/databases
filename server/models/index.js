var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      // var queryString = 'select messages.id, messages.message, messages.room_id from messages left outer join users on (messages.user_id = users.id order by messages.id desc';
      var queryString = 'SELECT * FROM messages m left outer join rooms r on (m.room_id = r.id) left outer join users u on (m.user_id = u.id)';
      db.query(queryString, (err, result) => {
        if (err) {
          throw (err);
        } else {
          callback(null, result);
        }
      });


    },
    post: function (params, callback) {
      var queryString = 'INSERT INTO messages(message, room_id, user_id) values (?, (select name from rooms where name = ?), (select name from users where name = ?))';
      db.query(queryString, params, (err, result) => {
        if (err) {
          throw (err);
        } else {
          callback(null, result);
        }
      });
    }
  },


  users: {
    // Ditto as above.
    get: function (callback) {
      db.query('SELECT * FROM users', (err, result) => {
        callback(null, result);
      });
    },

    post: function (params, callback) {
      db.query('INSERT INTO users(name) values(??)', params, (err, result) => {
        callback(null, result);
      });
    }
  }
};

