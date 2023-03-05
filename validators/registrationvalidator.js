const { check, body, validationResult } = require("express-validator");

exports.checkEmail = [body("email").isEmail().withMessage('Invalid email please enter a valid one')];

exports.validation = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};
