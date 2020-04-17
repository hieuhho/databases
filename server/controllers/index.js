var models = require('../models');
var bluebird = require('bluebird');
var orm = require('../db');

module.exports = {
  messages: {
    get: function (req, res) {
      Message.findAll({include: [User]})
        .then((err, results) => {
          res.json(results);
        });
    },

    post: function (req, res) {
      User.findOrCreate({where: {name:req.body.username}})
        .then((err, results) => {

          var params = {
            message: req.body.message,
            room_id: req.body.roomname,
            user_id: user.get('id')
          };
          Message.create(params)
            .then((err, results) => {
              res.sendStatus(201);
            });
        });

    }
  },

  users: {
    get: function (req, res) {
      User.findAll()
        .then((err, results) => {
          res.json(results);
        });
    },

    post: function (req, res) {

      User.create({where: { name:req.body.username }})
        .then((err, results) => {
          res.sendStatus(201);
        });
    }
  },

  rooms: {
    get: function (req, res) {
      Rooms.findAll()
        .then((err, results) => {
          res.json(results);
        });
    },

    post: function (req, res) {

      Rooms.create({where: {name:req.body.roomname}})
        .then((err, results) => {
          res.sendStatus(201);
        });
    }
  }


};

