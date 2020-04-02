const Quizes = require('../../schema/quiz_schema')

const data = require ('../../../src/data/quiz')



const getOneQuiz = async (req, res, next) => {

  try {
    const q = await Quizes.findById(req.params.id)
    res.json({
      results: q
    })
  } catch (e) {
    console.log(e)
  }
}


const getQuiz = async (req, res, next) => {
  num = 10
  try {
    const q = await Quizes.aggregate([{
      $sample: {
        size: num
      }
    }])
    res.json({
      results: q
    })
  } catch (e) {
    console.log(e)
  }
}

const getQuizAmount = async (req, res, next) => {
  num = parseInt(req.params.amount)
  try {
    const q = await Quizes.aggregate([{
      $sample: {
        size: num
      }
    }])
    res.json({
      results: q
    })
  } catch (e) {
    console.log(e)
  }
}


const newQuiz = async (req, res, next) => {
  const {
    category,
    type,
    difficulty,
    question,
    correct_answer,
    incorrect_answers
  } = req.body
  let newQuestion = new Quizes({
    category,
    type,
    difficulty,
    question,
    correct_answer,
    incorrect_answers
  })
  try {
    const creatQuiz = await newQuestion.save()
    res.status(201).json(creatQuiz)
  } catch (e) {}
}


const createMany = async (req, res, next) => {
  try {
    const many = await Quizes.insertMany(data.results)
    res.json(many)
  } catch (e) {}
}



exports.getQuizAmount = getQuizAmount;
exports.getQuiz = getQuiz;
exports.getOneQuiz = getOneQuiz;
exports.newQuiz = newQuiz;
exports.createMany = createMany;