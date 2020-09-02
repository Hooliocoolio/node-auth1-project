const express = require('express');
const bcrypt = require('bcryptjs');
const uModel = require('./model');
const mWare = require('./mware');

const router = express.Router();

/* GETS LIST OF USERS */

router.get('/users', mWare.vipList(), async (req, res, next) => {
    try {
      res.json( await uModel.find())
    } catch (err) {
        next(err)
    }
  })

  /* REGISTERS NEW USER */

router.post('/users/register', async (req, res, next) => {
    try {
      const { username, password } = req.body
      const user = await uModel.findBy({ username }).first()

      if (user) {
        return res.status(409).json({
            Message: "Username is already in use. Please try another one"
        })
      }
      const newUser = await uModel.add({
        username,
        password: await bcrypt.hash(password, 12),
      })
      res.status(201).json({ 
        Message: "You have registered successfully."
      })
    } catch (err) {
      next(err);
    }
  })

/*  LOGIN USER  */
  
router.post('/users/login', async (req, res, next) => {
    try {
      const { username, password } = req.body
      const user = await uModel.findBy({ username}).first()

      if (!user) {
        return res.status(401).json({
          Message: "You've entered invalid username. Please try again"
        })
      }
      const passwordValid = await bcrypt.compare(password, user.password)

      if (!passwordValid) {
        return res.status(401).json({
          Message: "You have entered an incorrect password. Please try again"
        })
      }
      req.session.user = user
      res.json({
        Message: `Welcome ${user.username}!`
      })
    } catch (err) {
      next(err)
    }
})

//-----------------------------------------------------------------------------
/* LOGS OUT USER  */
//-----------------------------------------------------------------------------
router.get('/logout', mWare.vipList(), async (req, res, next) => {
	try {
		req.session.destroy((err) => {
			if (err) {
      
				next(err)
			} else {
				res.status(204).json({
					Message:"You have successfully logged out"
				})
			}
		})
	} catch (err){
		next(err)
	}
})


module.exports = router;
