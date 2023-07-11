const express = require("express");

const controllers = require("../../controllers");

const { validateBody, authenticate } = require("../../middlewares");
const { schemas } = require("../../models/user");

const router = express.Router();

router.post(
  "/register",
  validateBody(schemas.registerSchema),
  controllers.register
);

router.post("/login", validateBody(schemas.loginSchema), controllers.login);

router.get("/current", authenticate, controllers.getCurrentUser);

router.post("/logout", authenticate, controllers.logOut);

router.patch(
  "/",
  authenticate,
  validateBody(schemas.subscriptionSchema),
  controllers.subscription
);

module.exports = router;
