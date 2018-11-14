const mongoose = require('mongoose');

const thingSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    price: {
        type: Number,       // Type Validation
        required: false,    // validation as expected
        match:'',           // match on regex validation
        unique: false,      // unique only search optimisttion but will not validate the value
    },
});

module.exports = mongoose.model('Thing', thingSchema);