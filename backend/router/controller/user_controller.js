const Users = require('../../schema/user_schema')

const data = require('../../../src/data/user')

const getUser = async (req, res, next) => {
  try {
    const s = await Users.find()
    res.json({
      results: s
    })
  } catch (e) {
    console.log(e)
  }
}

const getOneUser = async (req, res, next) => {

  try {
    const q = await Users.findById(req.params.id)
    res.json({
      results: q
    })
  } catch (e) {
    console.log(e)
  }
}

const newUser = async (req, res, next) => {
  const {
    full_name,
    email,
    password,
    address,
    phone_number
  } = req.body
  let newAccount = new Users({
    full_name,
    email,
    password,
    address,
    phone_number
  })
  try {
    const creatUser = await newAccount.save()
    res.status(201).json(creatUser)
  } catch (e) {}
}


const manyUser = async (req, res, next) => {
  try {
    const many = await Users.insertMany(data)
    res.json(many)
  } catch (e) {}
}

exports.getUser = getUser;
exports.getOneUser = getOneUser;
exports.newUser = newUser;
exports.manyUser = manyUser;