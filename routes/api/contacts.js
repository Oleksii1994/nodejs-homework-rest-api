const express = require("express");
const router = express.Router();
const { isValidId, authenticate } = require("../../middlewares");
const controllers = require("../../controllers");

router.get("/", authenticate, controllers.getAllContacts);

router.get("/:contactId", authenticate, isValidId, controllers.getContactById);

router.post("/", authenticate, controllers.addContact);

router.delete(
  "/:contactId",
  authenticate,
  isValidId,
  controllers.deleteContact
);

router.put("/:contactId", authenticate, isValidId, controllers.updateContact);
router.patch(
  "/:contactId/favorite",
  authenticate,
  isValidId,
  controllers.updateStatusContact
);

module.exports = router;
