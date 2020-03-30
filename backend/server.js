const express = require('express');

const app = express();

app.get('/api', (req, res)=> {
  res.send('hi')
})


app.listen(5000, () => console.log('server is running in 5000'))