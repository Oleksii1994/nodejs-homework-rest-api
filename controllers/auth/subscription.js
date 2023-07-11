const { User } = require("../../models/user");

const { httpError } = require("../../helpers");

const subscription = async (req, res, next) => {
  try {
    const { _id } = req.user;
    const { subscription } = req.body;

    await User.findByIdAndUpdate(_id, {
      subscription,
    });

    res.json({ message: "Subscription updated successfully" });
  } catch (error) {
    next(httpError(error.status));
  }
};

module.exports = subscription;
