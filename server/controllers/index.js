var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      console.log('MESSAGES GET CONTROLLER');
      models.messages.get((err, result) => {
        res.json(result);
      });
    },
    post: function (req, res) {
      console.log('req: ', req.body);
     console.log('MESSAGES POST CONTROLLER');
      var params = [req.body.message, req.body.roomname, req.body.username];
      models.messages.post(params, (err, results) => {
        res.json(results);
      });
    }
  },

  users: {
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

