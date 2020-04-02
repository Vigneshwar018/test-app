const express = require('express');

const {
  getQuiz,
  getOneQuiz,
  getQuizAmount,
  createMany,
  newQuiz
} = require('./controller/controller')


const router = express.Router();

router.get('/', getQuiz)

router.get('/:amount', getQuizAmount)

router.get('/:id', getOneQuiz)

router.post('/', newQuiz)

//router.post('/all', createMany)


module.exports = router;