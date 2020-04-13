const express = require('express');

const {
  getUser,
  newUser,
  getOneUser,
  manyUser
} = require('./controller/user_controller')


const router = express.Router();

router.get('/user', getUser)

router.get('/user/:id', getOneUser)

router.post('/user', newUser)

//router.post('/user/all', manyUser)


module.exports = router;