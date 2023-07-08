const { User } = require("../../models/user");

const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");

const { SECRET_KEY } = process.env;

const { httpError } = require("../../helpers");

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    throw httpError(401, "Wrong email or password");
  }
  const passwordCompare = bcrypt.compare(password, user.password);
  if (!passwordCompare) {
    throw httpError(401, "Wrong email or password");
  }

  const payload = {
    id: user._id,
  };

  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "23d" });
  await User.findByIdAndUpdate(user._id, { token });

  res.json({
    token,
  });
};

module.exports = login;
