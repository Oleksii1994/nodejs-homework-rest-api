const { Contact, addSchema } = require("../../models/contact");

const { httpError } = require("../../helpers");

const updateContact = async (req, res, next) => {
  try {
    const { error } = addSchema.validate(req.body);
    if (error) {
      throw httpError(400, error.message);
    }
    const { contactId } = req.params;
    const result = await Contact.findByIdAndUpdate(contactId, req.body, {
      new: true,
    });
    if (!result) {
      throw httpError(404, "Not found");
    }
    res.json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = updateContact;
