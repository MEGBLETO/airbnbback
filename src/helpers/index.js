const jwt = require("jsonwebtoken");




const jwtSigner = (data)=>{
    let token =  jwt.sign({data: data}, 'secret',{ expiresIn: 60 * 60 })
    return token
}



module.exports = jwtSigner