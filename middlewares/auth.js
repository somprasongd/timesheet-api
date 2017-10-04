const jwt = require('jsonwebtoken')
const config = require('../config')

module.exports = function(req, res, next) {
    const authHeader = req.header('Authorization')

    if(!authHeader) {
        res.status(401).json({error: 'unauthorized no header'})
        return
    }
    const accessToken = authHeader.match(/Bearer (.*)/)[1]

    jwt.verify(accessToken, config.secretKey, (err, decoded) => {
        if(err){
            res.status(401).json({error: 'unauthorized unvalid token'})
            return
        }

        req.auth = decoded
        next()
    })
}