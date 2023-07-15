const register = require("./register");
const login = require("./login");
const getCurrentUser = require("./getCurrent");
const logOut = require("./logout");
const subscription = require("./subscription");
const updateAvatar = require("./updateAvatar");

module.exports = {
  register,
  login,
  getCurrentUser,
  logOut,
  subscription,
  updateAvatar,
};
