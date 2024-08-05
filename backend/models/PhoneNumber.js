const mongoose = require('mongoose');

const PhoneNumberSchema = new mongoose.Schema({
    phoneNumber: String,
});

module.exports = mongoose.model('PhoneNumber', PhoneNumberSchema);