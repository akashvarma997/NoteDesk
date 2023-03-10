var jwt = require('jsonwebtoken');
const jwt_sign = 'This%String%Is%For%Signing';

const fetchUser = (req, res, next) =>{
    // get the user form the JWT token and add id to req object.
    const token = req.header('auth-token');
    if(!token) {
        res.status(401).send({error:'Plese authenticate using a valid token'})
    }
    try {
        const data = jwt.verify(token, jwt_sign);
        req.user = data.user;
        next()
    } catch (error) {
        res.status(401).send({error:'Plese authenticate using a valid token'})
    }

}

module.exports = fetchUser;