const User = require("../Database/user.models");
const bcrypt = require("bcrypt");
const { findOne } = require("../Database/user.models");
const jwt = require("jsonwebtoken");

const jwtSigner = require("../helpers/index");

const { body, validationResult } = require("express-validator");

exports.login = async (req, res, next) => {
  try {
    let useremail = req.body.email;

    let userPassword = req.body.password;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    if ((useremail && userPassword != null) || undefined) {
      let user = await User.findOne({ email: useremail });
      console.log(user);

      if (user) {
        let passwordComp = await bcrypt.compare(userPassword, user.password);
        if (passwordComp === true) {
          let token = jwtSigner(user);
          return res
            .status(200)
            .send({ token: token, message: "This user exist" });
        } else {
          return res.status(401).send({ message: "Wrong credencials" });
        }
      }
      return res
        .status(404)
        .send({ message: "user not found please register" });
    }
  } catch (error) {
    console.log(error, "here")
    next(error);
  }
};
