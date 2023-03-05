const erorrHandler = (error, req, res, next) => {
    console.log(error)
console.log("hello im the error handler")
    const errStatus = error.statusCode || 500;
    const errMsg = error.message || 'Something went wrong';

     res.status(errStatus).send({
        success: false,
        status: error.status,
        message: errMsg, 
        stack: process.env.NODE_ENV
     })
}


module.exports = erorrHandler