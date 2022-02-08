const sequelize = require('../db');
const { DataTypes } = require('sequelize');

const User = sequelize.define('user', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  userName: { type: DataTypes.STRING, unique: true },
  email: { type: DataTypes.STRING, unique: true },
  password: { type: DataTypes.STRING },
  role: { type: DataTypes.STRING, defaultValue: 'USER' },
});

const Profile = sequelize.define('profiles', {
  name: { type: DataTypes.INTEGER },
  gender: { type: DataTypes.STRING },
  birthdate: { type: DataTypes.STRING },
  city: { type: DataTypes.STRING },
});

const Role = sequelize.define('profiles', {
  id: { type: DataTypes.INTEGER, primaryKey: true },
  name: { type: DataTypes.STRING },
});

module.exports = {
  User,
  Profile,
  Role,
};
