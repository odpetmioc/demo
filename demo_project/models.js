const mongoose = require('mongoose')

const model = mongoose.model('user', new mongoose.Schema({
    'firstName': 'string',
    'lastName': 'string',
    'email': 'string',
}))

app.post('/user', function (req, res) {
  req.body.firstName
  req.body.lastName
  req.body.email
})
