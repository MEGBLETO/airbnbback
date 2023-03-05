const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  let token = req.headers.authorization;

//   console.log(token)

  try {
    if (token != null || undefined) {
      jwt.verify(token, "secret", (err, decoded) => {
        if (err) {
            return res.status(401).send({
                auth: false,
                token: null,
                message: "non authorized"
            })
        }
        console.log(token, decoded)
        req.userId = decoded.id
        next()
    });
    } else {
      res.status(403).send({ message: "token not found" });
    }
  } catch (error) {
    throw error;
  }
};



module.exports = verifyToken
