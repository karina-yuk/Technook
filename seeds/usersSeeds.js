const { User } = require("../models");

const usersData = [
  {
    username: "Carlito",
    email: "carlito.456@gmail.com",
    password: "12345678",
  },
  {
    username: "Melissa",
    email: "melissa.123@hotmail.com",
    password: "78945612",
  },
  {
    username: "Nathan",
    email: "nathan.123@gmail.com",
    password: "14785236",
  },
];

const userssSeeds = () => User.bulkCreate(usersData);

module.exports = userssSeeds;
