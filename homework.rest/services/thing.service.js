const mongoose = require('mongoose');
const Thing = require('../models/thing.model');

exports.addAThing = (name, price) => {
    const thing = new Thing({
        _id: new mongoose.Types.ObjectId,
        name: name,
        price: price,
    });

    thing
        .save()
        .then( result => {
            console.log(result);
        }).catch(result => {
            console.log(result);
        });
}