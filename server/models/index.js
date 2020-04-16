var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      db.connection.query(queryString, queryArg, (err, result)) {
        if (err) {
          throw ("query failed: ", err);
        } else {
          return result;
        }
      }


    }, // a function which produces all the messages
    post: function () {} // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

