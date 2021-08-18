const express = require('express');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');

const quiz_router = require ('./router/quiz_routers')
const users_router = require ('./router/users_routers')


const app = express();

app.use(bodyParser.json())

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');

  next();

});


app.use('/api', quiz_router);
app.use ('/api', users_router)

mongoose.connect('mongodb+srv://user1:user0987@cluster0-2fm1d.mongodb.net/test?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.listen(5000, () => console.log('server is running in 5000'))