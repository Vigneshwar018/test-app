const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  full_name: {
    type: String, required: true
  },
  email: {
    type: String, required: true
  },
  password: {
    type: String, required: true
  },
  phone_number: {
    type: Number, required: true
  },
  address: {
    type: String, required: true
  },
  created_time: {
    type: Date, default: Date.now
    }
  });

  module.exports = mongoose.model('Users', UserSchema);