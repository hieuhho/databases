var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get((err, result) => {
        // if (err) {
        //   throw ('get failed: ', err);
        // } else {
          res.json(result);
        // }
      });
    },
    post: function (req, res) {
      var params = [req.body.message, req.body.roomname, req.body.username];
      models.messages.post(params, (err, results) => {
        // if (err) {
        //   throw ('post failed: ', err);
        // } else {
          res.json(results)
        // }
      });
    }
  },


 // a function which handles a get request for all messages
// a function which handles posting a message to the database

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get((err, result) => {
        if (err) {
          throw ('get users failed');
        } else {
          res.json(result);
        }
      });
    },

    post: function (req, res) {
      var params = [req.body.username];
      models.users.post(params, (err, result) => {
        if (err) {
          throw ('posting failed');
        } else {
          res.json(result);
        }
      });
    }
  }
};

