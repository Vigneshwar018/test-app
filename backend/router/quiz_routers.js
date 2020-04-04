const express = require('express');


const {
  getQuiz,
  getOneQuiz,
  getQuizAmount,
  createMany,
  newQuiz
} = require('./controller/controller')


const router = express.Router();

router.get('/quiz', getQuiz)

router.get('/quiz/:amount', getQuizAmount)

router.get('/quiz/:id', getOneQuiz)

router.post('/quiz', newQuiz)

//router.post('/all', createMany)


module.exports = router;