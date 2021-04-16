const jwt = require('jsonwebtoken');

module.exports.verifyJwtToken = (req,resp,next) => {
    let token;
    if('authorization' in req.headers)
        token = req.headers['authorization'].split(' ')[1];

    if(!token)
        return resp.status(403).send({ auth:false,message:'There is no token provided!!'});
    else{
        jwt.verify(token,process.env.JWT_SECRET,(err,decoded)=>{
            if(err)
                return resp.status(500).send({auth:false,message:'token authentication faild!!'})
            else{
                req._id = decoded._id;
                next();
            }
        })
    }
}