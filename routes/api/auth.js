const express = require("express");

const controllers = require("../../controllers");

const { validateBody, authenticate, upload } = require("../../middlewares");
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

router.get("/verify/:verificationCode", controllers.verifyEmail);
router.post(
  "/verify",
  validateBody(schemas.emailSchema),
  controllers.resendVerifyEmail
);

router.patch(
  "/",
  authenticate,
  validateBody(schemas.subscriptionSchema),
  controllers.subscription
);

router.patch(
  "/avatars",
  authenticate,
  upload.single("avatar"),
  controllers.updateAvatar
);

module.exports = router;
