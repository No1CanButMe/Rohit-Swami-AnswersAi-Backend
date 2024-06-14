const sequelize = require('../utils/db');
const User = require('./user');
const Question = require('./question');

User.hasMany(Question, { foreignKey: 'userId', as: 'questions' });
Question.belongsTo(User, { foreignKey: 'userId', as: 'user' });

module.exports = {
  sequelize,
  User,
  Question
};
