const express = require('express')
const consign = require('consign')
const app = express()
 

consign()
  .include('model')
  .then('controller')
  .then('root')
  .into(app);
 
app.listen(3000)