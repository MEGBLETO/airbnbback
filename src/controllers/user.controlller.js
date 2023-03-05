const User = require("../Database/user.models");
const bcrypt = require("bcrypt");
const { findOne } = require("../Database/user.models");
const jwt = require("jsonwebtoken");

exports.auth = async (req, res, next) => {
  try {
    const password = await bcrypt.hashSync(req.body.password, 10);

    const newUSer = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: password,
      isAdmin: req.body.isAdmin,
    });

    await newUSer.save().then((resultat) => {
      let token = jwt.sign(
        {
          data: resultat,
        },
        "secret",
        { expiresIn: 200 * 200 }
      );

      res.status(200).send({
        user: resultat,
        token: token,
      });
    });
  } catch (error) {
    console.log(error);
    throw error
  }
};

// exports.login = async(req, res) => {
//   try {
//     const data = req.body;
//  await findOne(req.body.email).then((res)=>{
//   console.log(res)
//  })
//   } catch (error) {
//     console.log(error);
//   }
// };

exports.getSingleUser = async (req, res) => {
  try {
    let user = await User.findOne({ _id: req.userId });
    if (!user) {
      res.status(403).send({ message: "user not dound" });
    }
    res.send(user);
  } catch (error) {
    console.log(error);
  }
};





//get all users that are not admin
exports.getAllUsers = async (req, res) => {
  try {
    let users = await User.find({isAdmin: false});
    if (!users) {
      res.status(403).send({ message: "user not dound" });
    }
    res.send(users);
  } catch (error) {
    console.log(error);
  }
};

exports.getUserANdupdate = (req, res) => {

  console.log(req.userId)
  try {
    User.findByIdAndUpdate(req.userId, req.body, { new: true }).then(
      (result) => {
        res.send(result);
      }
    );
  } catch (error) {
    console.log(error);
  }
};

exports.deleteUser = (req, res) => {
  try {
    User.deleteOne({ _id: req.params.id }).then((resultat) => {
      res.send(resultat);
    });
  } catch (error) {}
};
