const mongoose = require('mongoose')

const model = mongoose.model('Hello', new mongoose.Schema({
    'firstName': 'string',
    'lastName': 'string',
    'email': 'string',
}))
