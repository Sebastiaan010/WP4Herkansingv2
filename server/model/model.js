const mongoose = require('mongoose');

var schema = new mongoose.Schema({

    correctanswer : String,
    question : String
})

const Userdb = mongoose.model('userdb', schema);

module.exports = Userdb;