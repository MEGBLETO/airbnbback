const { json } = require("express");
const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  let token = req.headers.authorization;

  bearer = token.replace(/^Bearer\s/, '');

  console.log(token)
  try {
    if (token != null || undefined) {
      jwt.verify(bearer, 'secret', function(err, decoded){
        console.log(decoded)
        if (err) {
            console.log(err)
            return res.status(401).send({
                auth: false,
                token: null,
                message: "non authorized"
            })
        }
       req.userId = decoded.data._id
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
