var mysql = require('mysql');
let Sequelize = require('sequelize');
let orm = new Sequelize('chat', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

var User = orm.define('User', {
  name: Sequelize.STRING
});

var Message = orm.define('Message', {
  message: Sequelize.STRING,
  room_id: Sequelize.INTEGER,
  user_id: Sequelize.INTEGER
});

User.hasMany(Message);
Message.belongsTo(User);

User.sync();
Message.sync();

exports.User = User;
exports.Message = Message;
// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".
