const { User } = require("../../models/user");

const logOut = async (req, res) => {
  const { _id } = req.user;

  await User.findByIdAndUpdate(_id, { token: "" });

  res.json({
    status: 204,
    message: "No Content",
  });
};

module.exports = logOut;
