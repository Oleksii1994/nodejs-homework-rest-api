const { Contact, updateFavoriteSchema } = require("../../models/contact");

const { httpError } = require("../../helpers");

const updateStatusContact = async (req, res, next) => {
  try {
    const { error } = updateFavoriteSchema.validate(req.body);

    if (error) {
      throw httpError(400, "missing field favorite");
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

module.exports = updateStatusContact;
