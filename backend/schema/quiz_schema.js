const mongoose = require('mongoose');

const QuizSchema = mongoose.Schema({
  category: {
    type: String, required: true
  },
  type: {
    type: String, required: true
  },
  difficulty: {
    type: String, required: true
  },
  question: {
    type: String, required: true
  },
  correct_answer: {
    type: String, required: true
  },
  incorrect_answers: {
    type: [], required: true
  },
  created_time: {
    type: Date, default: Date.now
    }
  });

  module.exports = mongoose.model('Quizes', QuizSchema);