const { ctrlWrapper } = require("../helpers");

const {
  register,
  login,
  getCurrentUser,
  logOut,
  subscription,
} = require("./auth");

const {
  addContact,
  deleteContact,
  getAllContacts,
  getContactById,
  updateContact,
  updateStatusContact,
} = require("./contacts");

module.exports = {
  register: ctrlWrapper(register),
  login: ctrlWrapper(login),
  getCurrentUser: ctrlWrapper(getCurrentUser),
  logOut: ctrlWrapper(logOut),
  subscription: ctrlWrapper(subscription),
  getAllContacts: ctrlWrapper(getAllContacts),
  getContactById: ctrlWrapper(getContactById),
  addContact: ctrlWrapper(addContact),
  updateContact: ctrlWrapper(updateContact),
  updateStatusContact: ctrlWrapper(updateStatusContact),
  deleteContact: ctrlWrapper(deleteContact),
};
