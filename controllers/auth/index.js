const register = require("./register");
const login = require("./login");
const getCurrentUser = require("./getCurrent");
const logOut = require("./logout");
const subscription = require("./subscription");

module.exports = {
  register,
  login,
  getCurrentUser,
  logOut,
  subscription,
};
