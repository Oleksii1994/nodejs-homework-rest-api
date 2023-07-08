const express = require("express");
const router = express.Router();
const { isValidId, authenticate } = require("../../middlewares");
const ctrl = require("../../controllers/contacts");

router.get("/", authenticate, ctrl.getAllContacts);

router.get("/:contactId", authenticate, isValidId, ctrl.getContactById);

router.post("/", authenticate, ctrl.addContact);

router.delete("/:contactId", authenticate, isValidId, ctrl.deleteContact);

router.put("/:contactId", authenticate, isValidId, ctrl.updateContact);
router.patch(
  "/:contactId/favorite",
  authenticate,
  isValidId,
  ctrl.updateStatusContact
);

module.exports = router;
