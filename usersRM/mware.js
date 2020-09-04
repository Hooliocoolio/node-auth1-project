const bcrypt = require('bcryptjs');
const uModel = require('./model');

function authCheck() {
    const authError = {
        Error: "You are not authorized. Please log in."
    }
    return async (req, res, next) => {
        try {
            if(!req.session || !req.session.user) {
                return res.status(401).json(authError)
            }
//-----------------------------------------------------------------------------
// below is a manual way of authentication
//-----------------------------------------------------------------------------
            // const  { username, password } = req.headers
            // if (!username || !password) {
            //     res.status(401).json(authError)
            // } 

            // const user = await Users.findBy({ username }).first()
            // // make sure  user exists in the databased
            // if(!user) {
            //     return res.status(401).json(authError)
            // }
            // // make sure credentials are valid
            // const passwordValid = await bcrypt.compare(password, user.password)

            // if (!passwordValid) {
            //     return res.status(401).json(authError)
            // }
            // // if we match user is authenticated
            next()
        } catch (err) {
            next(err)
        }
    }
}

module.exports = {
    authCheck,
}