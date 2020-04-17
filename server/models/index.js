var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      // var queryString = 'select messages.id, messages.message, messages.room_id from messages left outer join users on (messages.user_id = users.id order by messages.id desc';
      var queryString = 'SELECT m.message FROM messages m left outer join rooms r on (m.room_id = r.id) left outer join users u on (m.user_id = u.id)';
      db.query(queryString, (err, result) => {
        if (err) {
          throw (err);
        } else {
          callback(result);
        }
      });


    },
    post: function (params, callback) {
      var queryString = 'INSERT INTO messages(message, room_id, user_id) values (?, (select id from rooms where name = ?), (select id from users where name = ? limit 1))';
      db.query(queryString, params, (err, result) => {

        if (err) {
          throw (err);
        } else {
          callback(result);
        }
      });
    }
  },

 // var [a,b,c] = letters
// a function which produces all the messages

// a function which can be used to insert a message into the database
  users: {
    // Ditto as above.
    get: function (callback) {
      db.query('SELECT * FROM users', (err, results) => {
        callback(results);
      });
    },

    post: function (params, callback) {
      db.query('INSERT INTO users(name) values(??)', params, (err, result) => {
        callback(result);
      });
    }
  }
};

