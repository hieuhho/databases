var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get((err, result) => {
        if (err) {
          throw ('get failed: ', err);
        } else {
          res.json(result);
        }
      })
    },
    post: function (req, res) {
      models.messages.post(req.body, (err) => {
        if (err) {
          throw ('post failed: ', err);
        }
      })
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
      models.users.post(req.body, (err) => {
        if (err) {
          throw ('posting failed')
        }
      })
    }
  }
};

