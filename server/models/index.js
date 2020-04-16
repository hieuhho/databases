var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      db.connection.query('SELECT m.message FROM messages m inner join rooms r on (m.room_id = r.id) inner join users u on (m.user_id = u.id)', (err, result) => {
        if (err) {
          throw ("query failed! ", err);
        } else {
          callback(null, result);
        }
      });


    },
    post: function (params, callback) {
      db.connection.query('INSERT INTO messages(message, room_id, user_id) values (?, (select distinct id from users where name = ?), (select distinct id from rooms where name = ?))', params, (err, result) => {
        if (err) {
          callback(err);
        } else {
          callback(null, result);
        }
      });
    }
  },

 // var [a,b,c] = letters
// a function which produces all the messages

// a function which can be used to insert a message into the database
  users: {
    // Ditto as above.
    get: function (username, callback) {
      db.connection.query('SELECT * FROM users', username, (err, result) => {
        if (err) {
          throw (err);
        } else {
          callback(null, result);
        }
      });
    },

    post: function (username, callback) {
      db.connection.query('INSERT INTO users(name) values(?)', username, (err, result) => {
        if (err) {
          callback(err);
        } else {
          callback(null, result);
        }
      });
    }
  }
};

